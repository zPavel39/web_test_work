import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { iGetMenuParams, iRoot } from './iMenu'

export const menuApi = createApi({
	reducerPath: 'menuApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://testjob.checkport.ru/filial/',
	}),
	endpoints: build => ({
		// Запрос меню по id филиала
		getMenu: build.query<iRoot, string | number>({
			query: filial => `${filial}/menu/?limit=10`,
		}),
		getFilterMenu: build.query<
			iRoot,
			{ filial: number | string; filterForm: iGetMenuParams }
		>({
			query: ({ filial, filterForm }) => {
				// Фильтрация параметров: исключаем пустые значения, null, undefined и 'all' для поля active
				const filteredParams = Object.fromEntries(
					Object.entries(filterForm).filter(([key, value]) => {
						// Проверяем поле 'active'
						if (key === 'active') {
							if (value === 'all') return false // Исключаем 'all'
							if (value === 'Активно') {
								return [key, 'active'] // Подставляем значение 'active' для "Активные"
							}
							if (value === 'Не активно') {
								return [key, 'no_active'] // Подставляем значение 'no_active' для "Не активные"
							}
						}
						// Убираем любые параметры, которые пустые строки, null или undefined
						if (value === '' || value === null || value === undefined)
							return false
						return true
					})
				)

				// Формирование строки параметров
				const params = new URLSearchParams(filteredParams as any).toString()
				return `${filial}/menu/?${params}`
			},
		}),
	}),
})

// Экспортируем хуки для запросов
export const { useGetMenuQuery, useGetFilterMenuQuery } = menuApi
