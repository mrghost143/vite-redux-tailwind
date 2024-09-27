import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../shared/reducer';

const store = configureStore({
    reducer: rootReducer,
});
export default store;
