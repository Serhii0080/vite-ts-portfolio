import { styled } from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { ProjectCard } from "./projectCard/ProjectCard"
import { projectsData } from "../../../data/projectsData"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"


// map перебирает массив и рендерит ProjectCard.
// спред-оператор {...project} разворачивает свойства объекта для передачи в компонент.

export const Projects = () => {
    return (
        <StyledProjects id="projects">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper $wrap={'wrap'} $gap={'40px'} $rowGap={"60px"} $justify="center">
                    {projectsData.map((project) => (
                        <ProjectCard
                            // React атрибут key нужен для уникальной идентификации элемента в массиве, чтобы React корректно отслеживал изменения и минимально перерисовывал элементы при добавлении или перестановке.
                            key={project.id}
                            {...project}  // данные из массива.
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    padding-top: 100px;
    padding-bottom: 140px;

    ${FlexWrapper} {
    
        @media ${theme.media.tablet} {
            gap: 30px;
        }
    }

    @media ${theme.media.mobile} {
        padding: 70px 0;
    }
`
