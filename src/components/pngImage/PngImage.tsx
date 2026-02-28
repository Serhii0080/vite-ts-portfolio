import styled from "styled-components";
import { theme } from "../../styles/Theme";

interface PngImageProps {
    src: string;          // путь к PNG — обязателен
    alt?: string;         // альтернативный текст — необязательный
    width?: number | string; // ширина — необязательная
    height?: number | string; // высота — необязательная
}



export const PngImage = ({ src, alt, width, height }: PngImageProps) => {
    return (
        <StyledImg
            src={src}                   // используем путь к картинке
            alt={alt}                   // используем альтернативный текст
            width={width || undefined}   // если width не передан → undefined → браузер берёт реальный размер PNG
            height={height || undefined} // если height не передан → undefined → браузер берёт реальный размер PNG
        />
    )
};


const StyledImg = styled.img`
    border-radius: 30px 0;
    width: 500px;
    height: 280px;

    @media ${theme.media.mobile} {
        width: 295px;
        height: 220px;
        object-fit: cover;
        border-radius: 30px 0;
    }
`;