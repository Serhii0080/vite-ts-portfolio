import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { ExperienceDates } from "./experienceDates/ExperienceDates"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"


export const Experience = () => {
    return (
        <StyledExperience id="experience">
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <ExperienceDates />
            </Container>
        </StyledExperience>
    )
}


const StyledExperience = styled.section`
    padding-top: 100px;
    padding-bottom: 140px;

    
    @media ${theme.media.mobile} {
        padding-top: 70px;
        padding-bottom: 100px;
    }
`