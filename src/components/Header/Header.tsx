import React from 'react'
import { Container, Navbar, NavLink } from 'react-bootstrap'
import { Bolt } from '../../icons/Bolt'
import { HeaderProps } from './declarations/Header.types'
import { LoginButton } from './LoginButton'
import styles from './styles/Header.module.css'

export const Header = ({ links }: HeaderProps) => (
  <Navbar collapseOnSelect expand="lg" className={`${styles.header} pt-0 pb-0 pl-3 pl-lg-0`}>
    <Container>
      <Navbar.Brand aria-label="Home" className={styles.logo} href="#home">
        <Bolt />
      </Navbar.Brand>
      <LoginButton className="d-block d-lg-none" />
      <Navbar.Toggle className={styles.toggler} aria-controls="menu-pages" />
      <Navbar.Collapse id="menu-pages">
        {links.map(link => (
          <NavLink key={link.name} className={`${styles.menuItem} p-0 p-md-3`} href={link.url}>
            {link.name}
          </NavLink>
        ))}
      </Navbar.Collapse>
      <LoginButton className="d-none d-lg-block" />
    </Container>
  </Navbar>
)
