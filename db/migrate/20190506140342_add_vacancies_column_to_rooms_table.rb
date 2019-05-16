class AddVacanciesColumnToRoomsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :vacancies, :json, default: {}
  end
end
