import { styled } from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";
import { useEffect, useRef, useState } from "react";

type ProgressLineProps = {
    value: number;
    label: string;
};

export const ProgressLine = ({ value, label }: ProgressLineProps) => {

    // useRef — React-хук, который создаёт объект для хранения ссылки на DOM-элемент (чтобы наблюдать за ним).
    // useState — для хранения состояния (в данном случае — текущего значения прогресс-бара).

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [animatedValue, setAnimatedValue] = useState(0);

    // useEffect — хук, который запускается после рендера React-компонента внутри useEffect пишем код для действий.
    // IntersectionObserver — браузерный API на уровне DOM, который следит за видимостью элемента в области просмотра (viewport).
    // если элемент виден → true, если не виден → false.

    useEffect(() => {
        // когда наблюдение запущено через observer.observe(), он создаёт массив entries, в котором лежат объекты entry — именно в объекте entry находится свойство isIntersecting (true/false), определяющее, виден элемент или нет.
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimatedValue(value);
                } else {
                    setAnimatedValue(0); // сброс при уходе (чтобы анимация повторялась)
                }
            },
            { threshold: 0.9 } // threshold: 0.9 — срабатывание observer, когда 90% элемента видно на экране
        );

        // если DOM-элемент существует (wrapperRef.current не null), запускаем наблюдение через observer.observe()
        // observe() начинает отслеживать видимость этого DOM-элемента, чтобы IntersectionObserver мог реагировать на появление/исчезновение.
        if (wrapperRef.current) {
            observer.observe(wrapperRef.current); // -> DOM-элемент div
        }

        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={wrapperRef}> {/* связываем этот div с wrapperRef, чтобы React сохранил ссылку на DOM-элемент */}
            <ProgressLineLabel>{label}</ProgressLineLabel>
            <StyledLineWrapper>
                <StyledLineBar value={animatedValue} />  {/* animatedValue берём из массива useState и передаём как props */}
            </StyledLineWrapper>
        </div>
    );
};

const ProgressLineLabel = styled.h3`
    ${font({ weight: 600, Fmax: 26, Fmin: 22 })}
    display: flex;
    align-self: flex-start;
    margin-left: 23px;
    margin-bottom: 2px;

    @media ${theme.media.mobile} {
        margin-left: 10px;
        margin-bottom: 5px;
    }
`;

const StyledLineWrapper = styled.div`
    border-radius: 83px;
    max-width: 900px;
    width: 100%;
    height: 18px;
    background-color: #162950;
`;

const StyledLineBar = styled.div<{ value: number }>`
    border-radius: 83px;
    width: ${props => props.value}%;
    height: 18px;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    transition: width 1.9s ease; // transition плавно анимирует изменение width (делает переход между 0% → value% постепенным).
`;