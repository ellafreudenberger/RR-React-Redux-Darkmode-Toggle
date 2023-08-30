import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './components/dataSlice'
import { logger } from './components/middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})