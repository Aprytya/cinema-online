
'use client'
import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import NavbarAdmin from '@/components/navbars/NavbarAdmin';
import styles from "../addfilm/page.module.css";
import Icon from "../../assets/Frame 1.png";
import Image from 'next/image';



const AddFilm = () => {
  return (
    <Container>
      <NavbarAdmin />
        <h1 style={{
          color: "#FFF",
          fontFamily: "sen",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "normal",
          marginBottom:"37px",
          marginTop:"30px",
          marginLeft:"70px"}}>Add Film</h1>
      <Form>
      <Row>
        <Col xs={9}>
          <Form.Control placeholder="title" style={{
            width: "927px",
            height: "50px",
            borderRadius: "5px",
            border: "2px solid #D2D2D2",
            background: "rgba(210, 210, 210, 0.25)",
            color:" #B1B1B1",
            fontFamily: "sen",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            marginLeft:"60px",
            marginTop:"27px"
          }} />
        </Col>
        <Col>
        <Form.Control type="text" placeholder="Attach Thumbnail"
            style={{
            width: "213px",
            height: "50px",
            borderRadius: "5px",
            border: "2px solid #D2D2D2",
            background: "rgba(210, 210, 210, 0.25)",
            color:" #B1B1B1",
            fontFamily: "sen",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            marginLeft:"10px",
            marginTop:"27px",
             }}  /> <a href=""><Image src={Icon} alt="icon" style={{
              marginLeft: "190px",
              marginTop:"-79px"
             }}/></a>
         </Col>
         <Form.Control placeholder="Category" type="text"
            style={{
            width: "1157px",
            height: "50px",
            borderRadius: "5px",
            border: "2px solid #D2D2D2",
            background: "rgba(210, 210, 210, 0.25)",
            color:" #B1B1B1",
            fontFamily: "sen",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            marginLeft:"70px",
           
          }} />

         <Form.Control placeholder="Price" type="text"
            style={{
            width: "1157px",
            height: "50px",
            borderRadius: "5px",
            border: "2px solid #D2D2D2",
            background: "rgba(210, 210, 210, 0.25)",
            color:" #B1B1B1",
            fontFamily: "sen",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            marginLeft:"70px",
            marginTop:"27px"
          }}  />
         <Form.Control placeholder="Link Film" type="text"
            style={{
            width: "1157px",
            height: "50px",
            borderRadius: "5px",
            border: "2px solid #D2D2D2",
            background: "rgba(210, 210, 210, 0.25)",
            color:" #B1B1B1",
            fontFamily: "sen",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            marginLeft:"70px",
            marginTop:"27px"
          }} />
         <Form.Control  type="text"placeholder="Description"  style={{
            width: "1157px",
            height: "177px",
            borderRadius: "5px",
            border: "2px solid #D2D2D2",
            background: "rgba(210, 210, 210, 0.25)",
            color:" #B1B1B1",
            fontFamily: "sen",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            marginLeft:"70px",
            marginTop:"27px"
          }}/>
          </Row>
    </Form>    
    <Button className={styles["button"]}>Add Film</Button>
    </Container>
  );
};

export default AddFilm;

