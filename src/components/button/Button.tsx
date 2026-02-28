import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"


// Деструктуризация извлекает поле `text` из объекта props и вставляет его внутрь кнопки.
export const Button = ({ text }: { text: string }) => (
  <StyledButton>{text}</StyledButton>
)


const StyledButton = styled.button`
    ${font({ weight: 600, Fmax: 20, Fmin: 18 })}
    border-radius: 83px;
    width: 200px;
    height: 60px;
    background: ${theme.colors.accent};
    color: #fff;
    cursor: pointer;

                  /* Плавные переходы */
    transition: transform 0.2s ease, filter 0.2s ease;

    &:hover {
      transform: scale(1.05);      /* лёгкое увеличение */
      filter: brightness(1.1);     /* светлее на 10% */
    }

    &:active {
      transform: scale(0.98);      /* лёгкое нажатие */
      filter: brightness(0.95);    /* чуть темнее при клике */
    }
`