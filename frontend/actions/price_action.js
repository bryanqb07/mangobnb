export const RECEIVE_PRICES = "RECEIVE_PRICES";
import * as APIUtil from '../util/price_api_util';


export const receivePrices = prices => ({
    type: RECEIVE_PRICES,
    prices
});

export const getPrices = (date) => dispatch => {
    APIUtil.getPrices(date)
        .then(prices => dispatch(receivePrices(prices)));
};


