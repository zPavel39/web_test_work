import { configureStore } from '@reduxjs/toolkit'
import { filialApi } from './filial-store/filial-api'

export const store = configureStore({
	reducer: { [filialApi.reducerPath]: filialApi.reducer },
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(filialApi.middleware)
	},
})

export type TypeRootState = ReturnType<typeof store.getState>
