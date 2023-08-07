import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// import { configureStore } from '@reduxjs/toolkit'
// import { apiSlice } from './api/apiSlice'

// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: 'apiSlice.reducer',
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// })
