import { configureStore } from "@reduxjs/toolkit";
import fetchPhotos from "./fetchPhotos/fetchPhotos";
import { photosApi } from "./api";


export const store = configureStore({
    reducer: {
        fetchPhotos,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(photosApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch