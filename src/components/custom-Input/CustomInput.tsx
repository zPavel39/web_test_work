import React from 'react'
import styles from './customInput.module.scss'

interface CustomInputProps {
	value: string | number
	setValue: ({ value, key }: { value: string; key: string }) => void
	placeholder?: string
	label?: string
	type?: string
	fieldKey?: string
}
const CustomInput: React.FC<CustomInputProps> = ({
	setValue,
	value = '',
	placeholder = '',
	label = '',
	type = 'text',
	fieldKey = 'name',
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue({ value: e.target.value, key: fieldKey })
	}
	return (
		<div className={styles.customInput}>
			{label && <label className={styles.customInput__label}>{label}</label>}
			<input
				value={value}
				onChange={handleChange}
				type={type}
				placeholder={placeholder}
				className={styles.customInput__input}
			/>
		</div>
	)
}

export default CustomInput
