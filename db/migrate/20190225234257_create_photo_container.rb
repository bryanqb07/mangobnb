class CreatePhotoContainer < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :photoUrl
      t.timestamps
    end
  end
end
