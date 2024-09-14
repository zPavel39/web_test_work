import React, { useEffect } from 'react'
import LeftNavBar from '../../components/left-nav-bar/LeftNavBar'
import { Outlet } from 'react-router-dom'
import { ILink } from './IStockAccounting'
import { useGetFilialQuery } from '../../store/filial-store/filial-api'
import { useActions } from '../../hook/useAction'
import styled from './stockAccounting.module.scss'

const linkList: ILink[] = [
	{
		name: 'Меню',
		link: 'stock-menu',
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
	const { data, isError } = useGetFilialQuery()
	const { setFilial, changeMassage } = useActions()

	useEffect(() => {
		if (isError) {
			changeMassage('Произошла ошибка при загрузке данных')
			setFilial([])
		} else if (data) {
			setFilial(data)
		}
	}, [data])

	return (
		<div className={styled.stockAccounting}>
			<LeftNavBar list={linkList} />
			<Outlet />
		</div>
	)
}

export default StockAccounting
