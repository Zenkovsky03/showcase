import React from 'react';
import {education} from "../../data/constants";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from "../Cards/EducationCard";

import {Container, Wrapper, Title, Desc, TimeLineSection} from "./EducationStyles";

function Education(props) {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>My education has been a journey of slef-discovery and growth</Desc>
                <TimeLineSection>
                    <Timeline>
                        {education.map((education, index) => (
                            <TimelineItem>
                                <TimelineContent sx={{py: '12px', px: 2}}>
                                    <EducationCard education={education} />
                                </TimelineContent>
                                <TimelineSeparator >
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length - 1 && <TimelineConnector style={{background: "#854CE6"}} />}  {/*    jeli nie jest ostatnim elementem to dawaj kropke*/}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    );
}

export default Education;