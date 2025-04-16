'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './slices/authSlice';
import testimonialReducer from './slices/testimonialSlice';

// Implémentation d'un storage compatible SSR
const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};

// Utiliser un storage compatible avec le client uniquement
const storage = typeof window !== 'undefined'
    ? require('redux-persist/lib/storage').default
    : createNoopStorage();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'testimonials'], // seuls ces reducers seront persistés
};

const rootReducer = combineReducers({
    auth: authReducer,
    testimonials: testimonialReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);