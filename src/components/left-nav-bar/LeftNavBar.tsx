import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './leftNavBar.module.scss'

interface ILeftNavBarProps {
	list: {
		name: string
		link: string
	}[]
}
export const LeftNavBar: React.FC<ILeftNavBarProps> = ({ list }) => {
	return (
		<div className={styles.leftNavBar}>
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
