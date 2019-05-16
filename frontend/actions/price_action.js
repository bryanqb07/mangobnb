export const RECEIVE_PRICES = "RECEIVE_PRICES";
export const RECEIVE_PRICE = "RECEIVE_PRICE";
export const START_LOADING_SEARCH = "START_LOADING_SEARCH";

import * as APIUtil from '../util/price_api_util';


export const receivePrice = price => ({
  type: RECEIVE_PRICES,
  price
});

const receivePrices = prices => ({
    type: RECEIVE_PRICES,
    prices
});

const startLoadingSearch = () => ({
    type: START_LOADING_SEARCH
});

export const getPrices = (date) => dispatch => {
    dispatch(startLoadingSearch());
    return APIUtil.getPrices(date)
        .then(prices => dispatch(receivePrices(prices)));
};


export const postPrice = (date) => dispatch => {
    APIUtil.postPrice(date)
        .then(price => dispatch(receivePrices(price)));
};




