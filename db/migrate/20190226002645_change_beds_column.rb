class ChangeBedsColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :rooms, :beds_available, :open_beds
  end
end
