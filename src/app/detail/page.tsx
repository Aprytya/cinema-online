'use client'

import NavbarAfter from "@/components/navbars/NavbarsAfter";
import styles from "../detail/page.module.css";
import { Container, Row, Col, useAccordionButton } from "react-bootstrap";
import ListDetail from "../../assets/Rectangle 5.png";
import Preview from "../../../public/preview.png";
import Image from "next/image";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import PaymentModal from "@/components/modals/PayModal";
import { useState } from "react";
import PlayButton from "../../../public/play.png"


const Detail = () => {
    const [showPay, setShowPay] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [hasPurchased, setHasPurchased] = useState(false);
    const [videoUrl, setVideoUrl] = useState('https://www.imdb.com/video/vi734511385/?playlistId=tt1361336&ref_=ext_shr_lnk');
    
    const handlePlay = () =>{
        if (!hasPurchased){
            alert("please buy this film if you want to watch")
        }else{
            playVideo();
        }
    };

    const playVideo = () => {
        window.open(videoUrl, '_blank');
        };

    const handlePay = () => {
        setShowPopup(true);
        setShowPay(true);
        setHasPurchased(true)
        setVideoUrl('https://www.imdb.com/video/vi734511385/?playlistId=tt1361336&ref_=ext_shr_lnk');
    };

    const handleClose = () => {
        setShowPay(false);
    };

    const handleClientClick = () => {
        setShowDetail(true);
        setShowPopup(false);
    }
    return(
    <Container>
        <Row>
        <Col className={`${styles["img"]} col-4`}> 
        <Image src={ListDetail} alt="detail" className={styles["detail"]}/>
       
        </Col>
        <Col>
        <div  className={styles["container"]}>
        <h1 className={styles["title"]} > Tom & Jerry </h1>
        {!showDetail && (
        <div className={styles["btn"]}><ButtonPrimary
                onClick={handlePay}
                width='100px'
                height='40px'
                name={'Buy Now'} /></div> )}
        <PaymentModal show={showPay} handleClose={handleClose} handleClientClick={handleClientClick} />
        </div> 
       
        <div style={{
            marginTop:"35px",
            marginBottom:"13px"
        }}>
            <Image src={Preview} alt="preview" className={styles["preview"]}/>
             <button onClick={handlePlay} className={styles["play"]}><Image src={PlayButton} alt="play button" /></button>
        </div> 
        
        <div style={{
            marginBottom:"43px" }}>
            <h5 className={styles["genre"]}> Family</h5>
            <h5 className={styles["price"]}>Rp. 158,000</h5>
            <h6 className={styles["desc"]}>One of the most beloved rivalries in history is re‐ignited when Jerry moves into New York City’s finest hotel on the eve of “the wedding of the century,”
                forcing the event’s desperate planner to hire Tom to get rid of him. The ensuing cat and mouse battle threatens to destroy her career, the wedding and possibly the hotel itself. 
                But soon, an even bigger problem arises: a diabolically ambitious staffer conspiring against all three of them. An eye‐popping blend of classic animation and live action,
                Tom and Jerry’s new big‐screen adventure stakes new ground for the iconic characters and forces them to do the unthinkable...work together to save the day.</h6>
        </div> 
        </Col>
        </Row>
    </Container>
    )
}

export default Detail;