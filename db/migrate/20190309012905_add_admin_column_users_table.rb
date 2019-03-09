class AddAdminColumnUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :admin_priv, :boolean, {:default=>false}
  end
end
