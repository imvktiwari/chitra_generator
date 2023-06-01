import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBCol
} from 'mdb-react-ui-kit';

export default function RecordsCard() {
    return (
        <MDBCol >
            <MDBCard className='h-10'>
                <MDBCardImage
                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                    alt='asdfghjklkjhvcxcvbnm'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardText>
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}