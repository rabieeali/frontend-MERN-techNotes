import { faRodAsclepius } from '@fortawesome/free-solid-svg-icons'
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: faRodAsclepius.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})