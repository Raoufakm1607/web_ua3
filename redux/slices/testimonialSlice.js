'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    testimonials: [],
    error: null,
};

export const testimonialSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {
        addTestimonial: (state, action) => {
            console.log('Adding testimonial to store:', action.payload);
            const newTestimonial = {
                id: Date.now().toString(),
                ...action.payload,
            };
            state.testimonials.push(newTestimonial);
            state.error = null;
        },
        updateTestimonial: (state, action) => {
            const { id, ...updatedData } = action.payload;
            const index = state.testimonials.findIndex(testimonial => testimonial.id === id);

            if (index !== -1) {
                state.testimonials[index] = {
                    ...state.testimonials[index],
                    ...updatedData,
                    updatedAt: new Date().toISOString(),
                };
                state.error = null;
            } else {
                state.error = 'Témoignage non trouvé';
            }
        },
        deleteTestimonial: (state, action) => {
            state.testimonials = state.testimonials.filter(
                testimonial => testimonial.id !== action.payload
            );
        },
        clearError: (state) => {
            state.error = null;
        }
    },
});

export const {
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    clearError
} = testimonialSlice.actions;

export default testimonialSlice.reducer;