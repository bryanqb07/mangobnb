

require 'rails_helper'

# Things to test:
# Validations
# Associations
# Class Methods

RSpec.describe Booking, type: :model do

  subject(test_booking) { Booking.create(start_date: "04-30-19", end_date: "05-02-19") }

  describe "validations" do
    it { should validate_presence_of(:start_date) }
    it { should validate_presence_of(:end_date) }
    it { should validate_presence_of(:guest_id) }
    it { should validate_presence_of(:room_id) }
    it { should validate_presence_of(:num_guests) }
    it { should validate_presence_of(:confirmation_code) }
    it { should validate_presence_of(:price_at_booking_time) }


    describe "#valid_dates" do
      context "check-in date precedes current date" do

        it {}
      end
      context "checkout-date precedes start date" do
        it {}
      end
      context "booking range extends two weeks" do
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
        bookings = Booking.where(room_id: 1)
        expect(room1.max_guests(bookings)).to eq(4)
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


      end
    end
  end

end
