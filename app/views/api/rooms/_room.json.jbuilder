json.extract! room, :title, :description, :guest_capacity
json.photoUrls room.photos.map { |file| url_for(file) }
