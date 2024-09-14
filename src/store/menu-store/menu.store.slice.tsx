import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { iFilialType } from '../filial-store/iFilial'
import {
	iGetMenuParams,
	iItemMenu,
	iMenuColumnHeader,
	iPaginationSettings,
} from './iMenu'

interface iFilterFormUpdatePayload {
	key: keyof iGetMenuParams
	value: any
}
interface iPaginationUpdatePayload {
	key: keyof iPaginationSettings
	value: any
}
export interface iMenuStoreState {
	filial: iFilialType[]
	selectFilial: number
	formGetMenu: iGetMenuParams
	menu: iItemMenu[]
	menuColumnsHeader: iMenuColumnHeader[]
	filterForm: iGetMenuParams
	paginationSettings: iPaginationSettings
	massage: string
	error: boolean
}
const initialState: iMenuStoreState = {
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
		limit: 2,
		page: 1,
		name: '',
		filial: '',
		tt: '',
		active: 'all',
	},
	paginationSettings: {
		page: 1,
		total: 0,
	},
	massage: '',
	error: false,
}

export const menuStoreSlice = createSlice({
	name: 'menuStore',
	initialState,
	reducers: {
		// записываем филиалы
		setFilial: (state, action: PayloadAction<iFilialType[]>) => {
			state.filial = action.payload
		},
		// выбираем филиал и сбрасываем параметры страницы пагинации
		changeSelectFilial: (state, action: PayloadAction<number>) => {
			state.selectFilial = action.payload
			state.paginationSettings.page = 1
			state.filterForm.page = 1
		},
		// записываем данные меню
		setMenu: (state, action: PayloadAction<iItemMenu[]>) => {
			if (action.payload.length > 0) {
				state.menu = action.payload
			} else if (action.payload.length === 0) {
				state.menu = []
			}
		},
		// изменение параметров фильтрации
		changeFilterForm: (
			state,
			action: PayloadAction<iFilterFormUpdatePayload>
		) => {
			const { key, value } = action.payload

			let processedValue = value

			if (key === 'active') {
				if (value === 'Активно') {
					processedValue = 'active'
				} else if (value === 'Не активно') {
					processedValue = 'no_active'
				} else if (value === 'Все') {
					processedValue = ''
				}
			}
			state.filterForm = { ...state.filterForm, [key]: processedValue }
		},
		// изменяем настройки пагинации
		changePaginationSettings: (
			state,
			action: PayloadAction<iPaginationUpdatePayload>
		) => {
			const { key, value } = action.payload
			if (key === 'total') {
				state.paginationSettings.total = value
			}
			if (key === 'page') {
				state.paginationSettings.page = value
				state.filterForm.page = value
			}
		},
		changeMassage: (state, action: PayloadAction<string>) => {
			state.massage = action.payload
		},
	},
})

export const { actions } = menuStoreSlice
export default menuStoreSlice.reducer
