import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const NavBar = styled.nav `
    background: #2a9d8f;
    height: ${props => props.showToggle ? 'auto' : '85px'}
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    @media screen and (max-width: 768px) {
        width: auto;
    }    
`

export const NavLogo = styled(Link) `
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    @media screen and (max-width: 768px) {
        padding-left: 20px;
    }
`

export const ImgLogo = styled.img `
    height: 70px;
`

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style-type: none;
    height: auto;
    @media screen and (max-width: 768px) {
    display: ${props => props.showToggle ? 'block' : 'none'};
    padding-top: 50px;
    }    
`

export const NavList = styled.li `
@media screen and (max-width: 768px) {
    padding: 2rem 0;
`
export const NavLink = styled(Link) `
    color: #fff;
    font-weight: bold;
    border: 3px solid #fff;
    border-radius: 10px;
    height: 30px;
    margin: 5px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    &.active {
        color: #2a9d8f;
        background-color: #fff;
    }
`

export const Bars = styled(FaBars) `
    color: #fff;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 100%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`