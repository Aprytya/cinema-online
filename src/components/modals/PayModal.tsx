'use client'

import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../modals/modal.module.css"
import ButtonPrimary from '../buttons/ButtonPrimary';
import Image from 'next/image';
import Icon from "../../../public/pay.png"


interface Props{
    show:boolean;
    handleClose:()=>void;
    handleClientClick:()=>void;
}


const PaymentModal = ({show, handleClose, handleClientClick }:Props) => {
  const [showPay, setShowPay] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

 useEffect(()=>{
    setShowPay(show);
 },[show]);

 const handlePay = () => {
    handleClose();
    handleClientClick();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
  }, 2000); 
 }

 const handlePopupClose = () => {
  setShowPopup(false);
}

  return (
    <>
      <Modal show={showPay} onHide={handleClose} centered>
        <div className={styles["modalPay"]}>
          <Modal.Title className = {styles["titlePay"]}>Cinema<b style={{
            color:"#CD2E71",
          }}>Online</b> : 0981312323</Modal.Title>
        <Modal.Body style={{
            marginLeft:"27px"
        }}>
        <h5  className = {styles["titleFilm"]}>Tom & Jerry</h5>
        <h6>Total : <b style={{
            color:"#CD2E71",
          }}>Rp. 158,000</b></h6>
        <input id={styles["input"]} type="text" placeholder="Input Your Account Number"/>
        <Button className={styles["button"]}>Attach Payment<Image src={Icon} alt='icon' style={{
            width: "25px",
            height: "23.802px",
        }}/></Button> <b style={{
            color: "#616161",
            fontFamily: "sen",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        }}>*transfers can be made to holyways accounts</b>
        <div style={{
            marginTop:"37px"
        }}> <ButtonPrimary
                 onClick={handlePay}
                 width='417px'
                 height='45px'
                 name={'Pay'} /></div>
        </Modal.Body>
        </div>
      </Modal>
      {showPopup &&
                <div className={styles["popup"]}>
                    <div className="popup-content"> 
                        <span className="close" onClick={handlePopupClose}></span>
                        <p>thank you for buying this film, please wait 1x24 hours because your transaction is in process</p>
                    </div>
                </div>
      }
    </>
  );
}

export default PaymentModal;
