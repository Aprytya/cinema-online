  'use client'
import { Modal, Button } from 'react-bootstrap';
import { LoginBodyRequest } from '@/entities/auth.entities';
import React, { ChangeEvent, useState } from 'react';
import styles from "../modals/modal.module.css";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import AuthUseCase from '@/use-case/auth.usecase';

interface Props {
  showLogin: boolean;
  showRegister: boolean;
  onHide: any;
  setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormEntity {
  fullname: string;
  email: string;
  password: string;
  // phone: string;
}

const LoginRegisterModal = ({ showLogin, showRegister, onHide, setIsLoggedIn }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userData, setUserData] = useState<FormEntity>({
    email: '',
    password: '',
    fullname: ''
    // phone: ''
  });
  const [form, setForm] = useState<LoginBodyRequest>({
    email: '',
    password: ''
  });
  const { login } = AuthUseCase();
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const onChangeForm =  (e: ChangeEvent<HTMLInputElement>)=> {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
    console.log(form)
  }
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSwitch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onHide();
    setUserData({ email: '', password: '', fullname: '',  });
  };

  const handleSubmitLogin = async (e: any) => {
     login(form)
   

    onHide();
  };

  const handleSubmitRegister = async (e: any) => {
    e.preventDefault();

    try {
      console.log('Registered with email:', userData.email);
      console.log('Registered with Password:', userData.password);
      console.log('Registered with fullname', userData.fullname);
      // console.log('Registered with phone', userData.phone);

      const response = await axios.post('http://localhost:2711/api/v1/register', userData);
      console.log('Registration Success', response.data);
    } catch (error) {
      console.error('Registration operation failed!', error);
      alert('Registration operation failed! Please Check your information');
    }

    onHide();
  };


  return (
    <>
      <Modal show={showLogin} onHide={onHide} centered>
        <div className={styles['modal']}>
          <Modal.Title className={styles['title']}>Login</Modal.Title>
          <Modal.Body className={styles['modal.body']}>
            <form onSubmit={handleSubmitLogin}>
              <input className={styles['email']} type="text" value={form.email} name={"email"} onChange={onChangeForm} />
              <input className={styles['password']} type="password" value={form.password}  name={"password"} onChange={onChangeForm} />
              <Button id={styles['button']} onClick={handleSubmitLogin}>
                Login
              </Button>
              <p className={styles['kata']}>
                Don't have an account? Click <a href="#" onClick={handleSwitch} className={styles['kata']}>Here</a>
              </p>
            </form>
          </Modal.Body>
        </div>
      </Modal>
      <Modal show={showRegister} onHide={onHide} centered>
        <div className={styles['modal']}>
          <Modal.Title className={styles['title']}>Register</Modal.Title>
          <Modal.Body className={styles['modal.body']}>
            <form onSubmit={handleSubmitRegister} className={styles['modal']}>
              <input className={styles['email']} type="text" value={userData.email} placeholder="Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
              <input className={styles['password']} type="password" placeholder="Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
              <input className={styles['fullname']} type="text" placeholder="Full Name" value={userData.fullname} onChange={(e) => setUserData({ ...userData, fullname: e.target.value })} />
              {/* <input className={styles['phone']} type="text" placeholder="Phone" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} /> */}
              <Button id={styles['button']} onClick={handleSubmitRegister}>
                Register
              </Button>
              <p className={styles['kata']}>
                Already have an account? Click <a href="#" onClick={handleSwitch} className={styles['kata']}>Here</a>
              </p>
            </form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default LoginRegisterModal;

