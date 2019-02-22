class RemoveColumnRooms < ActiveRecord::Migration[5.2]
  def change
    remove_column :rooms, :booking_id
  end
end
