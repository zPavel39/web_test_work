import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilialType } from '../filial-store/iFilial'
import {
	iGetMenuParams,
	iItemMenu,
	IMenuColumnHeader,
	iPaginationSettings,
} from './iMenu'

interface FilterFormUpdatePayload {
	key: keyof iGetMenuParams
	value: any
}
interface PaginationUpdatePayload {
	key: keyof iPaginationSettings
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
	paginationSettings: iPaginationSettings
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
			options: [
				{ id: 1, name: 'Все', key: 'all' },
				{ id: 2, name: 'Активно', key: 'active' },
				{ id: 3, name: 'Не активно', key: 'no_active' },
			],
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
	paginationSettings: {
		limit: 2,
		page: 1,
		total: 0,
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
		// изменение параметров фильтрации
		changeFilterForm: (
			state,
			action: PayloadAction<FilterFormUpdatePayload>
		) => {
			const { key, value } = action.payload

			// Обработка значения для поля 'active'
			let processedValue = value
			if (key === 'active') {
				if (value === 'Активно') {
					processedValue = 'active'
				} else if (value === 'Не активно') {
					processedValue = 'no_active'
				} else if (value === 'Все') {
					processedValue = '' // Пустая строка
				}
			}

			// Обновление состояния
			state.filterForm = { ...state.filterForm, [key]: processedValue }
		},
		// изменяем настройки пагинации
		changePaginationSettings: (
			state,
			action: PayloadAction<PaginationUpdatePayload>
		) => {
			const { key, value } = action.payload
			if (key === 'page') {
				state.paginationSettings.total = value
			}
		},
	},
})

export const { actions } = menuStoreSlice
export default menuStoreSlice.reducer
