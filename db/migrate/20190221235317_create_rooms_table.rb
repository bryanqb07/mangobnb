class CreateRoomsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :type, null: false
      t.integer :guest_capacity, null: false, default: 4
      t.integer :booking_id
      t.timestamps
    end
  end
end
