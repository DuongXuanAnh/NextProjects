'use client'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'

const AppHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Link href="/" className='navbar-brand'>David Duong</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

        <Link href="/facebook" className='nav-link'>Facebook</Link>
        <Link href="/youtube" className='nav-link'>YouTube</Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppHeader