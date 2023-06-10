import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/app/types/product.interface";

interface IFavouritesInitialState {
  favourites: IProduct[];
}

const initialState: IFavouritesInitialState = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourites: (state, action: PayloadAction<IProduct>) => {
      const isExists = state.favourites.some(
        (item) => item.id === action.payload.id
      );
      if (isExists) {
        const index = state.favourites.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.favourites.splice(index, 1);
        }
      } else {
        state.favourites.push(action.payload);
      }
    },
  },
});
