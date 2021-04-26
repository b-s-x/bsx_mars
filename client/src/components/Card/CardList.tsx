import React, { useEffect } from 'react'
import { animCardList } from '../../utils/animation'
import { Card } from './Card'
import styles from './card_list.module.scss'

export const CardList: React.FC = () => {
  useEffect(() => {
    animCardList(`.${styles.card__container}`)
  }, [])

  return (
    <div className={styles.card__container}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}