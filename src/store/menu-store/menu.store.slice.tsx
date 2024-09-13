import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilialType } from '../filial-store/iFilial'
import { iGetMenuParams, iItemMenu, IMenuColumnHeader } from './iMenu'

interface FilterFormUpdatePayload {
	key: keyof iGetMenuParams
	value: any
}
export interface MenuStoreState {
	filial: IFilialType[]
	selectFilial: number
	formGetMenu: iGetMenuParams
	menu: iItemMenu[]
	// 5 меню филиал точка активно экспорт
	menuColumnsHeader: IMenuColumnHeader[]
	filterForm: iGetMenuParams
}
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
	menuColumnsHeader: [
		{
			id: 1,
			name: 'Название меню',
			field: 'name',
			type: 'search',
		},
		{
			id: 2,
			name: 'Филиал',
			field: 'filial',
			type: 'search',
		},
		{
			id: 3,
			name: 'Торговая точка',
			field: 'tt',
			type: 'search',
		},
		{
			id: 4,
			name: 'Активно',
			field: 'active',
			type: 'select',
			options: ['Все', 'Активно', 'Не активно'],
		},
		{
			id: 5,
			name: 'Экспорт',
			field: 'export',
			type: 'text',
		},
	],
	menu: [],
	filterForm: {
		limit: 10,
		page: 1,
		name: '',
		filial: '',
		tt: '',
		active: 'all',
	},
}

export const menuStoreSlice = createSlice({
	name: 'menuStore',
	initialState,
	reducers: {
		// записываем филиалы
		setFilial: (state, action: PayloadAction<IFilialType[]>) => {
			state.filial = action.payload
		},
		// выбираем филиал
		changeSelectFilial: (state, action: PayloadAction<number>) => {
			state.selectFilial = action.payload
		},
		// записываем данные меню
		setMenu: (state, action: PayloadAction<iItemMenu[]>) => {
			state.menu = action.payload
		},
		// измение параметров фильтрации
		changeFilterForm: (
			state,
			action: PayloadAction<FilterFormUpdatePayload>
		) => {
			const { key, value } = action.payload
			state.filterForm = { ...state.filterForm, [key]: value }
		},
	},
})

export const { actions } = menuStoreSlice
export default menuStoreSlice.reducer
