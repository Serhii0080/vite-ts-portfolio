import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";


type DateTextProps = {
    date: {
        year: number
        text: string
    };
};

export const DateText = (props: DateTextProps) => {
    return <StyledDateText>{props.date.text}</StyledDateText>;
};


const StyledDateText = styled.p`
    ${font({ weight: 500, Fmax: 18, Fmin: 16, lineHeight: 1.5 })}
    width: 258px;
    color: #fff;
    text-align: center;

    @media ${theme.media.tablet} {
        padding-left: 44px;
        text-align: left;
        width: 75%;
    }
    
    @media ${theme.media.mobile} {
        width: 100%;
    }
`