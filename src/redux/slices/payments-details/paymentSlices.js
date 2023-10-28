import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const split = uuid().split("-").join("");
const initialState = {
  payments: {
    id: split,
    name: "",
    email: "",
    noTelepon: "",
    desa: "",
    kodePos: "",
    payments: "",
  },
};

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    addPayment(state, action) {
      state.payments = action.payload;
    },
  },
});

export const paymentActions = paymentSlice.actions;
export default paymentSlice;
