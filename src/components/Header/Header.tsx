import React from 'react'
import { Button, Navbar, NavLink } from 'react-bootstrap'
import { Bolt } from '../../icons/Bolt'
import { HeaderProps } from './declarations/Header.types'
import styles from './styles/Header.module.css'

export const Header = ({ links }: HeaderProps) => (
  <Navbar collapseOnSelect expand="lg" fixed="top" className={`${styles.header} pt-0 pb-0 pl-3 pl-lg-5`}>
    <Navbar.Brand className={styles.logo} href="#home">
      <Bolt />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="menu-pages" />
    <Navbar.Collapse id="menu-pages">
      {links.map(link => (
        <NavLink key={link.name} className={`${styles.menuItem} p-0 p-md-3`} href={link.url}>
          {link.name}
        </NavLink>
      ))}
      <Button variant="success" className={styles.logIn}>
        Log in
      </Button>
    </Navbar.Collapse>
  </Navbar>
)
