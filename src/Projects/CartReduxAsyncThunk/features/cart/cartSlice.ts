import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

export interface ICartItem {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}

export interface ICartState {
  cartItems: ICartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: ICartState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

// you can change fetch to AXIOS
// export const getCartItems = createAsyncThunk(
//   "cart/getCartItems",
//   async (name, thunkAPI) => {
//     try {
//       // console.log(name);
//       // console.log(thunkAPI);
//       // console.log(thunkAPI.getState()); //we can have access to every store state (cart, modal)
//       thunkAPI.dispatch(openModal()); //modal state is not in cartSlice, but thanks to thunkApi, we can use it
//       const resp = await axios(url);

//       return resp.data;
//     } catch (error) {
//       // for axios 404 is an error
//       return thunkAPI.rejectWithValue("something went wrong");
//     }
//   }
// );

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ////we don't have to return state, because we are using Immer library. THERE IS NO NEED FOR THIS:
    ////  switch (action.type) {
    ////    case "CLEAR_CART":
    ////      return { ...state, cart: [] };
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      //we destructure payload from action here
      // const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * Number(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      //action contains result if fetch() is successful
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state) => {
      //if response has status 404 fetch is fulfilled! Promise rejected from fetch is only for network errors.
      //if we use AXIOS, 404 will be rejected
      state.isLoading = false;
    });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
