import React, { useEffect } from 'react'
import styles from './stockMenu.module.scss'
import { useGetMenuQuery } from '../../../store/menu-store/menu-api'
import { useActions } from '../../../hook/useAction'
import { useTypeSelector } from '../../../hook/useTypeSelector'
import TableMenu from './table-menu/TableMenu'

const StockMenu: React.FC = () => {
	const { selectFilial, menu } = useTypeSelector(state => state.menuStore)
	const { setMenu } = useActions()

	const { data, error, isLoading } = useGetMenuQuery(selectFilial, {
		skip: !selectFilial,
	})

	useEffect(() => {
		if (data) {
			setMenu(data.data)
		}
	}, [data, setMenu])

	return (
		<div className={styles.stockMenu}>
			<TableMenu />
		</div>
	)
}

export default StockMenu
