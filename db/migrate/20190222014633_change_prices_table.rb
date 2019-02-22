class ChangePricesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :prices, :end_date
    rename_column :prices, :start_date, :price_date
  end
end
