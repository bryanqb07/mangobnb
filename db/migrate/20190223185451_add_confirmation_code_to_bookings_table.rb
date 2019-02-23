class AddConfirmationCodeToBookingsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :confirmation_code, :string
  end
end
