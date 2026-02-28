import styled from "styled-components"
import { ProgressLine } from "../../../../components/progressLine/ProgressLine"
import { progressLinesData } from "../../../../data/progressLinesData"
import { theme } from "../../../../styles/Theme"


// map перебирает массив и рендерит ProgressLine.
// спред-оператор {...line} разворачивает свойства объекта для передачи в компонент.
export const ProgressLines = () => {
    return (
        <ProgressList>
            {progressLinesData.map((line) => (
                // Используем уникальный ID из библиотеки UUID — каждый элемент независим, 
                // что обеспечивает минимальную перерисовку и стабильность DOM
                <ProgressItem key={line.id}>
                    <ProgressLine {...line} />
                </ProgressItem>
            ))}
        </ProgressList>
    )
}

const ProgressList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 900px;
    width: 100%;

    @media ${theme.media.mobile} {
        gap: 28px;
    }
`

const ProgressItem = styled.li`
    max-width: 900px;
    display: flex;
    flex-direction: column;
    /* height: 57px; */
`
