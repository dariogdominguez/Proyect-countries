import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from '../features/filters/countriesSlice'

export const store = configureStore({
    reducer: {
        countries : countriesSlice,
    }
})