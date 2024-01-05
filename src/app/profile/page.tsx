
'use client'
import NavbarAfter from '@/components/navbars/NavbarsAfter';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from "../profile/page.module.css";
import Image from 'next/image';
import Photo from "../../assets/foto.jpg";

const Profile = () => {
  return (
    <Container>
      <NavbarAfter />
      <Row>
       <Col>
       <h1 className={styles["title"]}>My Profile</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">  
              <Image src={Photo} alt="Fhoto Profile" className={styles["photo"]} />
            </div>
            <div className="col-md-6" > 
              <h4 className={styles["k-title"]}>Full Name</h4>
              <h6 className={styles["isi"]}>Mutya Ariesta</h6>
              <h4 className={styles["k-title"]}>Email</h4>
              <h6 className={styles["isi"]}>aprtya@gmail.com</h6>
              <h4 className={styles["k-title"]}>Phone</h4>
              <h6 className={styles["isi"]}>081234567890</h6>
            </div>
          </div>
        </div>
       </Col>
       <Col>
       <h1 className={styles["title"]}>History Transaction</h1>
       <div className={styles["square-box"]}>
        <h6 style={{
          color: "#CD2E71",
          fontFamily: "Avenir",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "900",
          lineHeight: "normal",
        }}>Tom & Jerry</h6>
        <h6 style={{
          color: "#FFF",
          fontFamily: "Avenir",
          fontSize: "9px",
          fontStyle: "normal",
          fontWeight: "900",
          lineHeight: "normal",
          marginTop:"8px"
        }}>Saturday, 12 April 2021</h6>
        <h6 className={styles["kata"]}>Total : Rp 158,000 <Button variant="outline-success" className={styles["button"]} disabled>Finished</Button></h6>
        
       </div>
       </Col>
      </Row>
    </Container>
  );
};

export default Profile;

