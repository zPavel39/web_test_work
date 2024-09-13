import React from 'react'
import { useTypeSelector } from '../../hook/useTypeSelector'
import { useActions } from '../../hook/useAction'

const Pagination: React.FC = () => {
	const { paginationSettings } = useTypeSelector(state => state.menuStore)
	const { changePaginationSettings } = useActions()
	const pageNumbers = []

	// генерируем номера страниц
	for (let i = 1; i <= paginationSettings.total; i++) {
		pageNumbers.push(i)
	}

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<button
				onClick={() =>
					changePaginationSettings({
						value: paginationSettings.page - 1,
						key: 'page',
					})
				}
				disabled={paginationSettings.page === 1}
			>
				Previous
			</button>

			{pageNumbers.map(number => (
				<button
					key={number}
					onClick={() =>
						changePaginationSettings({
							value: number,
							key: 'page',
						})
					}
					style={{
						fontWeight: number === paginationSettings.page ? 'bold' : 'normal',
						backgroundColor:
							number === paginationSettings.page ? '#d3d3d3' : 'white',
						padding: '5px 10px',
					}}
				>
					{number}
				</button>
			))}

			<button
				onClick={() =>
					changePaginationSettings({
						value: paginationSettings.page + 1,
						key: 'page',
					})
				}
				disabled={paginationSettings.page === paginationSettings.total}
			>
				Next
			</button>
		</div>
	)
}

export default Pagination
