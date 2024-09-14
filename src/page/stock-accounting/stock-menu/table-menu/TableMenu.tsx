import React from 'react'
import TableMenuHeader from './menu-tableHeader/TableMenuHeader'
import TableMenuBody from './menu-tableBody/TableMenuBody'
import { useTypeSelector } from '../../../../hook/useTypeSelector'
import styles from './tableMenu.module.scss'

const TableMenu: React.FC = () => {
	const { massage, menu } = useTypeSelector(state => state.menuStore)
	return (
		<div className={styles.tableMenu}>
			<table>
				<TableMenuHeader />
				{menu.length > 0 && <TableMenuBody />}
			</table>
			{menu.length === 0 && massage}
		</div>
	)
}

export default TableMenu
