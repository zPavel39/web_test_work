import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilialType } from '../filial-store/iFilial'

interface MenuStoreState {
	filial: IFilialType[]
	selectFilial: string | null
}

const initialState: MenuStoreState = {
	filial: [],
	selectFilial: null,
}

export const menuStoreSlice = createSlice({
	name: 'menuStore',
	initialState,
	reducers: {
		setFilial: (state, action: PayloadAction<IFilialType[]>) => {
			state.filial = action.payload
		},
		changeSelectFilial: (state, action: PayloadAction<string | null>) => {
			state.selectFilial = action.payload
		},
	},
})

export const { actions } = menuStoreSlice
export default menuStoreSlice.reducer
