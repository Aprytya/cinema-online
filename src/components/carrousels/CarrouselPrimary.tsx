'use client'

import style from "./carrousel.module.css";
import Image from 'next/image';
import  Carousel from 'react-bootstrap/Carousel';
import ButtonPrimary from '../buttons/ButtonPrimary';

interface PropsCarrousel {
    data: Array<DetailCarrousel>
}

export interface DetailCarrousel{
    id:number
    image:any
    title:string
    genre:string
    price:string
    desc:string
}

function CarouselPrimary ({data}:PropsCarrousel){
    return (
    <Carousel fade className={style["frond-container-dark"]} >
    {data.map((item: DetailCarrousel) => {
         return (
    <Carousel.Item key={item.title}>
    <Image src={item.image} alt="film" style={{
                            width: "100%",
                            height: "437px",
                            objectFit: "fill"
                        }} />
    <Carousel.Caption>
        <h1 className={style["title"]}>{item.title}</h1>
        <h5 className={style["genre"]}>{item.genre}</h5>
        <h5 className={style["price"]}>{item.price}</h5>
        <p className={style["desc"]}>{item.desc}</p>
        <ButtonPrimary
            width='100px'
            height='40px'
            name={'Buy Now'}
            />
    </Carousel.Caption>
    </Carousel.Item>
    )}
    )}
     </Carousel>

)}
export default CarouselPrimary;