require 'rails_helper'

# Things to test:
# Validations
# Associations
# Class Methods


RSpec.describe Room, type: :model do

  subject(:room1) { Room.find_by(id: 1) }

  describe "validations" do
    it { should validate_presence_of(:room_type) }
    it { should validate_presence_of(:guest_capacity) }
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
