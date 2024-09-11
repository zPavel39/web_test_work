import React, { useEffect } from 'react'
import { LeftNavBar } from '../../components/left-nav-bar/LeftNavBar'
import { Outlet } from 'react-router-dom'
import { ILink } from './IStockAccounting'
import styled from './stockAccounting.module.scss'

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
	return (
		<div className={styled.stockAccounting}>
			<LeftNavBar list={linkList} />
			<Outlet />
		</div>
	)
}

export default StockAccounting
