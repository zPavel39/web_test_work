import React from 'react'
import styles from './customInput.module.scss'

interface CustomInputProps {
	value: string | number
	setValue: (value: string) => void
	placeholder?: string
	label?: string
	type?: string
}
const CustomInput: React.FC<CustomInputProps> = ({
	setValue,
	value = '',
	placeholder = '',
	label = '',
	type = 'text',
}) => {
	return (
		<div className={styles.customInput}>
			{label && <label className={styles.customInput__label}>{label}</label>}
			<input
				className={styles.customInput__input}
				type={type}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default CustomInput
