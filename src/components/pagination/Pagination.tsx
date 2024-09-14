import React from 'react'
import { useTypeSelector } from '../../hook/useTypeSelector'
import { useActions } from '../../hook/useAction'
import ArrowLeft from './../../assets/svg/arrow-left.svg'
import ArrowRight from './../../assets/svg/arrow-right.svg'
import styles from './pagination.module.scss'

const Pagination: React.FC = () => {
	const { paginationSettings } = useTypeSelector(state => state.menuStore)
	const { changePaginationSettings } = useActions()

	const { page, total } = paginationSettings
	const range = 1

	// функция смены страницы
	const goToPage = (pageNumber: number) => {
		if (pageNumber >= 1 && pageNumber <= total) {
			changePaginationSettings({
				value: pageNumber,
				key: 'page',
			})
		}
	}

	// функция генерации номеров страниц
	const getPageNumbers = () => {
		let pages = []

		pages.push(1)

		if (page > range + 2) {
			pages.push('...')
		}

		for (
			let i = Math.max(2, page - range);
			i <= Math.min(total - 1, page + range);
			i++
		) {
			pages.push(i)
		}

		if (page < total - range - 1) {
			pages.push('...')
		}

		if (total > 1) {
			pages.push(total)
		}

		return pages
	}

	const pageNumbers = getPageNumbers()

	return (
		<div className={styles.pagination}>
			<button
				className={styles.pagination__btnImg}
				onClick={() => goToPage(page - 1)}
				disabled={page === 1}
			>
				<img src={ArrowLeft} alt='<' />
			</button>

			{pageNumbers.map((number, index) =>
				typeof number === 'number' ? (
					<button
						className={`${styles.pagination__btn} ${
							number === page ? styles.pagination__btnActive : ''
						}`}
						key={index}
						onClick={() => goToPage(number)}
					>
						{number}
					</button>
				) : (
					<span key={index} className={styles.pagination__dots}>
						{number}
					</span>
				)
			)}

			<button
				className={styles.pagination__btnImg}
				onClick={() => goToPage(page + 1)}
				disabled={page === total}
			>
				<img src={ArrowRight} alt='>' />
			</button>
		</div>
	)
}

export default Pagination
