import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user';
import weatherReducer from './weather'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducers = combineReducers({persisted: userReducer, weather: weatherReducer})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const AppDispatch = () => useDispatch<AppDispatchType>() //

export let persistor = persistStore(store)

