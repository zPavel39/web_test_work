import React, { useEffect } from 'react'
import styles from './stockMenu.module.scss'
import { useGetFilterMenuQuery } from '../../../store/menu-store/menu-api'
import { useActions } from '../../../hook/useAction'
import { useTypeSelector } from '../../../hook/useTypeSelector'
import TableMenu from './table-menu/TableMenu'
import Pagination from '../../../components/pagination/Pagination'

const StockMenu: React.FC = () => {
	const { selectFilial, paginationSettings, filterForm, massage } =
		useTypeSelector(state => state.menuStore)
	const { setMenu, changePaginationSettings, changeMassage } = useActions()

	const { data: filterData, error: filterError } = useGetFilterMenuQuery(
		{ filial: selectFilial, filterForm },
		{
			skip: !selectFilial || !filterForm,
		}
	)

	useEffect(() => {
		if (selectFilial) {
			if (filterError) {
				changeMassage('Произошла ошибка при загрузке данных')
				setMenu([])
			} else if (filterData?.data && filterData?.max_pages) {
				setMenu(filterData.data)
				changePaginationSettings({
					value: filterData.max_pages,
					key: 'total',
				})
			} else {
				setMenu([])
				changeMassage('Ничего не найдено, попробуйте изменить параметры поиска')
			}
		} else {
			changeMassage('Выберите филиал')
		}
	}, [filterData, filterError])

	return (
		<div className={styles.stockMenu}>
			<TableMenu />
			{paginationSettings.total > 1 && <Pagination />}
		</div>
	)
}

export default StockMenu
