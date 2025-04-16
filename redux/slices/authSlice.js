'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    currentUser: null,
    isAuthenticated: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            const { email } = action.payload;
            const userExists = state.users.find(user => user.email === email);

            if (userExists) {
                state.error = 'Cet email est déjà utilisé';
                return;
            }

            state.users.push(action.payload);
            state.error = null;
        },
        login: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find(user => user.email === email && user.password === password);

            if (user) {
                state.currentUser = user;
                state.isAuthenticated = true;
                state.error = null;
            } else {
                state.error = 'Email ou mot de passe incorrect';
            }
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
});

export const { register, login, logout, clearError } = authSlice.actions;

export default authSlice.reducer;