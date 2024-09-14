import React from 'react'
import styles from './toastMassage.module.scss'

interface iToastMassageProps {
	massage: string
}

const ToastMassage: React.FC<iToastMassageProps> = ({ massage }) => {
	return (
		<div className={styles.toastMassage}>
			<span className={styles.toastMassage__massage}>{massage}</span>
		</div>
	)
}

export default ToastMassage
