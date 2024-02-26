'use client'

import CarrouselPrimary, { DetailCarrousel } from "@/components/carrousels/CarrouselPrimary";
import NavbarPrimary from "@/components/navbars/Navbars";
import NavbarAfter from '@/components/navbars/NavbarsAfter';
import React, { useState , useEffect} from 'react';
import CardFilm from "../components/cards/CardPrimary";
import { Container, Row, Col} from "react-bootstrap";
import DeadPool from "../assets/deadpool.png";
import InsideOut from "../assets/inside out 2.png";
import { useDispatch } from "react-redux";
import { AuthStoreType } from "@/types/AuthStoreType";
import AuthUseCase from "@/use-case/auth.usecase";
import { useRouter } from "next/navigation";


const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const {isLogin}=AuthUseCase()
  const [bannerData, setBannerData] = useState<Array<DetailCarrousel>>([
    {
      id: 1,
      image: DeadPool,
      title: 'Dead Pool',
      genre: 'Action',
      price: 'Rp. 99,000',
      desc: `Hold onto your chimichangas, folks. 
      From the studio that brought you all 3 Taken films comes the 
      block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!`,
    },
    {
      id: 2,
      image: InsideOut,
      title: 'inside out 2',
      genre: 'Adventure',
      price: 'Rp. 50,000',
      desc: `Riley turns 13 and Headquarters undergoes a sudden demolition to make room for new emotions, something Joy, Sadness, Anger, Fear, and Disgust weren't prepared for. The first new emotion they meet is Anxiety, who carries a lot of emotional baggage.`,
    },
  ]);
  const dispatch = useDispatch
  useEffect(()=>{
    if(!isLoggedIn){
      router.replace("/");
    }
  },[])
  return (
    <Container>
      {isLogin ? <NavbarAfter /> : <NavbarPrimary setIsLoggedIn={setIsLoggedIn}/>}
      <Row>
        <CarrouselPrimary data={bannerData} />
      </Row>
      <div>
        <h2 style={{ marginTop: "49px" }}>List Film</h2>
          <CardFilm />
      </div>
    </Container>
  );
}

export default Homepage;

