import { combineReducers } from 'redux';
import roomsReducer from './rooms_reducer';
import photosReducer from './photos_reducer';
import pricesReducer from './prices_reducer';
import bookingsReducer from './bookings_reducer';
import guestReducer from './guests_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
    rooms: roomsReducer,
    photos: photosReducer,
    prices: pricesReducer,
    bookings: bookingsReducer,
    guests: guestReducer,
    users: usersReducer
});
