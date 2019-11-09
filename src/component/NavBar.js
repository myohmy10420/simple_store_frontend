import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Kurt Simple Store</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/products">商品列表</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">新增商品</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">購物車</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar
