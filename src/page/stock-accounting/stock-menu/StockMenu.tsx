import React, { useEffect } from 'react'
import styles from './stockMenu.module.scss'
import {
	useGetFilterMenuQuery,
	useGetMenuQuery,
} from '../../../store/menu-store/menu-api'
import { useActions } from '../../../hook/useAction'
import { useTypeSelector } from '../../../hook/useTypeSelector'
import TableMenu from './table-menu/TableMenu'
import Pagination from '../../../components/pagination/pagination'

const StockMenu: React.FC = () => {
	const { selectFilial, menu, paginationSettings, filterForm } =
		useTypeSelector(state => state.menuStore)
	const { setMenu, changePaginationSettings } = useActions()

	const { data, error, isLoading } = useGetMenuQuery(selectFilial, {
		skip: !selectFilial,
	})
	const {
		data: filterData,
		error: filterError,
		isLoading: filterLoading,
	} = useGetFilterMenuQuery(
		{ filial: selectFilial, filterForm },
		{
			skip: !selectFilial,
		}
	)
	console.log('-----------------', filterData)
	useEffect(() => {
		if (data) {
			setMenu(data.data)
			changePaginationSettings({ value: data.max_pages, key: 'total' })
		}
		if (filterData) {
			setMenu(filterData.data)
			changePaginationSettings({
				value: filterData.max_pages,
				key: 'total',
			})
		} else {
			setMenu([])
		}
	}, [data, setMenu, filterData])

	return (
		<div className={styles.stockMenu}>
			<TableMenu />
			<Pagination />
		</div>
	)
}

export default StockMenu
