import { styled } from 'styled-components'
import { PngImage } from '../../../../components/pngImage/PngImage'
import { Button } from '../../../../components/button/Button'
import { theme } from '../../../../styles/Theme'
import { font } from '../../../../styles/Common'

type ProjectCardProps = {
    imageSrc: string // картинка приходит через пропс.
    alt?: string    // альтернативный текст приходит через пропс.
    title: string
    description: string
    link?: string
}


export const ProjectCard = ({ imageSrc, alt, title, description, link }: ProjectCardProps) => {
    return (
        <Project>
            <PngImage src={imageSrc} alt={alt} />
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectText>{description}</ProjectText>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button text="Look It Up" />
                </a>
            ) : (
                <Button text="Look It Up" />
            )}
        </Project>
    )
}



const Project = styled.div`
    border: 1px solid #a39d9d;
    border-radius: 50px 0;
    width: 550px;
    padding: 25px 25px 40px;

    @media ${theme.media.mobile} {
        width: 345px;
        border-radius: 50px 0;
        padding-bottom: 25px;

        button {
            width: 100%;
        }
    }
`

const ProjectTitle = styled.h3`
    ${font({ weight: 600, Fmax: 30, Fmin: 24, lineHeight: 0.89 })}
    text-align: center;
    margin-top: 35px;
    margin-bottom: 65px;
    position: relative;
    

    &::before {
    content: "";
    position: absolute;
    border-radius: 83px;
    width: 300px;
    height: 4px;
    background: ${theme.colors.accent};
    left: 50%;
    transform: translateX(-50%);
    top: 46px;

        @media ${theme.media.mobile} {
            top: 38px;
            width: 100%
        }
    }

    @media ${theme.media.mobile} {
        margin-top: 27px;
        margin-bottom: 54px;
    }
`
const ProjectText = styled.p`
    ${font({ weight: 500, Fmax: 18, Fmin: 16, lineHeight: 1.45 })}
    margin-bottom: 54px;
    text-align: center;

    @media ${theme.media.mobile} {
        text-align: center;
        margin-bottom: 30px;
    }
`