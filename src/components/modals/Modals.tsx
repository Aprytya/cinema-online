// 'use client'

// import React, { useState } from "react";
// import { Modal} from 'react-bootstrap';
// import styles from "../modals/modal.module.css";
// import ButtonPrimary from '../buttons/ButtonPrimary';

// interface LoginModalProps{
//     isOpen:boolean;
//     onClose:()=>void;
//     onSwitch:()=>void;
// }

// const LoginModal:React.FC<LoginModalProps>=({isOpen, onClose, onSwitch})=>{
//     const [email, serEmail] = useState('');
//     const [password, setPassword]=useState('');

//     const handleLogin = () => {
//         if (email==="aprytya@gmail.com" && password === "admin1234") {
//             onClose
//         }else{
//             alert("Login Gagal!!! Periksa kembali email dan password Anda");
//         }
//     };

//     return (
//         <Modal isOpen={isOpen} onRequestClose={onClose}>
//             <h2>Login</h2>
//             <input type="email" placeholder="Email" value={email} onChange={(e)=>setPassword(e.target.value)}/>
//             <input className={styles["password"]} type="password" value={password} onClick={handleLogin} />
//               <ButtonPrimary  
//                 width='400px'
//                 height='50px'
//                 marginLeft='20px'
//                 name={'Login'} />
//        <p className={styles["kata"]}> Don't have an account ? Klik <a href = "" onClick={onSwitch} className={styles["kata"]}>Here</a></p>
//         </Modal>
//     )

// }

// export default LoginModal;

'use client'

import { Modal, Button } from 'react-bootstrap';
import { ChangeEvent, useState } from 'react';
import styles from "../modals/modal.module.css";
import { useRouter } from "next/navigation";

interface Props {
  show:boolean
  onHide:any
}

const LoginRegisterModal = ({show, onHide}:Props) => {
  const [email, setemail] = useState<any>('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter()

  const handleemailChange = (e:any) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleFullNameChange = (e:any) => {
    setFullName(e.target.value);
  };

  
  const handleSwitch = (e:any) => {
    e.preventDefault(); 
    setIsLogin(!isLogin);
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (isLogin) {
      console.log('email:', email);
      console.log('Password:', password);
      if (email === "aprytya@gmail.com" && password === "admin1234" ) {
       router.push("/dashboard")
      } else {
        alert("Login Failed!!, Plase Check your Email and Password")
      }
    } else  {
      console.log('Registered with email:', email);
      console.log('Registered with Password:', password);
      console.log('Registered with Fullname', fullName);
    }
    onHide();
  };


  return (
    
    <Modal show={show} onHide={onHide} centered >
      <div className={styles["modal"]}>
      <Modal.Title className = {styles["title"]}>{isLogin ? 'Login' : 'Register'}</Modal.Title>
      <Modal.Body className={styles["modal.body"]}>
        {isLogin ? (
          <form onSubmit={handleSubmit}>
              <input className={styles["email"]} type="text" value={email} onChange={handleemailChange} />
              <input className={styles["password"]} type="password" value={password} onChange={handlePasswordChange} />
              <Button id={styles["button"]} onClick={handleSubmit}>Login</Button>
       <p className={styles["kata"]}> Don't have an account ? Klik <a href = "" onClick={handleSwitch} className={styles["kata"]}>Here</a></p>
          </form>
        ):(
          <form onSubmit={handleSubmit} className={styles["modal"]} >
           <input className={styles["email"]} type="text" value={email}  placeholder="Email" id='email' onChange={handleemailChange} />
            <input className={styles["password"]} type="password" placeholder="Password" id='password'value={password} onChange={handlePasswordChange} />
            <input className={styles["fullname"]} type="text" placeholder="Full Name" id='name' value={password} onChange={handlePasswordChange} />
            <Button id={styles["button"]} type="submit">Register</Button>
       <p className={styles["kata"]}>Already have an account ? Klik <a href="" onClick={handleSwitch}className={styles["kata"]}>Here</a></p>
          </form>
        )}
      </Modal.Body>
      </div>
    </Modal>

  );
};

export default LoginRegisterModal;


