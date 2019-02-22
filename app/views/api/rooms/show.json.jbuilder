json.partial! "api/rooms/room.json.jbuilder", room: @room
json.photoUrls @room.photos.map { |file| url_for(file) }
