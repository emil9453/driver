import React from 'react'
import { Button } from 'react-bootstrap'
import { LoginButtonProps } from './declarations/LoginButton.types'
import styles from './styles/LoginButton.module.css'

export const LoginButton = ({ className }: LoginButtonProps) => {
  return (
    <Button variant="success" className={`${styles.logIn} rounded-pill ${className ?? ''}`}>
      Log in
    </Button>
  )
}
