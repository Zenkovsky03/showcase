import React from 'react';
import styled from 'styled-components';
import {skills} from "../../data/constants";
import {Container} from "@mui/material";


function Skills(props) {
    return (
        <Container id="skills">
            <Wrapper>
                <Tittle>Skills</Tittle>
                <Desc>Here are some of my skills </Desc>
                <SkillsContainer>
                    {skills.map((item) =>(
                        <Skill>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {item.skills.map((skill) => (
                                    <SkillItem>
                                        <SkillImage src={skill.image} />
                                        {skill.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
}

export default Skills;