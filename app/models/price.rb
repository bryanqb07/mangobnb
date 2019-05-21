
class Price < ApplicationRecord
  validates :price_date, :price, :room_id, presence: true
  validate :in_future
  belongs_to :room

  def in_future
    self.errors[:price_date] << "Invalid price date." if self.price_date.nil? || self.price_date < Date.today
  end

  # factory method
  def self.createPrices(start_date, end_date, new_price, room_id)
    start = Date.parse(start_date)
    finish = Date.parse(end_date)
    raise ArgumentError, "Start date must precede end date" if finish <= start

    prices = {}
    existing_prices = Price.where(["(price_date between ? and ? ) and room_id = ?" ,
      start_date, end_date, room_id])
    existing_prices.map{|price| price.destroy}
    start.upto(finish).map{|date| prices[date] = { room_id => Price.create(price_date: date, price: new_price, room_id: room_id) } }
    prices
  end
end
