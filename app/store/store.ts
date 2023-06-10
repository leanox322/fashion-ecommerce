import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsSlice } from "./products/products.slice";
import { cartSlice } from "./cart/cart.slice";
import { favouritesSlice } from "./favourites/favourites.slice";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
});

const persistConfig = {
  key: "e-fashion",
  storage,
};

const rootReducer = combineReducers({
  product: productsSlice.reducer,
  cart: cartSlice.reducer,
  favourites: favouritesSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
