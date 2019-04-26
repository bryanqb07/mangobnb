require 'rails_helper'

# t.string "room_type", null: false
# t.integer "guest_capacity", default: 4, null: false
# t.string "title", null: false
# t.text "description", null: false
# t.integer "open_beds"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false

# Things to test:
# Validations
# Associations
# Class Methods

RSpec.describe Room, type: :model do

  subject(:room) { Room.new(room_type: "FEMALE", guest_capacity: 10, title: "female room",
      description: "blah") }

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

    end

    describe "#beds_available" do
      context "no bookings for date range" do
        it "should return max room capacity" do
          start = Date.parse("Apr 30 2010")
          finish = Date.parse("May 01 2010")
          expect(room.beds_available(start,finish)).to eq(10)
        end
      end
      context "has existing bookings for date range" do
        it "should return max guests from specified number of bookings" do
          # bookings = Booking.where(room_id: 1)
          # expect(room1.max_guests(bookings)).to eq(4)
        end
      end
    end

    describe "#price_per_guest" do
      it "should return the total price / by total guests" do
      end
    end
  end
end
