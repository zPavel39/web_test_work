import React from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hook/useAction'
import { useTypeSelector } from '../../hook/useTypeSelector'
import CustomSelect from '../UI/custom-select/CustomSelect'
import styles from './leftNavBar.module.scss'
import CardProfile from '../card-profile/CardProfile'

interface ILeftNavBarProps {
	list: {
		name: string
		link: string
	}[]
}

const LeftNavBar: React.FC<ILeftNavBarProps> = ({ list }) => {
	const { filial, selectFilial } = useTypeSelector(
		(state: any) => state.menuStore
	)
	const { changeSelectFilial } = useActions()

	const handleSearch = ({ value }: { value: number | string; key: string }) => {
		changeSelectFilial(Number(value))
	}

	return (
		<div className={styles.leftNavBar}>
			<CardProfile />
			<CustomSelect
				data={filial}
				setValue={({ value, key }) => handleSearch({ value: value, key })}
				value={filial?.find((el: any) => el.id === selectFilial)?.id || 0}
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

export default LeftNavBar
