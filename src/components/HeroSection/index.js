import React from 'react';
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import ProfileImage from "../../images/ProfileImage.jpg";
import HeroBgAnimation from "../HeroBgAnimation";

import {HeroContainer, HeroBg, HeroInnerContainer, HeroLeftContainer, Title, TextLoop, Span, SubTitle, ResumeButton, HeroRightContainer, Image} from "./HeroStyles";

function Hero(props) {
    return (
        <div id = "about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                       <Title>Hi, I am <br/>{Bio.name}</Title>
                       <TextLoop>
                           I am a
                           <Span>
                               <Typewriter options={{
                                   strings: Bio.roles,
                                   autoStart: true,
                                   loop: true,

                               }}
                               />
                           </Span>
                       </TextLoop>
                        <SubTitle> {Bio.description} </SubTitle>
                        <ResumeButton href={Bio.resume} target="display">Check Resume</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Image src={ProfileImage} alt="ProfileImage" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default Hero;