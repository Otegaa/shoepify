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
    setAmountToZero: (state) => {
      state.amount = 0;
    },
    increaseItem: (state) => {
      state.amount = state.amount + 1;
    },
    decreaseItem: (state) => {
      state.amount = state.amount - 1;
    },
  },
});

export const { setAmountToZero, increaseItem, decreaseItem } =
  cartSlice.actions;

export default cartSlice.reducer;
