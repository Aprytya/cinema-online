 'use client'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import style from "./navbars.module.css";
import LogoIcon from "../../assets/Icon.png";
import { Button, Dropdown } from "react-bootstrap";
import ProfileIcon from "../../assets/foto.jpg";
import Profile from "../../../public/profile.png";
import List from "../../../public/clapperboard.png";
import Logout from "../../../public/logout.png";
import { useState } from 'react';


function NavbarAfter() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <Navbar className={`${style["navbar-primary"]}`} variant='dark'>
      <Container>
        <Navbar.Brand href="/">
          <Image src={LogoIcon} alt="icon cinema online" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle className={style["toggle-button"]}>
                <Image src={ProfileIcon} alt="Icon-profile" className={style["profile"]} />
              </Dropdown.Toggle>
              <Dropdown.Menu className={style["menu-drop"]}>
                <Dropdown.Item href="/profile" className={style["icon"]}><Image src={Profile} alt="profile" style={{
                  marginRight: "20px"
                }} />Profile</Dropdown.Item>
                <Dropdown.Item href="/mylist" className={style["icon"]}><Image src={List} alt="list" style={{
                  marginRight: "20px"
                }} />My List Film</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/" className={style["icon1"]}><Image src={Logout} alt="logout" style={{
                  marginRight: "20px",
                }} />Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAfter;