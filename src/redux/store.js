import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './PostSlice';
import WishlistReducer from './WishlistSlice';
export const store = configureStore({
  reducer: {
    post: PostReducer,
    wishlist: WishlistReducer,
  },
});
