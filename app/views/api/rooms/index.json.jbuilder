@rooms.each do |room|
  json.set! room.id do
    json.partial! "api/rooms/room.json.jbuilder", room: room
  end
end
