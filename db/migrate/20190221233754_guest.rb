class Guest < ActiveRecord::Migration[5.2]
  def change
    create_table :guests do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :gender, null: false
      t.timestamps
    end
  end
end
