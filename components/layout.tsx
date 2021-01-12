import React from "react";
import { Container, Navbar, NavItem, Icon } from "react-materialize";

export default function Layout({ children }) {
  return (
    <>
      <Navbar
        alignLinks="right"
        brand={
          <a className="brand-logo" href="#">
            Logo
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          edge: "left",
        }}
      >
        <NavItem href="#">Getting started</NavItem>
        <NavItem href="#">Components</NavItem>
      </Navbar>
      {children}
    </>
  );
}
