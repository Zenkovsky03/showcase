import React from 'react';
import styled from "styled-components";

const HeroContainer = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    
    @media screen and (max-width: 960px) {
        padding: 66px 16px;
    }
    @media screen and (max-width: 640px) {
        padding: 32px 16px;
    }
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95% ,0 100%);
`;
function Hero(props) {
    return (
        <div id = "about">
            <HeroContainer>
                <HeroBg>

                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>

                    </HeroLeftContainer>
                    <HeroRightContainer>

                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default Hero;