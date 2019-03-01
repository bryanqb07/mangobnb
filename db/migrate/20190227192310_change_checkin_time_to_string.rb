class ChangeCheckinTimeToString < ActiveRecord::Migration[5.2]
  def change
    change_column :bookings, :checkin_time, :string
  end
end
