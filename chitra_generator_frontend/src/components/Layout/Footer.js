import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter position="fixed-bottom" className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <p className='pt-2'>
                        <strong>Connect with me</strong>
                    </p>
                    <MDBBtn outline color="light" floating className='m-1' href='https://github.com/imvktiwari' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                    <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/imvktiwari/' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>
                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/vaibhav-kumar-tiwari-98a02b238/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BSPdh9buRTBiu4A0ysSzGgg%3D%3D' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>
                    
                </section>



                <section className='mb-4'>
                    <p>
                        I am Vaibhav Kumar Tiwari. I am currently in my third year at the Indian Institute of Technology, Dhanbad, pursuing a Bachelor of Technology in Electronics and Communication Engineering.<br></br>I am a full-stack web developer, and I developed this site as part of my learning journey with OpenAI's APIs.
                    </p>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                For more information :
                <a className='text-white' href='https://labs.openai.com/'>
                    DALL-E
                </a>
            </div>
        </MDBFooter>
    );
}