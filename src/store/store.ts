import { configureStore } from '@reduxjs/toolkit'
import { filialApi } from './filial-store/filial-api'
import menuStoreSliceReducer from './menu-store/menu.store.slice'
import { menuApi } from './menu-store/menu-api'

export const store = configureStore({
	reducer: {
		[filialApi.reducerPath]: filialApi.reducer,
		[menuApi.reducerPath]: menuApi.reducer,
		menuStore: menuStoreSliceReducer,
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(
			filialApi.middleware,
			menuApi.middleware
		)
	},
})

export type TypeRootState = ReturnType<typeof store.getState>
