import React, { useEffect } from 'react'
import styles from './stockFilial.module.scss'
import { useGetMenuQuery } from '../../../store/menu-store/menu-api'
import { useActions } from '../../../hook/useAction'
import { useTypeSelector } from '../../../hook/useTypeSelector'

const StockFilial: React.FC = () => {
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
		<div className={styles.stockFilial}>
			{menu?.map(i => (
				<div key={i.id}>
					<h3>{i.name}</h3>
				</div>
			))}
		</div>
	)
}

export default StockFilial
