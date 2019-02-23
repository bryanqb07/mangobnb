class DropBookingIdColumnGuests < ActiveRecord::Migration[5.2]
  def change
    remove_column :guests, :booking_id
  end
end
