import React from 'react'
import {useState} from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const NavBar=() =>
{
const [navMenu, setNavMenu] = useState(false);
  return (
    <>
      <MobileNav navMenu={navMenu} setNavMenu={setNavMenu} />
      <Nav navMenu={navMenu} setNavMenu={setNavMenu} />
    </>
  );
};
export default NavBar;