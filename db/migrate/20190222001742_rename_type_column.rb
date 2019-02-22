class RenameTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :rooms, :type, :room_type
  end
end
