import React, { useEffect } from 'react'
import styles from './header.module.scss'
import { animHeader } from '../../utils/animation'

export const Header: React.FC = () => {
  useEffect(() => {
    animHeader(`.${styles.header__item}`, `.${styles.header__container}`, `.${styles.header__box}`)
    }, []
  )

  return (
    <div className={styles.header__container}>
      <div className={styles.header__box}>
        <div className={styles.header__item}>BSX_MARS</div>
      </div>
    </div>
  )
}