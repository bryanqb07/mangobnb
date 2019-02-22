class Booking < ApplicationRecord
  validates :start_date, :end_date, :guest_id, :room_id, :num_guests, presence: true
  validate :in_future
  belongs_to :guest
  has_one :room
#  validate :has_capacity
  def get_total_price
    total_price = 0
    prices = Price.where(["(price_date between ? and ? ) and room_id = ?" ,
      self.start_date, self.end_date, room_id])
    prices.each{ |price| total_price += price.price }
    total_price * self.num_guests
  end

  def in_future
    self.start_date >= Date.today
  end

end
