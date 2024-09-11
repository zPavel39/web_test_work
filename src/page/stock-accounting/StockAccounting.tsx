import React, { useEffect } from 'react'
import { LeftNavBar } from '../../components/left-nav-bar/LeftNavBar'
import { Outlet } from 'react-router-dom'
import { ILink } from './IStockAccounting'
import styled from './stockAccounting.module.scss'
import { useGetFilialQuery } from '../../store/filial-store/filial-api'
import { useActions } from '../../hook/useAction'

const linkList: ILink[] = [
	{
		name: 'Филиалы',
		link: 'stock-filial',
	},
	{
		name: 'Накладные',
		link: 'stock-invoices',
	},
	{
		name: 'Компоненты',
		link: 'stock-components',
	},
	{
		name: 'Выпуск товара',
		link: 'stock-inventory',
	},
]

const StockAccounting: React.FC = () => {
	const { data, isLoading, error } = useGetFilialQuery()
	const { setFilial } = useActions()

	useEffect(() => {
		if (data) {
			setFilial(data)
		}
	}, [data])

	console.log(data)

	return (
		<div className={styled.stockAccounting}>
			<LeftNavBar list={linkList} />
			<Outlet />
		</div>
	)
}

export default StockAccounting
