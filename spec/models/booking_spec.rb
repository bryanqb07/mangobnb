# validates :start_date, :end_date, :guest_id, :room_id, :num_guests, :confirmation_code, :price_at_booking_time, presence: true
# validate :valid_dates
# validate :has_vacancy?
# validate :females_only
# after_initialize :ensure_unique_confirmation_code
# after_initialize :ensure_price_at_booking
# belongs_to :guest
# belongs_to :room


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
  end


  describe "associations" do
    it { should have_many(:prices)}
    it { should have_many(:bookings)}
    it { should have_many(:guests).through(:bookings)}
  end

  describe "class methods" do
    #
    describe "#max_guests" do
      it "should return max guests from specified number of bookings" do
        bookings = Booking.where(room_id: 1)
        expect(room1.max_guests(bookings)).to eq(4)
      end
    end

    describe "#beds_available" do
      it "should return an min number of beds for a given date range"
    end

    describe "#price_per_guest" do
      it "should return the total price / by total guests"
    end

  end
end
