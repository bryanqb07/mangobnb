class Room < ApplicationRecord
  validates :room_type, :guest_capacity, presence: true
  has_many :bookings
  validate :has_space?

    # ,
    # primary_key: :id,
    # foreign_key: :room_id,
    # class_name: 'Booking'

  #
  # has_many :reviews,
  # primary_key: :id,
  # foreign_key: :bench_id,
  # class_name: 'Review'
  #

  # has_many :guests, through: :bookings
  has_many :prices

  def get_bookings_by_date(start_date, end_date)
    self.bookings.where(["start_date >= ? and end_date <= ?", start_date, end_date])
  end

  def has_space?(start_date, end_date, new_guests)
    raise("Must have at least one guest!") if new_guests < 1
    bookings = self.get_bookings_by_date(start_date, end_date)
    existing_guests = self.get_existing_guests(bookings)
    self.errors[:guest_capacity] << "Room full for given dates." if ((existing_guests + new_guests) >= self.guest_capacity )
  end

  def get_existing_guests(bookings)
    existing_guests = 0
    bookings.each{ |booking| existing_guests += booking.num_guests }
    existing_guests
  end

  def beds_available(start_date, end_date)
      bookings = self.get_bookings_by_date(start_date, end_date)
      existing_guests = self.get_existing_guests(bookings)
      self.guest_capacity - existing_guests >= 0 ? self.guest_capacity - existing_guests : 0
  end
end
