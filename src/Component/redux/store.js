import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import userReducer from './slices/userSlice'
import orderReducer from './slices/orderSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  backlist: ['product', 'user']
}
const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  order: orderReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)