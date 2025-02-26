import React from 'react';
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {DiCssdeck} from "react-icons/di";
import {FaBars} from "react-icons/fa";
import {useTheme} from "@mui/material";

import {Nav, NavContainer, NavLogo, MobileIcon, NavItems, NavLink, ButtonContainer, GithubContainer, MobileMenu, MobileMenuLinks, Span} from "./NavbarStyles";

function Navbar() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a
                        style={{
                            display: "flex",
                            aligItems:'center',
                            color: 'white',
                            marginBottom: '20',
                            cursor: 'pointer',
                        }}
                    >
                        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars
                        onClick={() => setOpen(!open)}
                    >
                    </FaBars>
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </NavItems>
                <ButtonContainer onClick={() => window.open("https://github.com/Zenkovsky03", "_blank")}>
                    <GithubContainer>Github profile</GithubContainer>
                </ButtonContainer>
            </NavContainer>
            {
                open && (
                    <MobileMenu open={open}>
                        <MobileMenuLinks href="#about" onClick={() => {
                            setOpen(!open)
                        }}>About</MobileMenuLinks>
                        <MobileMenuLinks href='#skills' onClick={() => {
                            setOpen(!open)
                        }}>Skills</MobileMenuLinks>
                        <MobileMenuLinks href='#experience' onClick={() => {
                            setOpen(!open)
                        }}>Experience</MobileMenuLinks>
                        <MobileMenuLinks href='#projects' onClick={() => {
                            setOpen(!open)
                        }}>Projects</MobileMenuLinks>
                        <MobileMenuLinks href='#education' onClick={() => {
                            setOpen(!open)
                        }}>Education</MobileMenuLinks>
                        <GithubContainer style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href="/" target="_blank">Github Profile</GithubContainer>
                    </MobileMenu>
                )
            }
        </Nav>
    );
}

export default Navbar;