import styled from "styled-components"
import { SocialIcon } from "../../components/socialIcon/SocialIcon"
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper $justify={"space-between"}>
                    <StyledContactMenu>
                        <StyledContactItem>
                            <span>Call me:</span>
                            <a href="#">123-456-789</a>
                        </StyledContactItem>
                        <StyledContactItem>
                            <span>Email:</span>
                            <a href="https://mail.google.com/mail/u/0/#inbox">startap.chrom@gmail.com</a>
                        </StyledContactItem>
                    </StyledContactMenu>
                    <SocialIcon gap={"40px"} />
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #0f1624;
    padding: 28px 0;

    ${FlexWrapper}{
        @media ${theme.media.tablet} {
            flex-direction: column;
            gap: 42px;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
    }
`
const StyledContactMenu = styled.ul`
    display: flex;
    gap: 163px;

    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 26px;
    }
`
const StyledContactItem = styled.li`
    display: flex;
    flex-direction: column;

    a,
    span {
        ${font({ weight: 600, Fmax: 22, Fmin: 18, lineHeight: 1.4 })}
        color: #fff;
    }
`