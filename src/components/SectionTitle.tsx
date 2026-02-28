import { styled } from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";


export const SectionTitle = styled.h2`
    ${font({ weight: 600, Fmax: 46, Fmin: 32, lineHeight: 1.5 })}
    display: inline-block;
    margin-bottom: 73px;

    @media ${theme.media.mobile} {
        margin-bottom: 30px;
    }
`