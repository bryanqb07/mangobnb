
export const getAvgPrice = ({prices}, room_id) => {
   let roomPrices = prices ? Object.keys(prices).map(key => prices[key][room_id]["price"])
             : [];
   if (roomPrices.length > 0){
       const reducer = (accumulator, currentValue) => accumulator + currentValue;
       return Math.round(roomPrices.reduce(reducer) / roomPrices.length);
   }
   return roomPrices;
};