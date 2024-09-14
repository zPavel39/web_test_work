import React from 'react'
import LogoBase from './../../assets/svg/logo-base.svg'
import Notepad from './../../assets/svg/notepad.svg'
import styles from './cardProfile.module.scss'

const CardProfile: React.FC = () => {
	return (
		<div className={styles.cardProfile}>
			<div className={styles.cardProfile__profile}>
				<img src={LogoBase} alt='F' width={42} height={42} />
				<div className={styles.cardProfile__profileInfo}>
					<h3 className={styles.cardProfile__profileInfo__title}>
						Название Фирмы
					</h3>
					<p className={styles.cardProfile__profileInfo__name}>
						Лоскутникова В.П
					</p>
				</div>
			</div>
			<div className={styles.cardProfile__section}>
				<img src={Notepad} alt='notepad' width={42} height={42} />
				<h3 className='cardProfile__section__title'>СКЛАДСКОЙ УЧЁТ</h3>
			</div>
		</div>
	)
}

export default CardProfile
