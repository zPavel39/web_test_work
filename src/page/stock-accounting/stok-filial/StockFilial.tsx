import React from 'react'
import { useGetFilialQuery } from '../../../store/filial-store/filial-api'
import styles from './stockFilial.module.scss'
const StockFilial: React.FC = () => {
	const { data, isLoading, error } = useGetFilialQuery()

	return (
		<div className={styles.stockFilial}>
			{isLoading && 'Loading...'}
			{error && 'Error'}
			StockFilial{data ? data.length : 0}
		</div>
	)
}

export default StockFilial
