class Booking < ApplicationRecord
  validates :start_date, :end_date, :guest_id, :room_id, :num_guests, presence: true
  validate :in_future
  validate :has_vacancy?
  belongs_to :guest
  belongs_to :room

  def total_price
    total_price = 0
    prices = Price.where(["(price_date between ? and ? ) and room_id = ?" ,
      self.start_date, self.end_date, room_id])
    prices.each{ |price| total_price += price.price }
    total_price * self.num_guests
  end

  def in_future
    self.start_date >= Date.today
  end

  def has_vacancy?
    raise("Must have at least one guest!") if self.num_guests < 1
    if self.num_guests > self.room.beds_available(self.start_date, self.end_date)
      self.errors[:guest_capacity] << "Room full for given dates."
    end
  end

end
