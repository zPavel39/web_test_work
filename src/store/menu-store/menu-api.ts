import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { iGetMenuParams, iRoot } from './Imenu'

export const menuApi = createApi({
	reducerPath: 'menuApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://testjob.checkport.ru/filial/', // Базовый URL
	}),
	endpoints: build => ({
		// Запрос меню по ID филиала
		getMenu: build.query<iRoot, string | number>({
			query: filial => `${filial}/menu/`,
		}),
		// Запрос с фильтрацией
		getFilterMenu: build.query<iRoot, iGetMenuParams>({
			query: ({ limit, page, name, filial, tt, active }) => {
				const params = new URLSearchParams()

				params.set('limit', limit.toString())
				params.set('page', page.toString())
				if (name) params.set('name', name)
				if (filial) params.set('filial', filial)
				if (tt) params.set('tt', tt)
				if (active) params.set('active', active)

				return `menu/?${params.toString()}`
			},
		}),
	}),
})

// Экспортируем хуки для запросов
export const { useGetMenuQuery, useGetFilterMenuQuery } = menuApi
