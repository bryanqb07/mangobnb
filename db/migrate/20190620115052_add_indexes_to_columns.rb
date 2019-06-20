class AddIndexesToColumns < ActiveRecord::Migration[5.2]
  def change
    add_index :bookings, :guest_id
    add_index :bookings, :room_id
    add_index :prices, :room_id
    add_index :restrictions, :room_id
  end
end
