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

  subject(:room) { FactoryBot.build(:room) }

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

    describe "#max_guests" do
        it "should return the max vacancy given existing guest list" do
        test_booking = Booking.new(
          num_guests: 7, start_date: "May 01 2019", end_date: "May 03 2019",
          guest_id: 1, room_id: 1
        )
        expect(room.max_guests([test_booking])).to eq(7)
      end
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
        it "call the max guests method and return vacamcy" do
          new_room = room
          new_room.save!
          start = Date.parse("Apr 30 2019")
          finish = Date.parse("May 01 2019")
          test_booking = Booking.create(
                    num_guests: 7, start_date: start, end_date: finish,
                    guest_id: 1, room_id: new_room.id
          )
          new_room.beds_available(start,finish)
          expect(new_room).to receive(:max_guests)
        end
      end
    end

    describe "#price_per_guest" do
      it "should return the total price / by total guests" do
      end
    end
  end
end
