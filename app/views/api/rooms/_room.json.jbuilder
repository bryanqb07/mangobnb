json.extract! room, :title, :description, :guest_capacity, :open_beds, :vacancies
# room.vacancies.each do |k, v|
#   json.set! k do
#     json.extract! v
#   end
#
# end
# json.photoUrls room.photos.map { |file| url_for(file) }
