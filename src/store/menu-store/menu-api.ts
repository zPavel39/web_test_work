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
	}),
})

// Экспортируем хуки для запросов
export const { useGetMenuQuery } = menuApi
