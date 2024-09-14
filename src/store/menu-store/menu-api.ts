import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { iGetMenuParams, iRoot } from './iMenu'

export const menuApi = createApi({
	reducerPath: 'menuApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://testjob.checkport.ru/filial/',
	}),
	endpoints: build => ({
		// запрос меню по id филиала
		getMenu: build.query<iRoot, string | number>({
			query: filial => `${filial}/menu/?limit=10`,
		}),
		// запрос меню с фильтром
		getFilterMenu: build.query<
			iRoot,
			{ filial: number | string; filterForm: iGetMenuParams }
		>({
			query: ({ filial, filterForm }) => {
				// исключаем пустые значения, null, undefined и all для поля active
				const filteredParams = Object.fromEntries(
					Object.entries(filterForm).filter(([key, value]) => {
						// проверяем поле active
						if (key === 'active') {
							if (value === 'all') return false
							if (value === 'Активно') {
								return [key, 'active']
							}
							if (value === 'Не активно') {
								return [key, 'no_active']
							}
						}
						// убираем параметры, в недопустимые значения
						if (value === '' || value === null || value === undefined)
							return false
						return true
					})
				)

				const params = new URLSearchParams(filteredParams as any).toString()
				return `${filial}/menu/?${params}`
			},
		}),
	}),
})

export const { useGetMenuQuery, useGetFilterMenuQuery } = menuApi
