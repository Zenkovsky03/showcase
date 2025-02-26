import React from 'react';
import {skills} from "../../data/constants";

import {Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage} from "./SkillsStyles";

function Skills(props) {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
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