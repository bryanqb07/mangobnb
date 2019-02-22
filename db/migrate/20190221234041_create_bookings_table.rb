class CreateBookingsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :num_guests, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.time :checkin_time
      t.integer :guest_id, null: false
      t.integer :room_id, null: false
      t.timestamps
    end
  end
end
