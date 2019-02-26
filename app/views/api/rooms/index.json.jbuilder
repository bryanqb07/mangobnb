@rooms.each do |room, idx|
  json.set! room.id do
    json.partial! "api/rooms/room.json.jbuilder", room: room
  end
end
