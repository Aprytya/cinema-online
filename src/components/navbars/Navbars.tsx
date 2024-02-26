// 'use client'
// import { useState } from 'react';
// import { Container, Navbar, Button } from 'react-bootstrap';
// import LogoIcon from '../../assets/Icon.png';
// import style from './navbars.module.css';
// import LoginRegisterModal from '../modals/Modals';
// import ButtonPrimary from '../buttons/ButtonPrimary';
// import Image from 'next/image';


// const NavbarPrimary = () => {
//   const [showLogin, setShowLoginModal] = useState<boolean>(false);
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

//   return(
//     <Navbar className={`${style["navbar-primary"]}`} variant='dark'>
//          <Container>
//            <Navbar.Brand href="/">
//              <Image src={LogoIcon} alt="icon cinema online" />
//            </Navbar.Brand>
//            <Navbar.Toggle />
//            <Navbar.Collapse className="justify-content-end">
//              <Navbar.Text>
//                <Button variant='link' id={style.buttonlogin} onClick={handleLogin}>Login</Button>
//              </Navbar.Text>
//              <Navbar.Text style={{
//                marginLeft: "36px"
//              }} >
//                <ButtonPrimary
//                  onClick={handleRegister}
//                  width='100px'
//                  height='40px'
//                  name={'Register'} />
//              </Navbar.Text>
//            </Navbar.Collapse>
//          </Container>
//          <LoginRegisterModal
//           showLogin={showLogin}
//           showRegister={showRegister}
//           onHide={handleClose}
//          />
//        </Navbar>
//   )
// }

//  export default NavbarPrimary;

'use client'
import { useState } from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import LogoIcon from '../../assets/Icon.png';
import style from './navbars.module.css';
import LoginRegisterModal from '../modals/Modals';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Image from 'next/image';


const NavbarPrimary = ({setIsLoggedIn}:{setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>}) => {
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

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("logout clicked");
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
             </Navbar.Text>
             <Navbar.Text style={{
               marginLeft: "36px"
             }} >
               <ButtonPrimary
                 onClick={handleRegister}
                 width='100px'
                 height='40px'
                 name={'Register'} />
             </Navbar.Text>
           </Navbar.Collapse>
         </Container>
         <LoginRegisterModal
          showLogin={showLogin}
          showRegister={showRegister}
          onHide={handleClose}
          setIsLoggedIn={setIsLoggedIn}
         />
       </Navbar>
  )
}

 export default NavbarPrimary;
