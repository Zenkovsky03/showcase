
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

import {FooterContainer, FooterWrapper, Logo, Nav, NavLink, Copyright} from "./FooterStyles";

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Mateusz Zaniewski</Logo>
                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </Nav>
                <Copyright>
                    &copy; 2025 Mateusz Zaniewski. All rights reserved.
                </Copyright>

            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;