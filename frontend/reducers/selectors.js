
export const getAvgPrice = ({entities}, room_id) => {
   let prices = entities.prices ? Object.keys(entities.prices).map(key => entities.prices[key][room_id]["price"])
             : [];
   if (prices.length > 0){
       const reducer = (accumulator, currentValue) => accumulator + currentValue;
       return Math.round(prices.reduce(reducer) / prices.length);
   }
   return prices;
};