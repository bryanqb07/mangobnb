class CreateRoomsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :room_type, null: false
      t.integer :guest_capacity, null: false, default: 4
      t.string :title, null: false
      t.text :description, null: false
      t.integer :open_rooms
      t.timestamps
    end
  end
end
