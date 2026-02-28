import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { ProgressLines } from "./progressLines/ProgressLines"
import { Icon } from "../../../components/icon/Icon"
import { technologiesIconData } from "../../../data/technologiesIconData"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme"

type TechnologiesProps = {
    width?: string
    height?: string
}

// map перебирает массив иконок технологий и рендерит компонент Icon с заданным iconId, viewBox, шириной и высотой.

export const Technologies = ({ width, height }: TechnologiesProps) => {
    return (
        <StyledTechnologies id="technologies">
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <FlexWrapper $direction={'column'} $align={'center'}>
                    <ProgressLines />
                    <SkillsTitle>Additional technologies and skills</SkillsTitle>
                    <SkillsList>
                        {technologiesIconData.map((icon) => (
                            // React атрибут key нужен для уникальной идентификации элемента в массиве, чтобы React корректно отслеживал изменения и минимально перерисовывал элементы при добавлении или перестановке.
                            <li key={icon.id}>
                                <Icon
                                    {...icon}  // iconId и viewBox.
                                    width={width || "100"}
                                    height={height || "100"}
                                />
                            </li>
                        ))}
                    </SkillsList>
                </FlexWrapper>
            </Container>
        </StyledTechnologies>
    )
}

const StyledTechnologies = styled.section`
    padding-top: 100px;
    padding-bottom: 170px;

    @media ${theme.media.mobile} {
        padding-top: 73px;
        padding-bottom: 110px;
    }
`

const SkillsTitle = styled.h3`
    ${font({ weight: 600, Fmax: 44, Fmin: 27, lineHeight: 1.43 })}
    margin-top: 115px;
    margin-bottom: 70px;
    text-align: center;

    @media ${theme.media.mobile} {
        margin-top: 87px;
        margin-bottom: 40px;
    }
`

const SkillsList = styled.ul`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;

    li {
        display: flex;
    }

    @media ${theme.media.mobile} {
        gap: 30px;
        svg {
            width: 60px;
            height: 60px;
        }
    }
`
