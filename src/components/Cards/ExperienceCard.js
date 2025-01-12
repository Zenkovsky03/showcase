import React from 'react';
import styled from "styled-components";

function ExperienceCard({experience}) {
    return (
        <Card>
            <Top></Top>
            <Desc></Desc>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document>

                    </Document>
                </a>
            }
        </Card>
    );
}

export default ExperienceCard;