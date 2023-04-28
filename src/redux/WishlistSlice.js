import {createSlice} from '@reduxjs/toolkit';

export const WishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    data: [],
  },
  reducers: {
    addToWishlist(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {addToWishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;
