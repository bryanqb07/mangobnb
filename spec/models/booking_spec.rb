require 'rails_helper'

RSpec.describe Booking, type: :model do
  #
  test_room = FactoryBot.create(:room)
  test_guest = FactoryBot.create(:guest)
  start_date = "May 15 2019"
  end_date = "May 17 2019"
  subject(:booking) { Booking.new(start_date: start_date, end_date: end_date,
    guest_id: test_guest.id, room_id: test_room.id, num_guests: 2 ) }

  describe "validations" do
    it { should validate_presence_of(:guest_id) }

    describe "#valid_dates" do
      context "check-in date precedes current date" do
        it "should throw invalid date error" do
          start = "May 01 2000"
          finish = "May 15 2000"
          invalid_booking = Booking.new(
                    num_guests: 1, start_date: start, end_date: finish,
                    guest_id: test_guest.id, room_id: test_room.id
          )
          invalid_booking.valid?
          expect(invalid_booking.errors[:start_date]).to eq(["Checkin date cannot be in the past."])
        end
      end
      context "checkout-date precedes start date" do
        it "should throw an error" do
          start = "May 10 2019"
          finish = "May 01 2019"
          invalid_booking = Booking.new(
              num_guests: 1, start_date: start, end_date: finish,
              guest_id: test_guest.id, room_id: test_room.id
          )
          invalid_booking.valid?
          expect(invalid_booking.errors[:end_date]).to eq(["Checkout date cannot precede checkin date."])
        end
      end
      context "booking range extends two weeks" do
        it "should throw an error" do
          start = "May 01 2019"
          finish = "May 31 2019"
          invalid_booking = Booking.new(
                    num_guests: 1, start_date: start, end_date: finish,
                    guest_id: test_guest.id, room_id: test_room.id
          )
          invalid_booking.valid?
          expect(invalid_booking.errors[:end_date]).to eq(["Max booking range -- 2 weeks"])
        end
      end
    end

    describe "#females_only" do
      context "female guest tries to book female only room" do
        it "should not raise error" do
          start = "May 01 2019"
          finish = "May 02 2019"
          female_guest = FactoryBot.create(:guest, gender: "Female(s) Only")
          female_room = FactoryBot.create(:room, room_type: "FEMALE")
          valid_booking = Booking.new(
                    num_guests: 1, start_date: start, end_date: finish,
                    guest_id: female_guest.id, room_id: female_room.id
          )
          expect(valid_booking).to be_valid
        end
      end

      context "male guest tries to book female-only room" do
        it "should not be valid" do
          start = "May 01 2019"
          finish = "May 02 2019"
          male_guest = FactoryBot.create(:guest, gender: "Male(s) Only")
          female_room = FactoryBot.create(:room, room_type: "FEMALE")
          invalid_booking = Booking.new(
                    num_guests: 1, start_date: start, end_date: finish,
                    guest_id: male_guest.id, room_id: female_room.id
          )
          invalid_booking.valid?
          expect(invalid_booking.errors[:gender]).to eq(["Only females can book females-only dorm room."])
        end
      end
    end

    describe "#has_vacancy" do
      context "the number of guests is 0" do
        it "should raise an error" do
          invalid_booking =  Booking.create(start_date: start_date, end_date: end_date,
          guest_id: test_guest.id, room_id: test_room.id, num_guests: 0 )
          invalid_booking.valid?
          expect(invalid_booking.errors[:guest_capacity]).to eq(["Must have at least one guest!"])
        end
      end

      context "the room has no vacancy" do
        it "should raise an error" do
          invalid_booking =  Booking.create(start_date: start_date, end_date: end_date,
          guest_id: test_guest.id, room_id: test_room.id, num_guests: 20 )
          invalid_booking.valid?
          expect(invalid_booking.errors[:guest_capacity]).to eq(["Room full for one or more selected dates. Please re-do search."])
        end
      end
    end

  end


  describe "associations" do
    it { should belong_to(:guest)}
    it { should belong_to(:room) }
  end

  describe "class methods" do

    describe "#ensure_price_at_booking" do
      it "set a price for the booking prior to saving" do
        start = "May 15 2019"
        next_date = "May 16 2019"
        test_price = Price.create(price_date: start, price: 300, room_id: test_room.id)
        test_price = Price.create(price_date: next_date, price: 450, room_id: test_room.id)
        expect(booking.price_at_booking_time).to eq(1500) # 2 guests * 750
      end
    end

    describe "#ensure_unique_confirmation_code" do
      it "check that the booking has a unique confirmation code prior to saving" do
        start = "May 15 2019"
        end_date = "May 16 2019"
        test_booking1 = Booking.create(start_date: start_date, end_date: end_date,
          guest_id: test_guest.id, room_id: test_room.id, num_guests: 1 )
        test_booking2 = Booking.new(start_date: start_date, end_date: end_date,
          guest_id: test_guest.id, room_id: test_room.id, num_guests: 1,
          confirmation_code: test_booking1.confirmation_code)
        expect(test_booking2.confirmation_code).not_to eq(test_booking1.confirmation_code)
      end
    end
    # same as get_price_at_booking method
    # describe "#get_price" do
    #   it "should return the total price / by total guests" do
    #
    #   end
    # end
  end

  describe "model methods" do

    describe "::generate_confirmation_code" do
      it "should generate a confirmation code after booking is initialized" do
        start = "May 01 2019"
        finish = "May 10 2019"
        booking = Booking.new(
                  num_guests: 1, start_date: start, end_date: finish,
                  guest_id: 1, room_id: 3
        )
        expect(booking.confirmation_code).to be_truthy
      end
    end
  end

end
