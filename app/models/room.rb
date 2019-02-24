class Room < ApplicationRecord
  validates :room_type, :guest_capacity, presence: true
  has_many :bookings
  has_many :guests, through: :bookings
  has_many :prices
  has_many_attached :photos

  def get_bookings_by_date(start_date, end_date)
    self.bookings.where(["start_date >= ? and end_date <= ?", start_date, end_date])
  end

  def get_existing_guests(bookings)
    existing_guests = 0
    bookings.each{ |booking| existing_guests += booking.num_guests }
    existing_guests
  end

  def beds_available(start_date, end_date)
      bookings = self.get_bookings_by_date(start_date, end_date)
      return if !bookings
      existing_guests = self.get_existing_guests(bookings)
      self.guest_capacity - existing_guests >= 0 ? self.guest_capacity - existing_guests : 0
  end

  def price_per_guest(start_date, end_date)
    price_per_guest = 0
    prices = Price.where(["(price_date between ? and ? ) and room_id = ?" ,
      start_date, end_date, self.id])
    prices.each{ |price| total_price += price.price }
    price_per_guest
  end

end
