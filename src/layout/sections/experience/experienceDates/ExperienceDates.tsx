import styled from "styled-components";
import { DateText } from "../../../../components/dateText/DateText";
import { theme } from "../../../../styles/Theme";
import { experienceData } from "../../../../data/experienceData";


// Префикс $ нужен для styled-components, чтобы пропс не попал в DOM
export const ExperienceDates = () => {
    const STEP = 300; // шаг в пикселях между датами

    return (
        <HorizontalScrollWrapper>
            <StyledWrapperDates $count={experienceData.length} $step={STEP}>
                {/* // Импортируем массив объектов experienceData из файла */}
                {/*   // Ключи берутся из id, который генерируется через библиотеку UUID */}
                {experienceData.map((item) => (
                    <StyledStepBlock key={item.id}>
                        <StyledSpanData>{item.year}</StyledSpanData>
                        <DateText date={item} />
                    </StyledStepBlock>
                ))}
            </StyledWrapperDates>
        </HorizontalScrollWrapper>
    );
};

const HorizontalScrollWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding-bottom: 16px;


    /* ---------- CUSTOM SCROLLBAR ---------- */

&::-webkit-scrollbar {
    height: 20px;
}

&::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 100px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: linear-gradient(
        90deg,
        #0f2027,
        #203a43,
        #2c5364,
        #1b6ca8
    );
}

scrollbar-width: thin;
scrollbar-color: #2c5364 rgba(255,255,255,0.05);

`;


const StyledWrapperDates = styled.div<{ $count: number; $step: number }>`
    display: flex;
    max-width: ${({ $count, $step }) => $count * $step}px;
    position: relative;
    gap: 30px;
    margin-left: auto;
    margin-right: auto;

    &::before {
    content: "";
    position: absolute;
    left: 128px;
    right: 128px;
    top: 46px; 
    height: 8px;
    border-radius: 83px;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);

        @media ${theme.media.tablet} {
            background: linear-gradient(180deg, #945dd6 0%, #6978d1 33%, #13adc7 100%);
            top: 0;
            left: 9px; /* отступ от левого края */
            width: 8px;  /* толщина линии */
            height: 100%; /* растягиваем по высоте контейнера */
        }
    }

        @media ${theme.media.tablet} {
            display: flex;
            flex-direction: column;
            margin: 0px;
            margin-top: 16px;
            gap: 54px;
        }
`;


const StyledStepBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 52px;

    @media ${theme.media.tablet} {
        align-items: flex-start;
        gap: 14px;
    }
`



export const StyledSpanData = styled.span`
    font-weight: 600;
    font-size: 26px;
    position: relative;

    @media ${theme.media.tablet} {
        padding-left: 45px;
    }


    &::before {
        position: absolute;
        content: '';
        border-radius: 100%;
        background: #fff;
        width: 25px;
        height: 25px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0px;
        top: 37px;

    @media ${theme.media.tablet} {
        left: 13px;
        top: 0;
    }
}
`
