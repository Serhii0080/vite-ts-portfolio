import styled from "styled-components"
import photo from '../../../assets/photo.jpg'
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import grid from '../../../assets/imagens/grid.svg'
import { font } from "../../../styles/Common"
import "animate.css";
import { useEffect, useRef } from "react";
import { ParticlesBackground } from "../../../components/particle/Particle"

export const MainSection = () => {
    // useRef — ссылка на DOM-элемент (SmallText), чтобы работать с ним напрямую
    const welcomeRef = useRef<HTMLSpanElement | null>(null);

    // useRef — ссылка на DOM-элемент секции, чтобы отслеживать её видимость
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {

        const section = sectionRef.current;
        const element = welcomeRef.current;
        if (!section || !element) return; // если элемента нет — выходим

        // IntersectionObserver — следит за видимостью секции в viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                // entry.intersectionRatio >= 0.5, если 50% секции видно
                if (entry.intersectionRatio >= 0.5) {
                    // 50% видимости → добавляем классы анимации
                    // animate__animated — базовый класс animate.css (обязателен)
                    // animate__zoomInDown — конкретный эффект
                    element.classList.add("animate__animated", "animate__zoomInDown");
                } else {
                    element.classList.remove("animate__animated", "animate__zoomInDown");
                }
            },
            { threshold: 0.5 } // порог видимости — 50%
        );

        // начинаем наблюдать за секцией
        observer.observe(section);

        // страховка: при размонтировании компонента отключаем observer
        return () => observer.disconnect();
        // размонтирование компонента — это когда по условию
        // один компонент заменяется на другой (React убирает его из DOM)
    }, []);

    return (

        <StyledMain ref={sectionRef} role="main">
            <ParticlesBackground />
            <Container>
                <FlexWrapper $align={'center'} $justify='space-between'>
                    <TextBlock>
                        {/* ref = welcomeRef → связь DOM-элемента и useRef */}
                        <SmallText ref={welcomeRef}>
                            Welcome!
                        </SmallText>
                        <Name>I am Sergey Zhuk</Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </TextBlock>
                    <PhotoWrapper>
                        <Photo src={photo} alt="photo" loading="eager" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain >
    )
}


const StyledMain = styled.section`
    position: relative;
    min-height: 700px;
    height: 100%;
    display: flex;
    overflow-x: clip;
    .animate__zoomInDown {
        animation-duration: 1.4s;
        animation-timing-function: ease;
    }

    @media ${theme.media.tablet} {
        padding: 80px 0;
    }

    ${FlexWrapper} {

        @media ${theme.media.tablet} {
            flex-direction: column-reverse;
            gap: 75px;
        }
    }

    @media ${theme.media.mobile} {
        padding-top: 30px;
        padding-bottom: 71px;
    }

    
`

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 3;
`

const PhotoWrapper = styled.div`
    position: relative;
    width: 380px;
    height: 450px;
    
    &::before {
    content: "";
    position: absolute;
    width: 666px;
    height: 666px;
    background-image: url(${grid});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
    top: 60px;
    left: -14px;
    }


    &::after {
    content: "";
    position: absolute;
    width: 380px;
    height: 450px;
    border: 5px solid;
    border-image: ${theme.colors.accent} 1;
    border-radius: 50px 0;
    z-index: 2;
    top: 0;
    left: 0;
    }

        @media ${theme.media.tablet} {
        &::before {
            top:  -2px;             
            left: -5px;
            /* display: none; */
        }
    }

    @media ${theme.media.mobile} {
        width: 335px;
        height: 400px;

        &::before {
            width: 600px;
            height: 600px;
        }

        &::after {
            width: 335px;
            height: 400px;
            border-radius: 35px 0;
        }
    }
`

const Photo = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 18px;
`

const Name = styled.h2`
    ${font({ weight: 600, Fmax: 50, Fmin: 36, })}
`

const MainTitle = styled.h1`
    ${font({ weight: 400, Fmax: 27, Fmin: 20, })}
`
