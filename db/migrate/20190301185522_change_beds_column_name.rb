class ChangeBedsColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :rooms, :open_rooms, :open_beds
  end
end
