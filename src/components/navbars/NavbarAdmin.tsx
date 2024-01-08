'use client'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import style from "./navbars.module.css";
import LogoIcon from "../../assets/Icon.png";
import { Dropdown } from "react-bootstrap";
import ProfileIcon from "../../assets/admin.png";
import List from "../../../public/clapperboard.png";
import Logout from "../../../public/logout.png";
import { useState } from 'react';


function NavbarAdmin() {
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
              <Dropdown.Menu style={{
              width: "220px",
              height: "122px",
              }}>
                <Dropdown.Item href="/addfilm" style={{
                    color:"#FFF",
                    fontFamily: "sen",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                }}><Image src={List} alt="list" style={{
                  width: "30px",
                  height: "29.999px",
                  marginRight:"20px",
                }} />Add Film</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/" style={{
                  color:"#FFF",
                  fontFamily: "sen",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  marginTop: "10px"
                }}><Image src={Logout} alt="logout" style={{
                  width: "30px",
                  height: "29.999px",
                  marginRight:"20px",
                }} />Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;