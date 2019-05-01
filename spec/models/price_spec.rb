require 'rails_helper'

RSpec.describe Price, type: :model do

  subject(:price) { FactoryBot.build(:price) }

  describe "validations" do
    it { should validate_presence_of(:price_date) }
    it { should validate_presence_of(:price) }
    it { should validate_presence_of(:room_id) }

    describe "in_future" do
      it "ensures past prices cannot be created or altered" do
        past_price = Price.new(price_date: Date.parse("Apr 15 2000"), price: 555, room_id: 2)
        expect(past_price).to_not be_valid
      end
    end
  end

  describe "associations" do
    it { should belong_to(:room) }
  end

  describe "model methods" do
    #
    describe "::create_prices" do
      context "prices don't exist for date range" do
        it "should create new prices for date range" do
          start_date = "May 01 2019"
          end_date = "May 05 2019"
          test_room = FactoryBot.create(:room)
          Price.createPrices(start_date, end_date, 5312, test_room.id)
          last_price = Price.find_by(price: 5312)
          expect(last_price).not_to be_falsey
        end
      end
      context "prices already exist for date range" do
        it "should delete old prices and replace with new new ones" do
          start = "May 25 2019"
          finish = "May 26 2019"
          test_price = Price.create(price_date: start, price: 500, room_id: 2)
          test_room = FactoryBot.create(:room)
          Price.createPrices(start,finish, 1500, room_id: test_room.id)
          expect(test_price.id).to be_falsey
        end
      end
    end
  end
end
