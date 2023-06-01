import React, { useState } from 'react';
import { useNavigate } from "react-router";
import imgSrc from "./assests/logo.svg"
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Header() {
    const navigate = useNavigate();
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar fixed='top' expand='lg' dark bgColor='dark' >
            <MDBContainer fluid>
                <MDBNavbarBrand onClick={() => { navigate("/"); }} style={{ color: "white" }}>
                    <img
                        src={imgSrc}
                        height='30'
                        alt=''
                        loading='lazy'
                    />
                    Chitra_Generator
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}  >
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => { navigate("/history"); }}>History</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <MDBDropdown className='d-flex input-group w-auto' style={{color:"white"}}>
                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                            Your Profile
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Update your profile</MDBDropdownItem>
                            <MDBDropdownItem link>Logout</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}