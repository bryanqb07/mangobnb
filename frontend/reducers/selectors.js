
export const getAvgPrice = ({entities}, room_id) => {
   let roomPrices = entities.prices ? Object.keys(entities.prices).map(key => entities.prices[key][room_id]["price"])
             : [];
   if (roomPrices.length > 0){
       const reducer = (accumulator, currentValue) => accumulator + currentValue;
       return Math.round(roomPrices.reduce(reducer) / roomPrices.length);
   }
   return roomPrices;
};