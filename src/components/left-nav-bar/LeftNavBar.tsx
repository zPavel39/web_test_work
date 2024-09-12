import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './leftNavBar.module.scss'
import CustomSelect from './custon-select/CustomSelect'
import { useActions } from '../../hook/useAction'
import { useTypeSelector } from '../../hook/useTypeSelector'

interface ILeftNavBarProps {
	list: {
		name: string
		link: string
	}[]
}
export const LeftNavBar: React.FC<ILeftNavBarProps> = ({ list }) => {
	const { filial, selectFilial } = useTypeSelector(
		(state: any) => state.menuStore
	)
	const { changeSelectFilial } = useActions()
	return (
		<div className={styles.leftNavBar}>
			<CustomSelect
				data={filial}
				setValue={changeSelectFilial}
				value={selectFilial}
				dataKey='name'
				label='Филиал'
			/>
			<ul className={styles.leftNavBar__list}>
				{list.map(
					(el, key) =>
						el && (
							<li key={key} className={styles.leftNavBar__item}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? styles.leftNavBar__linkActive
											: styles.leftNavBar__linkNoActive
									}
									to={el.link}
								>
									{el.name}
								</NavLink>
							</li>
						)
				)}
			</ul>
		</div>
	)
}
