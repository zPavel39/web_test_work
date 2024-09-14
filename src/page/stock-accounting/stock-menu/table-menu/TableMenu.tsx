import React from 'react'
import TableMenuHeader from './menu-tableHeader/TableMenuHeader'
import TableMenuBody from './menu-tableBody/TableMenuBody'
import { useTypeSelector } from '../../../../hook/useTypeSelector'
import styles from './tableMenu.module.scss'

const TableMenu: React.FC = () => {
	const { menu } = useTypeSelector(state => state.menuStore)
	return (
		<div className={styles.tableMenu}>
			<table>
				<TableMenuHeader />
				{menu.length > 0 && <TableMenuBody />}
			</table>
		</div>
	)
}

export default TableMenu
