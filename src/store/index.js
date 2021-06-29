import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice';
import movieSlice from './reducers/movieSlice';

export default configureStore({
  reducer: {
      user:userSlice,
      movie:movieSlice
  },
  middleware:getDefaultMiddleware({
    serializableCheck: false,
  })
})