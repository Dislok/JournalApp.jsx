import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { jurnalSlice } from './journal/journalSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: jurnalSlice.reducer,
  },
})