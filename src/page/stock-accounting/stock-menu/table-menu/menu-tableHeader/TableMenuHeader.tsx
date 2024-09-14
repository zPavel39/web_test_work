import React from 'react'
import CustomInput from '../../../../../components/UI/custom-Input/CustomInput'
import CustomSelect from '../../../../../components/UI/custom-select/CustomSelect'
import { useActions } from '../../../../../hook/useAction'
import { useTypeSelector } from '../../../../../hook/useTypeSelector'
import { iGetMenuParams } from '../../../../../store/menu-store/iMenu'
import styles from './tableMenuHeader.module.scss'

const TableMenuHeader: React.FC = () => {
	const { menuColumnsHeader, filterForm } = useTypeSelector(
		state => state.menuStore
	)
	const { changeFilterForm } = useActions()

	const handleSearch = ({ value, key }: { value: string; key: string }) => {
		changeFilterForm({ value: value, key: key as keyof iGetMenuParams })
	}

	return (
		<thead>
			<tr className={styles.tableMenuHeader}>
				{menuColumnsHeader.map((i, key) => (
					<th className={styles.tableMenuHeader__cell} key={i.id}>
						{i.type === 'select' ? (
							<>
								<CustomSelect
									setValue={({ value, key }) =>
										handleSearch({ value: value.toString(), key })
									}
									fieldKey={i.field}
									value={(filterForm.active as string) ?? 0}
									data={i.options ?? []}
									colorText='placeholder'
								/>
							</>
						) : i.type === 'search' ? (
							<CustomInput
								value={
									filterForm[i.field as keyof iGetMenuParams]?.toString() ?? ''
								}
								fieldKey={i.field}
								setValue={({ value, key }) => handleSearch({ value, key })}
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
