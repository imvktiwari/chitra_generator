import React from 'react';
import Card from './Card'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBContainer className='p-4'>
      <section className='mb-4'>
        <p className='pt-2' style={{ fontSize: "1.8rem" }}>
          <strong>Connect with me</strong>
        </p>
      </section>
      <section className='mb-4'>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-100' >
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}