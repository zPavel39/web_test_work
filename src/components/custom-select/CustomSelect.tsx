import React from 'react'
import styles from './customSelect.module.scss'

interface CustomSelectProps {
	setValue: (value: number) => void
	value: number | string
	data: Array<{ id: string | number; [key: string]: any }> | string[]
	text?: string
	dataKey?: string
	label?: string
	loading?: boolean
	classNameSelect?: string
	colorText?: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	setValue,
	value,
	data = [],
	text = '',
	dataKey = 'name',
	label = '',
	loading = false,
	colorText = '',
}) => {
	// является ли элемент объектом
	const isObjectArray = (
		item: any
	): item is { id: string | number; [key: string]: any } =>
		typeof item === 'object' && 'id' in item

	return (
		<div className={styles.customSelectBlock}>
			{label && (
				<label
					htmlFor='custom-select'
					className={styles.customSelectBlock__label}
				>
					{label}
				</label>
			)}
			<select
				id='custom-select'
				className={`${styles.customSelectBlock__customSelect} ${
					colorText ? styles.customSelectBlock__colorPlaceholder : ''
				}`}
				value={value || 0}
				onChange={e => setValue(+e.target.value)}
			>
				{loading ? (
					<option disabled className={styles.customSelectBlock__selectOption}>
						Загрузка...
					</option>
				) : data.length === 0 ? (
					<option className={styles.customSelectBlock__selectOption} value='0'>
						{text} не найдены
					</option>
				) : (
					<>
						{value === 0 && (
							<option
								value='0'
								className={styles.customSelectBlock__selectOption}
							>
								Выберите {text}
							</option>
						)}
						{data.map(item =>
							isObjectArray(item) ? (
								<option
									key={item.id}
									className={styles.customSelectBlock__selectOption}
									value={item.id}
								>
									{item[dataKey]}
								</option>
							) : (
								<option
									key={item}
									className={styles.customSelectBlock__selectOption}
									value={item}
								>
									{item}
								</option>
							)
						)}
					</>
				)}
			</select>
		</div>
	)
}

export default CustomSelect
