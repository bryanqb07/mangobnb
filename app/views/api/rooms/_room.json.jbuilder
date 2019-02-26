json.extract! room, :title, :description, :guest_capacity, :open_beds
json.photoUrls room.photos.map { |file| url_for(file) }
