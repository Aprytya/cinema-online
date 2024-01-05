// 'use client'

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Image from 'next/image';
// import style from "./navbars.module.css";
// import LogoIcon from "../../assets/Icon.png";
// import { Button } from "react-bootstrap";
// import ProfileIcon from "../../assets/foto.jpg";
// import ButtonPrimary from '../buttons/ButtonPrimary';
// import LoginRegisterModal from "../modals/Modals";
// import { useState } from 'react';


// const NavbarPrimary = () => {
//   const [showLogin, setShowLoginModal] = useState(false);
//   const [showRegister, setShowRegisterModal] = useState(false);

//   const handleLogin = () => {
//     setShowLoginModal(true);
//   };

//   const handleRegister = () => {
//     setShowRegisterModal(true);
//   };

//   const handleClose = () => {
//     setShowLoginModal(false);
//     setShowRegisterModal(false);
//   };

//     return (
//         <Navbar className={`${style["navbar-primary"]}`} variant='dark'>
//             <Container>
//                 <Navbar.Brand href="/">
//                     <Image src={LogoIcon} alt="icon cinema online"/>
//                 </Navbar.Brand>
//                     <Navbar.Toggle />
//                     <Navbar.Collapse className="justify-content-end">
//                     <Navbar.Text>
//                      <Button variant='link' id={style.buttonlogin} onClick={handleLogin}>Login</Button>
//                      <LoginRegisterModal show={showLogin} onHide={handleClose} />
//                     </Navbar.Text>
//                     <Navbar.Text style={{
//                         marginLeft:"36px"
//                     }} onClick={handleRegister}>
//                             <ButtonPrimary  
//                             width='100px'
//                             height='40px'
//                             name={'Register'} 
//                            />
//                            <LoginRegisterModal show={showRegister} onHide={handleClose}  />
//                     </Navbar.Text>
                    
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }

// export default NavbarPrimary;
// 'use client'

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Image from 'next/image';
// import style from "./navbars.module.css";
// import LogoIcon from "../../assets/Icon.png";
// import { Button, Dropdown } from "react-bootstrap";
// import ProfileIcon from "../../assets/foto.jpg";
// import ButtonPrimary from '../buttons/ButtonPrimary';
// import LoginRegisterModal from "../modals/Modals";
// import { useState } from 'react';



// const NavbarPrimary = () => {
//   const [showLogin, setShowLoginModal] = useState(false);
//   const [showRegister, setShowRegisterModal] = useState(false);

//   const handleLogin = () => {
//         setShowLoginModal(true);
//       };
    
//       const handleRegister = () => {
//         setShowRegisterModal(true);
//       };
    
//       const handleClose = () => {
//         setShowLoginModal(false);
//         setShowRegisterModal(false);
//       };

//   const [loggedIn, setLoggedIn] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false); 

//   const handleProfileClick = () => {
//       setShowProfileDropdown(!showProfileDropdown);
//   };

//     return (
//       <><Navbar className={`${style["navbar-primary"]}`} variant='dark'>
//         <Container>
//           <Navbar.Brand href="/">
//             <Image src={LogoIcon} alt="icon cinema online" />
//           </Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             <Navbar.Text>
//               <Button variant='link' id={style.buttonlogin} onClick={handleLogin}>Login</Button>
//               <LoginRegisterModal show={showLogin} onHide={handleClose} />
//             </Navbar.Text>
//             <Navbar.Text style={{
//               marginLeft: "36px"
//             }} onClick={handleRegister}>
//               <ButtonPrimary
//                 width='100px'
//                 height='40px'
//                 name={'Register'} />
//               <LoginRegisterModal show={showRegister} onHide={handleClose} />
//             </Navbar.Text>

//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
      
      
//       <Navbar className={`${style["navbar-primary"]}`} variant='dark'>
//           <Container>
//             <Navbar.Brand href="/">
//               <Image src={LogoIcon} alt="icon cinema online" />
//             </Navbar.Brand>
//             <Navbar.Toggle />
//             <Navbar.Collapse className="justify-content-end">
//               {loggedIn && (
//                 <Navbar.Text>
//                   <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                       <Image src={ProfileIcon} alt="profile" className={style["profile"]} onClick={handleProfileClick} />
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
//                       <Dropdown.Item href="#/action-2">My List Film</Dropdown.Item>
//                       <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </Navbar.Text>
//               )}
//             </Navbar.Collapse>
//           </Container>
//         </Navbar></>
//     )
// }

// export default NavbarPrimary;
// components/navbars/NavbarPrimary.tsx

'use client'
import { useState } from 'react';
import { Container, Navbar, Button, Dropdown } from 'react-bootstrap';
import LogoIcon from '../../assets/Icon.png';
import ProfileIcon from '../../assets/foto.jpg';
import style from './navbars.module.css';
import LoginRegisterModal from '../modals/Modals';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Image from 'next/image';


const NavbarPrimary = () => {
  const [showLogin, setShowLoginModal] = useState<boolean>(false);
  const [showRegister, setShowRegisterModal] = useState(false);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleRegister = () => {
    setShowRegisterModal(true);
  };

  const handleClose = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return(
    <Navbar className={`${style["navbar-primary"]}`} variant='dark'>
         <Container>
           <Navbar.Brand href="/">
             <Image src={LogoIcon} alt="icon cinema online" />
           </Navbar.Brand>
           <Navbar.Toggle />
           <Navbar.Collapse className="justify-content-end">
             <Navbar.Text>
               <Button variant='link' id={style.buttonlogin} onClick={handleLogin}>Login</Button>
               <LoginRegisterModal show={showLogin} onHide={handleClose} />
             </Navbar.Text>
             <Navbar.Text style={{
               marginLeft: "36px"
             }} onClick={handleRegister}>
               <ButtonPrimary
                 onClick={handleRegister}
                 width='100px'
                 height='40px'
                 name={'Register'} />
               <LoginRegisterModal show={showRegister} onHide={handleClose} />
             </Navbar.Text>

           </Navbar.Collapse>
         </Container>
       </Navbar>
  )
}

export default NavbarPrimary;