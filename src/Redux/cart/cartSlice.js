import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: 125,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseItem: (state) => {
      state.amount = state.amount + 1;
    },
    decreaseItem: (state) => {
      state.amount = state.amount - 1;
    },
    totalPrice: (state) => {
      state.total = state.amount * state.price;
    },
  },
});

export const { increaseItem, decreaseItem, totalPrice } = cartSlice.actions;

export default cartSlice.reducer;
