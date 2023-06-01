import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import HeaderImg from '../components/HeaderImg/HeaderImg';
import Footer from '../components/Layout/Footer';

const Home = () => {

    return (
        <Fragment>
            <Header></Header>
            <HeaderImg></HeaderImg>
            <Footer></Footer>
        </Fragment>);
}

export default Home;
