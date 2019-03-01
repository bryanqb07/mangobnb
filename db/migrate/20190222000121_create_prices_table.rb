class CreatePricesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :prices do |t|
      t.date :price_date, null: false
      t.integer :room_id, null: false
      t.integer :price, null: false
    end
  end
end
