import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { iFilialType } from './iFilial'

export const filialApi = createApi({
	reducerPath: 'filialApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://testjob.checkport.ru/',
	}),
	endpoints: build => ({
		getFilial: build.query<iFilialType[], void>({
			query: () => 'filial/',
		}),
	}),
})

export const { useGetFilialQuery } = filialApi
