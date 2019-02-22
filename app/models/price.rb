class Price < ApplicationRecord
  validates :price_date, :price, :room_id, presence: true

  def self.createPrices(start_date, end_date, price, room_id)
    Date.new(start_date).upto(Date.new(end_date)) do |date|
      Price.create(price: price, price_date: date, room_id: room_id)
    end
  end

end
