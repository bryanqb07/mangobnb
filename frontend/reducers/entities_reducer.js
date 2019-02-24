import { combineReducers } from 'redux';
import roomsReducer from './rooms_reducer';
import photosReducer from './photos_reducer';
import pricesReducer from './prices_reducer';
import bookingsReducer from './bookings_reducer';

export default combineReducers({
    rooms: roomsReducer,
    photos: photosReducer,
    prices: pricesReducer,
    bookings: bookingsReducer
});