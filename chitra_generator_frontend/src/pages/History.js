import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import HeaderImg from '../components/HeaderImg/HeaderImg';
import RecordsCard from '../components/PreviousRecords/RecordsCard';
import Footer from '../components/Layout/Footer';

const History = () => {
    return (
        <Fragment>
            <Header></Header>
            <HeaderImg></HeaderImg>
            <RecordsCard></RecordsCard> 
            <br></br>
            <Footer></Footer>
        </Fragment>);
}

export default History;
