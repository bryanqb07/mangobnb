class AddColumnRoomId < ActiveRecord::Migration[5.2]
  def change
    add_column :prices, :room_id, :integer
  end
end
