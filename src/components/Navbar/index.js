import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Link as LinkR} from 'react-router-dom';

const Nav = styled.nav`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        dispaly: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px) {
        padding: 0 0px;
    }
`;
function Navbar() {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>Logo</NavLogo>
                <MobileIcon></MobileIcon>
                <NavItem>
                    <NavLink>Home</NavLink>
                </NavItem>
                <ButtonContainer>
                    <GithubContainer>Github</GithubContainer>
                </ButtonContainer>
            </NavContainer>
        </Nav>
    );
}

export default Navbar;