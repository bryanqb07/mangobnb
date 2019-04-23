class Price < ApplicationRecord
  validates :price_date, :price, :room_id, presence: true
  belongs_to :room

  validate :overwrite_existing

  def self.createPrices(start_date, end_date, new_price, room_id)
    Date.new(start_date).upto(Date.new(end_date)) do |date|
      existing_price = Price.find_by(price_date: date, room_id: room_id)
      if price
        existing_price.price = new_price
      else
        Price.create(price: new_price, price_date: date, room_id: room_id)
      end
    end
  end

  def overwrite_existing(new_price)
    price = Price.find_by(price_date: self.price_date, room_id: self.room_id)
    if(price)
      price.price = new_price
    end
  end

end
