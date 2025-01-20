import React from 'react';
import styled from "styled-components";


const Card = styled.div`
    width: 330px;
    height: 490px;
    background: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    
    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`;


function ProjectCard({project}) {
    return (
        <Card>
                {/*<Image src={project.image} alt="Project image" />*/}
                {/*<Tags />*/}
                {/*<Details></Details>*/}
                {/*<Members></Members>*/}
        </Card>
    );
}

export default ProjectCard;