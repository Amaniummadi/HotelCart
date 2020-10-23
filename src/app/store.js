import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import roomReducer from '../features/counter/roomsSlice';
import childrenReducer from '../features/counter/childrenSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    room:roomReducer,
    children:childrenReducer,
  },
});
