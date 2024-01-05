'use client'

import NavbarAfter from "@/components/navbars/NavbarsAfter";
import styles  from "../mylist/page.module.css";
import { Container } from "react-bootstrap";
import Image from "next/image";
import List from "../../assets/film3.png";

const Mylist = () =>{
    return(
        <Container>
          <NavbarAfter/>
          <h1 className={styles["title"]}>My List Film</h1>
          <div>
          <a href="/detail" ><Image src={List} alt="list" className={styles["list"]}/></a> 
          </div>
        </Container>
    )
}

export default Mylist;