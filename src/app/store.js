import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
