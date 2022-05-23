import React from 'react'
import { ArrowDown } from '../../icons/ArrowDown'
import styles from './styles/Banner.module.css'

export const Banner = () => {
  return (
    <>
      <h1 className={`${styles.title} mb-3`}>Make money driving with Bolt</h1>
      <p className={`${styles.subtitle} mb-2`}>
        Become a Bolt driver, set your schedule and earn extra money by driving
      </p>
      <span className="d-none d-md-flex">
        <p className={styles.learnMore}>LEARN MORE</p>
        <ArrowDown />
      </span>
    </>
  )
}
