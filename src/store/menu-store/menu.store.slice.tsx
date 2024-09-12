import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilialType } from '../filial-store/iFilial'
import { iGetMenuParams, iItemMenu } from './Imenu'

export interface MenuStoreState {
	filial: IFilialType[] // Массив филиалов
	selectFilial: number // Выбранный филиал
	formGetMenu: iGetMenuParams // Параметры фильтрации меню
	menu: iItemMenu[] // Массив элементов меню
}

// Начальное состояние
const initialState: MenuStoreState = {
	filial: [],
	selectFilial: 0,
	formGetMenu: {
		limit: 3,
		page: 1,
		name: 'Example',
		filial: 'Filial1',
		tt: 'TT1',
		active: 'active',
	},
	menu: [],
}

export const menuStoreSlice = createSlice({
	name: 'menuStore',
	initialState,
	reducers: {
		// Устанавливаем филиалы
		setFilial: (state, action: PayloadAction<IFilialType[]>) => {
			state.filial = action.payload
		},
		// Меняем выбранный филиал
		changeSelectFilial: (state, action: PayloadAction<number>) => {
			state.selectFilial = action.payload
		},
		// Устанавливаем данные меню
		setMenu: (state, action: PayloadAction<iItemMenu[]>) => {
			state.menu = action.payload
		},
	},
})

export const { actions } = menuStoreSlice
export default menuStoreSlice.reducer
