import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/shopping-cart/cartSlices";
import cartUiSlice from "./slices/shopping-cart/cartUiSlices";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
