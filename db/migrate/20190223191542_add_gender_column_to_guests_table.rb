class AddGenderColumnToGuestsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :guests, :gender, :string
  end
end
