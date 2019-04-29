

require 'rails_helper'

# Things to test:
# Validations
# Associations
# Class Methods

RSpec.describe Booking, type: :model do
  #
  # subject(:test_booking) { Booking.create(start_date: "04-30-19", end_date: "05-02-19") }

  describe "validations" do
    it { should validate_presence_of(:start_date) }
    it { should validate_presence_of(:end_date) }
    it { should validate_presence_of(:guest_id) }
    it { should validate_presence_of(:room_id) }
    it { should validate_presence_of(:num_guests) }
    it { should validate_presence_of(:confirmation_code) }
    it { should validate_presence_of(:price_at_booking_time) }

    # self.errors[:start_date] << "Checkin date cannot be in the past." if self.start_date < Date.today
    # self.errors[:end_date] << "Checkout date cannot precede checkin date." if self.end_date <= self.start_date
    # self.errors[:end_date] << "Max booking range -- 2 weeks" if self.end_date - self.start_date > 14
    #


    describe "#valid_dates" do
      context "check-in date precedes current date" do
        start = "May 01 2000"
        finish = "May 10 2000"
        invalid_booking = Booking.new(
                  num_guests: 1, start_date: start, end_date: finish,
                  guest_id: 1, room_id: 3
        )
        invalid_booking.valid?
        expect(invalid_booking.errors[:start_date].to eq(["Checkin date cannot be in the past."]))
      end
      context "checkout-date precedes start date" do
        start = "May 10 2019"
        finish = "May 01 2019"
        invalid_booking = Booking.new(
            num_guests: 1, start_date: start, end_date: finish,
            guest_id: 1, room_id: 3
        )
        it {}
      end
      context "booking range extends two weeks" do
        start = "May 01 2019"
        finish = "May 31 2019"
        invalid_booking = Booking.new(
                  num_guests: 1, start_date: start, end_date: finish,
                  guest_id: 1, room_id: 3
        )
        it {}
      end
    end

    describe "#females_only" do
      it "ensures that only females can book females-only room" do

      end
    end

    describe "#has_vacancy" do
      it "ensures that the room being booked has vacancy" do


      end
    end

  end


  describe "associations" do
    it { should belong_to(:guest)}
    it { should belong_to(:room) }
  end

  describe "class methods" do
    #

    describe "#ensure_price_at_booking" do
      it "set a price for the booking prior to saving" do

      end
    end

    describe "#ensure_unique_confirmation_code" do
      it "check that the booking has a unique confirmation code prior to saving"
    end

    describe "#get_price" do
      it "should return the total price / by total guests"
    end

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
