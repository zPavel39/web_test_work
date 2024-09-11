import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFilialType } from './iFilial'

export const filialApi = createApi({
	reducerPath: 'filialApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://testjob.checkport.ru/',
	}),
	endpoints: build => ({
		getFilial: build.query<IFilialType[], void>({
			query: () => 'filial/',
		}),
	}),
})

export const { useGetFilialQuery } = filialApi
