import React from 'react';
import {useState} from "react";
import ProjectCard from '../Cards/ProjectCard';
import {projects} from "../../data/constants";

import {Container, Wrapper, Title, Desc, ToogleGroup, ToogleButton, Divider, CardContainer} from "./ProjectsStyles";


function Projects(props) {
    const [toogle, setToogle] = useState("all");
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>Here are some of my projects</Desc>
                <ToogleGroup>
                    {toogle === "all" ? (
                        <ToogleButton active value="all" onClick={()=>setToogle("all")}>All</ToogleButton>
                    ) : (
                        <ToogleButton value="all" onClick={()=>setToogle("all")} >All</ToogleButton>
                    )}
                    <Divider/>
                    {toogle === "web app" ? (
                        <ToogleButton active value="web app" onClick={()=>setToogle("web app")}>Web app's</ToogleButton>
                    ) : (
                        <ToogleButton value="web app" onClick={()=>setToogle("web app")}>Web app's</ToogleButton>
                    )}
                    <Divider/>
                    {toogle === "mll" ? (
                        <ToogleButton active value="mll" onClick={()=>setToogle("mll")}>MLL</ToogleButton>
                    ) : (
                        <ToogleButton value="mll" onClick={()=>setToogle("mll")}>MLL</ToogleButton>
                    )}
                    <Divider/>
                    {toogle === "other" ? (
                        <ToogleButton active value="other" onClick={()=>setToogle("other")}>Other</ToogleButton>
                    ) : (
                        <ToogleButton value="other" onClick={()=>setToogle("other")}>Other</ToogleButton>
                    )}
                </ToogleGroup>

                <CardContainer>
                    {toogle === "all" && projects.map((project, index) => <ProjectCard project={project} />)}
                    {projects.filter((item) => item.category === toogle).map((project, index) => (<ProjectCard project={project} />))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
}

export default Projects;