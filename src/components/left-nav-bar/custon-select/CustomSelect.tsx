import React from 'react'
import styled from './customSelect.module.scss'

interface CustomSelectProps {
	setValue: (value: string) => void
	value: string
	data: { id: string | number; [key: string]: any }[]
	text?: string
	dataKey?: string
	label?: string
	loading?: boolean
	classNameSelect?: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	setValue,
	value,
	data = [],
	text = '',
	dataKey = 'name',
	label = '',
	loading = false,
}) => {
	return (
		<div className={styled.customSelectBlock}>
			{label && (
				<label
					htmlFor='custom-select'
					className={styled.customSelectBlock__label}
				>
					{label}
				</label>
			)}
			<select
				id='custom-select'
				className={styled.customSelectBlock__customSelect}
				value={value || '0'}
				onChange={e => setValue(e.target.value)}
			>
				{loading ? (
					<option
						key='loading'
						className={styled.customSelectBlock__selectOption}
					>
						Загрузка...
					</option>
				) : data.length === 0 ? (
					<option
						key='no-results'
						className={styled.customSelectBlock__selectOption}
						value='0'
					>
						{text} не найдены
					</option>
				) : (
					<>
						{data.map(i => (
							<option
								key={i.id}
								className={styled.customSelectBlock__selectOption}
								value={i.id}
							>
								{i[dataKey]}
							</option>
						))}
					</>
				)}
			</select>
		</div>
	)
}

export default CustomSelect
