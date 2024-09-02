import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './common/modalSlice';

const combinedReducer = {
  modal: modalSlice,
};

export default configureStore({
  reducer: combinedReducer,
});
