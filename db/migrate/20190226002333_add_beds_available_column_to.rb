class AddBedsAvailableColumnTo < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :beds_available, :integer
  end
end
