
'use client'
import React from 'react';
import { useState } from 'react';
import { Container, Row, Table,Dropdown} from 'react-bootstrap';
import NavbarAdmin from '@/components/navbars/NavbarAdmin';
import styles from "../admin/page.module.css"
import Icon from "../../assets/Polygon 2.png";
import Image from 'next/image';

const AdminHome = () => {
const [data, setData] = useState ([
 { 
    id:1,
    User:"Andi",
    Bukti:"Bca.jpg",
    Film:"Tom & Jerry",
    Account:"0981312321",
    Status:"Pending",
  },
  { 
    id:2,
    User:"Haris Rahman",
    Bukti:"Bni.jpg",
    Film:"Godzila vs Kong",
    Account:"0981312320",
    Status:"Pending"
  },
  { 
    id:3,
    User:"Amin Subagiyo",
    Bukti:"Permata.jpg",
    Film:"Trolls World Tour",
    Account:"0981312324",
    Status:"Pending"
  },
  { 
    id:4,
    User:"Haris Astina",
    Bukti:"Permata.jpg",
    Film:"Meg",
    Account:"091312327S",
    Status:"Pending"
  },
  { 
    id:5,
    User:"Aziz Oni On",
    Bukti:"Bi.jpg",
    Film:"Lord of The Ring",
    Account:"091312333",
    Status:"Pending"
  },
  { 
    id:6,
    User:"Sugeng No Pants",
    Bukti:"Bni.jpg",
    Film:"Tom & Jerry",
    Account:"0981312334",
    Status:"Pending"
  },
 ]);

  const handleStatusChange = (id: number, newStatus: string) => {
    const updateData = data.map((item) => {
      if (item.id === id){
        return {...item, Status:newStatus}
      }
      return item;
    });

    setData(updateData);
    console.log(`Mengubah Status Id $[id] menjadi ${newStatus}`);
  };

  const dataWithNumbers = data.map((item, index) => {
    return { ...item, number: index + 1 };
  });

  return (
    <Container>
      <NavbarAdmin />
      <Row>
        <h1 style={{
          color: "#FFF",
          fontFamily: "sen",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "normal",
          marginBottom:"37px",
          marginTop:"30px",
        }}>Incoming Transaction</h1>
        <div>
        <Table striped bordered hover variant="dark">
      <thead className={styles["head-table"]} >
        <tr>
          <th style={{
        color:"#E50914",
      }}>No</th>
          <th style={{
        color:"#E50914",
      }}>User</th>
          <th style={{
        color:"#E50914",
      }}>Bukti Transfer</th>
          <th style={{
        color:"#E50914",
      }}>Film</th>
          <th style={{
        color:"#E50914",
      }}>Number Account</th>
          <th style={{
        color:"#E50914",
      }}>Status Payment</th>
          <th style={{
        color:"#E50914",
      }}>Action</th>
        </tr>
      </thead>
      <tbody>
          {dataWithNumbers.map((item)=>(
            <tr key={item.id}>
              <td>{item.number}</td>
              <td>{item.User}</td>
              <td>{item.Bukti}</td>
              <td>{item.Film}</td>
              <td>{item.Account}</td>
              <td style={{
                      color: item.Status === 'Cancel' ? '#F00' : item.Status === 'Approved' ? '#0ACF83' : item.Status === 'Pending' ? '#F7941E' : '#000',
                    }}>{item.Status}</td>
              <td>
                    <Dropdown data-bs-theme="dark">
                  <Dropdown.Toggle className={styles["toggle-button"]}>
                    <Image src={Icon} alt="Icon" className={styles["icon"]} />
                  </Dropdown.Toggle >
                  <Dropdown.Menu className={styles["menu-drop"]}>
                    <Dropdown.Item style={{
                      color:"#0ACF83"
                    }}  onClick={() => handleStatusChange(item.id, "Approved")}>Approved</Dropdown.Item>
                    <Dropdown.Item style={{
                      color:"#F00"
                    }}  onClick={() => handleStatusChange(item.id, "Cancel")}>Cancel</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </td>
            </tr>
          ))}
          
      </tbody>
    </Table>
        </div>
      </Row>
      
    </Container>
  );
};

export default AdminHome;

