
// 'use client'
// import React , {useState} from 'react';
// import { Container, Row, Col, Form, Button} from 'react-bootstrap';
// import NavbarAdmin from '@/components/navbars/NavbarAdmin';
// import styles from "../addfilm/page.module.css";
// import Icon from "../../assets/Frame 1.png";
// import Image from 'next/image';
// import axios from 'axios';


// const AddFilm = () => {  
//   return (
//     <Container>
//       <NavbarAdmin />
//         <h1 style={{
//           color: "#FFF",
//           fontFamily: "sen",
//           fontSize: "24px",
//           fontStyle: "normal",
//           fontWeight: "800",
//           lineHeight: "normal",
//           marginBottom:"37px",
//           marginTop:"30px",
//           marginLeft:"70px"}}>Add Film</h1>
//       <Form>
//       <Row>
//         <Col xs={9}>
//           <Form.Control placeholder="title" style={{
//             width: "927px",
//             height: "50px",
//             borderRadius: "5px",
//             border: "2px solid #D2D2D2",
//             background: "rgba(210, 210, 210, 0.25)",
//             color:" #B1B1B1",
//             fontFamily: "sen",
//             fontSize: "18px",
//             fontStyle: "normal",
//             fontWeight: "400",
//             lineHeight: "normal",
//             marginLeft:"60px",
//             marginTop:"27px"
//           }} />
//         </Col>
//         <Col>
//         <Form.Control type="text" placeholder="Attach Thumbnail"
//             style={{
//             width: "213px",
//             height: "50px",
//             borderRadius: "5px",
//             border: "2px solid #D2D2D2",
//             background: "rgba(210, 210, 210, 0.25)",
//             color:" #B1B1B1",
//             fontFamily: "sen",
//             fontSize: "18px",
//             fontStyle: "normal",
//             fontWeight: "400",
//             lineHeight: "normal",
//             marginLeft:"10px",
//             marginTop:"27px",
//              }}  /> <a href=""><Image src={Icon} alt="icon" style={{
//               marginLeft: "190px",
//               marginTop:"-79px"
//              }}/></a>
//          </Col>
//          <Form.Control placeholder="Category" type="text"
//             style={{
//             width: "1157px",
//             height: "50px",
//             borderRadius: "5px",
//             border: "2px solid #D2D2D2",
//             background: "rgba(210, 210, 210, 0.25)",
//             color:" #B1B1B1",
//             fontFamily: "sen",
//             fontSize: "18px",
//             fontStyle: "normal",
//             fontWeight: "400",
//             lineHeight: "normal",
//             marginLeft:"70px",
           
//           }} />

//          <Form.Control placeholder="Price" type="text"
//             style={{
//             width: "1157px",
//             height: "50px",
//             borderRadius: "5px",
//             border: "2px solid #D2D2D2",
//             background: "rgba(210, 210, 210, 0.25)",
//             color:" #B1B1B1",
//             fontFamily: "sen",
//             fontSize: "18px",
//             fontStyle: "normal",
//             fontWeight: "400",
//             lineHeight: "normal",
//             marginLeft:"70px",
//             marginTop:"27px"
//           }}  />
//          <Form.Control placeholder="Link Film" type="text"
//             style={{
//             width: "1157px",
//             height: "50px",
//             borderRadius: "5px",
//             border: "2px solid #D2D2D2",
//             background: "rgba(210, 210, 210, 0.25)",
//             color:" #B1B1B1",
//             fontFamily: "sen",
//             fontSize: "18px",
//             fontStyle: "normal",
//             fontWeight: "400",
//             lineHeight: "normal",
//             marginLeft:"70px",
//             marginTop:"27px"
//           }} />
//          <Form.Control  type="text"placeholder="Description"  style={{
//             width: "1157px",
//             height: "177px",
//             borderRadius: "5px",
//             border: "2px solid #D2D2D2",
//             background: "rgba(210, 210, 210, 0.25)",
//             color:" #B1B1B1",
//             fontFamily: "sen",
//             fontSize: "18px",
//             fontStyle: "normal",
//             fontWeight: "400",
//             lineHeight: "normal",
//             marginLeft:"70px",
//             marginTop:"27px"
//           }}/>
//           </Row>
//     </Form>    
//     <Button className={styles["button"]}>Add Film</Button>
//     </Container>
//   );
// };

// export default AddFilm;

'use client'
import React , {ChangeEvent, useState} from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import NavbarAdmin from '@/components/navbars/NavbarAdmin';
import styles from "../addfilm/page.module.css";
import Icon from "../../assets/Frame 1.png";
import Image from 'next/image';
import axios from 'axios';

interface FormEntity {
  title: string,
  thumbnail: string,
  category: string,
  video: string,
  price:string
}

const AddFilm = () => {
  const [formData, setFormData] = useState<FormEntity>({
    title: "",
    thumbnail: "",
    category: "",
    video: "",
    price: ""
  }); 

  const onChangeForm =  (e: ChangeEvent<HTMLInputElement>)=> {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
    console.log(formData)
  }

 const handleSubmit = async(e:any)=>{
  e.preventDefault();
  try {
  const response = await axios.post('http://localhost:2711/api/v1/film', formData)
  console.log(response.data);
} catch (error) {
  console.error(error);
}
  };
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
      <Form onSubmit={handleSubmit}>
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
          }} 
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
          />
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
             }} 
             name="thumbnail"
             value={formData.thumbnail}
             onChange={(e) => setFormData({ ...formData,thumbnail: e.target.value })} 
            /> <a href=""><Image src={Icon} alt="icon" style={{
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
          }} 
          name="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
          />

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
          }}  
          name="price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })} 
          />
         <Form.Control placeholder="Link Film" 
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
          }} 
          type="file"
          name="video"
          value={formData.video}
          onChange={(e) => setFormData({ ...formData,video: e.target.value })} 
          />
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
    <Button className={styles["button"]} type="submit" onClick={handleSubmit}>Add Film</Button>
    </Container>
  );
};

export default AddFilm;

