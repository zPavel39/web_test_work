import React from 'react'
import { useTypeSelector } from '../../../../../hook/useTypeSelector'
import styles from './tableMenuBody.module.scss'
import analyticIcon from '../../../../../assets/svg/analytic-icon.svg'
import penIcon from '../../../../../assets/svg/pen-icon.svg'
import basketIcon from '../../../../../assets/svg/basket-icon.svg'

const TableMenuBody: React.FC = () => {
	const { menu } = useTypeSelector(state => state.menuStore)
	return (
		<tbody>
			{menu.map(i => (
				<tr key={i.id} className={styles.tableMenuBody}>
					<td className={styles.tableMenuBody__cell}>{i.name}</td>
					<td className={styles.tableMenuBody__cell}>{i.filial.name}</td>
					<td className={styles.tableMenuBody__cell}>{i.tt.name}</td>
					<td className={styles.tableMenuBody__cell}>
						{i.active ? 'Активно' : 'Не активно'}
					</td>
					<td className={styles.tableMenuBody__cell}>
						{i.export.length > 1 ? (
							i.export.map((item, index) => (
								<div style={{ paddingBottom: '5px' }} key={index}>
									{item}
								</div>
							))
						) : (
							<span>{i.export[0]}</span>
						)}
					</td>
					<td className={styles.tableMenuBody__cellIcon}>
						<div className={styles.tableMenuBody__iconBlock}>
							<img
								src={analyticIcon}
								alt='analytic-icon'
								className={styles.tableMenuBody__icon}
							/>
							<img
								src={penIcon}
								alt='pen-icon'
								className={styles.tableMenuBody__icon}
							/>
							<img
								src={basketIcon}
								alt='basket-icon'
								className={styles.tableMenuBody__icon}
							/>
						</div>
					</td>
				</tr>
			))}
		</tbody>
	)
}

export default TableMenuBody
