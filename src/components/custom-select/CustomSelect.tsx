import React from 'react'
import styles from './customSelect.module.scss'

interface CustomSelectProps {
	setValue: ({ value, key }: { value: number | string; key: string }) => void
	value: number | string
	data: Array<{ id: string | number; [key: string]: any }> | string[]
	text?: string
	dataKey?: string
	label?: string
	loading?: boolean
	classNameSelect?: string
	colorText?: string
	fieldKey?: string
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
	fieldKey = 'name',
}) => {
	console.log('value', value)
	// является ли элемент объектом
	const isObjectArray = (
		item: any
	): item is { id: string | number; [key: string]: any } =>
		typeof item === 'object' && 'id' in item

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setValue({ value: e.target.value, key: fieldKey }) // Передаем ключ и значение
	}

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
				onChange={handleChange}
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
									value={item.key ? item.key : item.id}
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
