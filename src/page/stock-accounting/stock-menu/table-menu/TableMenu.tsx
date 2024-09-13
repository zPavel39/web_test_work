import React from 'react'
import TableMenuHeader from './menu-tableHeader/TableMenuHeader'
import TableMenuBody from './menu-tableBody/TableMenuBody'

const TableMenu: React.FC = () => {
	return (
		<div>
			<table>
				<TableMenuHeader />
				<TableMenuBody />
			</table>
		</div>
	)
}

export default TableMenu
