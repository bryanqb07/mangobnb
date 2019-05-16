json.set! @price.price_date do
  json.set! @price.room_id do
    json.extract! @price, :price
  end
end
