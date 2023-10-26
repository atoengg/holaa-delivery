import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/shopping-cart/cartSlices";
import cartUiSlice from "./slices/shopping-cart/cartUiSlices";
import paymentSlice from "./slices/payments-details/paymentSlices";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    payments: paymentSlice.reducer,
  },
});

export default store;
