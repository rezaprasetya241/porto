import React from 'react'
import { HeaderLink, Link, Test } from './Header.style'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
function Header() {
  return (
    <div>
        <Navbar>
            <Container>
                <HeaderLink>
                    <Link href='#home'>Home</Link>
                    <Link href='#home'>Project</Link>
                    <Link href='#home'>Profile</Link>
                    <Link href='#home'>Contact Me</Link>
                </HeaderLink>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header