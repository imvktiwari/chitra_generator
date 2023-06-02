import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import {
    MDBContainer,
    MDBBtn,
    MDBValidation,
    MDBValidationItem,
    MDBInput,
} from 'mdb-react-ui-kit';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import Header from '../components/Layout/Header';
import HeaderImg from '../components/HeaderImg/HeaderImg';
import RecordsCard from '../components/PreviousRecords/RecordsCard';

const Home = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [imgurl, setImgurl] = useState('https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif');

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    const BACKEND_BASE_URL = "http://localhost:5000";
    const navigate = useNavigate();

    //Submit Handler
    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.length === 0) {
            toast.error("Please enter a valid request !", {
                toastId: 'failure1',
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toggleShow();
            const URL = `${BACKEND_BASE_URL}/newsearch/${enteredValue.replace(/['"]+/g, '')}`;
            setImgurl('https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif');


            const fetchDetails = async () => {
                const response = await fetch(URL);
                console.log(response);
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                const responseData = await response.json();
                setImgurl(responseData.url);
            }
            fetchDetails().catch((error) => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });

        }
    }



    return (
        <Fragment>
            <Header></Header>
            <HeaderImg></HeaderImg>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{enteredValue}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <img
                                src={imgurl}
                                className='img-thumbnail'
                                alt='...'
                            /></MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn style={{ backgroundColor: "black" }}>Share with the community</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <p className='pt-2'>
                        <strong>Start with a detailed description....</strong>
                    </p>
                    <MDBInput
                        className='row g-1'
                        value={enteredValue}
                        name='fname'
                        onChange={(event) => { setEnteredValue(event.target.value) }}
                        id='validationCustom01'
                        required
                        label='Something like a 3D render of an astronaut walking in a green desert'
                    />
                </section>
                <section className='mb-4'>
                    <MDBBtn type='submit' className='w-100' style={{ backgroundColor: "black" }} onClick={submitHandler}>Generate the Image Response</MDBBtn>
                </section>
                <RecordsCard></RecordsCard>
            </MDBContainer>
            <ToastContainer></ToastContainer>
        </Fragment>);
}

export default Home;


