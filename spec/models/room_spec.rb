require 'rails_helper'

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
          guest_id: 1, room_id: room.id
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
          new_room = FactoryBot.create(:room)
          test_guest = FactoryBot.create(:guest)
          start = Date.parse("May 05 2019")
          finish = Date.parse("May 09 2019")
          test_booking = Booking.create(
                    num_guests: 7, start_date: start, end_date: finish,
                    guest_id: test_guest.id, room_id: new_room.id
          )
          expect(new_room.beds_available(start,finish)).to eq(3)
        end
      end
    end

    describe "#price_per_guest" do
      it "should return the total price for given date range" do
        new_room = FactoryBot.create(:room)
        start = Date.parse("May 05 2019")
        finish = Date.parse("May 06 2019")
        Price.create(price_date: start, price: 3333, room_id: new_room.id)
        expect(new_room.price_per_guest(start,finish)).to eq(3333)
      end
    end
  end
end
