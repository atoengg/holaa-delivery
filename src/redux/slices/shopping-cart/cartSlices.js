import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const userId = localStorage.getItem("userId");

const items =
  localStorage.getItem(`cartItems_${userId}`) !== null
    ? JSON.parse(localStorage.getItem(`cartItems_${userId}`))
    : [];

const totalAmount =
  localStorage.getItem(`totalAmount_${userId}`) !== null
    ? JSON.parse(localStorage.getItem(`totalAmount_${userId}`))
    : 0;

const totalQuantity =
  localStorage.getItem(`totalQuantity_${userId}`) !== null
    ? JSON.parse(localStorage.getItem(`totalQuantity_${userId}`))
    : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  // Simpan keranjang belanja pengguna ke local storage sesuai dengan token pengguna
  const userId = localStorage.getItem("userId");

  localStorage.setItem(`cartItems_${userId}`, JSON.stringify(item));

  localStorage.setItem(`totalAmount_${userId}`, JSON.stringify(totalAmount));

  localStorage.setItem(
    `totalQuantity_${userId}`,
    JSON.stringify(totalQuantity)
  );
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // fungsi reducer untuk menambahkan item
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image1: newItem.image1,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    // fungsi reducer untuk mengahapus item
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    // fungsi reducer untuk delete item
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);

        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
