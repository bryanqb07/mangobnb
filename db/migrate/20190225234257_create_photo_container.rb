class CreatePhotoContainer < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :location
      t.timestamps
    end
  end
end
