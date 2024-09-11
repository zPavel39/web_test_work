import { configureStore } from '@reduxjs/toolkit'
import { filialApi } from './filial-store/filial-api'
import menuStoreSliceReducer from './menu-store/menu.store.slice'

export const store = configureStore({
	reducer: {
		[filialApi.reducerPath]: filialApi.reducer,
		menuStore: menuStoreSliceReducer,
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(filialApi.middleware)
	},
})

export type TypeRootState = ReturnType<typeof store.getState>
