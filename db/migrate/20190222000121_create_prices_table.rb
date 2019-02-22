class CreatePricesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :prices do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :price, null: false
    end
  end
end
