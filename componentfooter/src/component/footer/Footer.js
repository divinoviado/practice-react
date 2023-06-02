import React from "react";
import { FooterContainer, 
         LeftFooter, 
         LeftFooterText, 
         RightFooter, 
         RightFooterText, } from "../../styles/Footer.style"
// import React, { useState } from "react";

const Footer = () => {
    return (
        <FooterContainer>
            <LeftFooter>
                <LeftFooterText>React Component</LeftFooterText>
            </LeftFooter>
            <RightFooter>
                <RightFooterText>&copy; {new Date().getFullYear()} DivinoViado. All right reserved. </RightFooterText>
            </RightFooter>
        </FooterContainer>
    );
}

export default Footer;