export const RECEIVE_PRICES = "RECEIVE_PRICES";
export const START_LOADING_SEARCH = "START_LOADING_SEARCH";

import * as APIUtil from '../util/price_api_util';


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


