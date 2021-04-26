import React, { useEffect } from 'react'
import { animCardList } from '../../utils/animation'
import styles from './card_list.module.scss'

export const CardList = () => {
  useEffect(() => {
    animCardList(`.${styles.card__container}`)
  }, [])

  return (
    <div className={styles.card__container}></div>
  )
}