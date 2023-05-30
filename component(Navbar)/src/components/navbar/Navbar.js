import React, { useState } from "react";
import LogoImg from "../../assets/logo.png"
import { NavbarContainer,   
         LeftContainer, 
         RightContainer,
         NavbarExtendedContainer, 
         NavbarInnerContainer, 
         NavbarLinkContainer,
         NavbarLink,
         Logo,
         OpenLinksButton, 
         NavbarLinkExtended,
        } from "../styles/Navbar.style";

function Navbar () {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer >
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/about">About</NavbarLink>
                        <NavbarLink to="/services">Services</NavbarLink>
                        <NavbarLink to="/testimony">Testimony</NavbarLink>
                        <NavbarLink to="/contact">Contact Us</NavbarLink>
                        <OpenLinksButton onClick={() => {
                            setExtendNavbar((curr) => !curr);
                        }}>
                        {extendNavbar ? <> &#10005; </> : <> &#8801; </>} </OpenLinksButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo src={ LogoImg }></Logo>
                </RightContainer>
            </NavbarInnerContainer>
            { extendNavbar && (
            <NavbarExtendedContainer>
                <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
                <NavbarLinkExtended to="/services">Services</NavbarLinkExtended>
                <NavbarLinkExtended to="/testimony">Testimony</NavbarLinkExtended>
                <NavbarLinkExtended to="/contact">Contact Us</NavbarLinkExtended>
            </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar;