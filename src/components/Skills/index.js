import React from 'react';
import styled from 'styled-components';
import {skills} from "../../data/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 12px;
    color: ${({ theme }) => theme.text_primary};
    
    @media (max-width: 768px){
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    
    @media (max-width: 768px){
        font-size: 16px;
    }
`;


function Skills(props) {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>Here are some of my skills </Desc>
                {/*<SkillsContainer>*/}
                {/*    {skills.map((item) =>(*/}
                {/*        <Skill>*/}
                {/*            <SkillTitle>{item.title}</SkillTitle>*/}
                {/*            <SkillList>*/}
                {/*                {item.skills.map((skill) => (*/}
                {/*                    <SkillItem>*/}
                {/*                        <SkillImage src={skill.image} />*/}
                {/*                        {skill.name}*/}
                {/*                    </SkillItem>*/}
                {/*                ))}*/}
                {/*            </SkillList>*/}
                {/*        </Skill>*/}
                {/*    ))}*/}
                {/*</SkillsContainer>*/}
            </Wrapper>
        </Container>
    );
}

export default Skills;