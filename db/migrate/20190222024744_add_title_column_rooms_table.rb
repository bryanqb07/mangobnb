class AddTitleColumnRoomsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :title, :string
    add_column :rooms, :description, :string
  end
end
