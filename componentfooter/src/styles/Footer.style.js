import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: 10%;
    position: fixed;
    bottom: 0;
    background-color: green;
    color: white;
`;

export const LeftFooter = styled.div`
    width: 50%;   
    display: inline-block;
    vertical-align: top 
`;

export const LeftFooterText = styled.p`
    font-size: 16px;
    font-weight: 300;
    text-align: right;
`;

export const RightFooter = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top
`;

export const RightFooterText = styled.p`
    font-size: 16px;
    font-weight: 300;
    text-align: left;
`;



