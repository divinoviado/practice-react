import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? '1000px' : '80px')};
    display: flex;
    flex-direction: column;
    background-color: green;
`;

export const LeftContainer = styled.div`
    padding-left: 5%;
    flex: 80%;

    display: flex;
    align-items: center;
    /* background-color: red; */
`;

export const RightContainer = styled.div`
    padding-right: 50px;
    flex: 20%;

    display: flex;
    justify-content: flex-end;
    /* background-color: salmon; */
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    margin: 10px;
    
    color: white;
    font-size: x-Large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    margin: 10px;

    color: white;
    font-size: x-Large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
`;

export const Logo = styled.img`
    height: auto;
    
    margin: 10px;
    max-width: 100px;
`;

export const OpenLinksButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;

    width: 70px;
    height: 70px;
    font-size: 50px;

    @media (min-width: 700px) {
        display: none;
    }
`;


export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #fff; */

    @media (min-width: 700px) {
        display: none;
        /* background-color: green; */
    }
`;


