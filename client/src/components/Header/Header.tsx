import React from 'react'
import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__item}>BSX_MARS</div>
    </div>
  )
}