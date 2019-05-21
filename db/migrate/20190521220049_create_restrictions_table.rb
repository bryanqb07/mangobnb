class CreateRestrictionsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :restrictions do |t|
      t.date :restriction_date, null: false
      t.integer :room_id, null: false
      t.integer :net_vacancies, null: false
    end
  end
end
