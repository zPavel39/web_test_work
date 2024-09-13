import React from 'react'
import CustomInput from '../../../../../components/custom-Input/CustomInput'
import CustomSelect from '../../../../../components/custom-select/CustomSelect'
import { useTypeSelector } from '../../../../../hook/useTypeSelector'
import styles from './tableMenuHeader.module.scss'

const TableMenuHeader: React.FC = () => {
	const { menuColumnsHeader } = useTypeSelector(state => state.menuStore)
	const [value, setValue] = React.useState<string | number>(0)

	const handleSelect = (item: number | string) => {
		setValue(item)
	}

	return (
		<thead>
			<tr className={styles.tableMenuHeader}>
				{menuColumnsHeader.map((i, key) => (
					<th className={styles.tableMenuHeader__cell} key={i.id}>
						{i.type === 'select' ? (
							<CustomSelect
								setValue={handleSelect}
								value={key}
								data={i.options ?? []}
								colorText='placeholder'
							/>
						) : i.type === 'search' ? (
							<CustomInput
								value={value}
								setValue={setValue}
								placeholder={i.name}
							/>
						) : (
							<span className={styles.tableMenuHeader__title}>{i.name}</span>
						)}
					</th>
				))}
				<th className={styles.tableMenuHeader__lastCell}></th>
			</tr>
		</thead>
	)
}

export default TableMenuHeader
