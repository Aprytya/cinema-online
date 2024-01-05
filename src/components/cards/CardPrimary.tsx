'use client'

import Image from "next/image";
import styles from "../cards/card.module.css";
import { Container, Row, Col} from "react-bootstrap";
import Film1 from "../../assets/film1.png";
import Film2 from "../../assets/film2.png";
import Film3 from "../../assets/film3.png";
import Film4 from "../../assets/film4.png";
import Film5 from "../../assets/film5.png";
import Film6 from "../../assets/film6.png";

function CardFilm() {
    return(
        <Container className={styles["Container"]} >
                <Row >
                    <Col className={`${styles["Card"]}col-12`} 
                    >
                    <a href="" ><Image  src={Film1} alt="film" /></a>
                    </Col>
                    <Col className={`${styles["Card"]}col-12`} >
                    <a href="" ><Image  src={Film2} alt="film" /></a>
                    </Col>
                    <Col className={`${styles["Card"]}col-12`} >
                    <a href="/detail" ><Image  src={Film3} alt="film" /></a>
                    </Col>
                    <Col className={`${styles["Card"]}col-12`} >
                    <a href="" ><Image  src={Film4} alt="film" /></a>
                    </Col>
                    <Col className={`${styles["Card"]}col-12`} >
                    <a href="" ><Image  src={Film5} alt="film" /></a>
                    </Col>
                     <Col className={`${styles["Card"]}col-12`} >
                    <a href="" ><Image  src={Film6} alt="film" /></a>
                    </Col>
                </Row>
        </Container>  
    )
}

export default CardFilm;
