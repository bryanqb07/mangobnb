class DropPriceColumnBookingsTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :bookings, :price, :price_at_booking_time
  end
end
