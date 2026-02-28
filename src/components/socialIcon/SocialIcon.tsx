import styled from "styled-components"
import { Icon } from "../icon/Icon"

type SocialIconProps = {
    width?: string
    height?: string
    gap?: string
}

type SocialListProps = {
    $gap?: string
}

export const SocialIcon = ({ width, height, gap }: SocialIconProps) => {
    return (
        <StyledSocialList $gap={gap}>
            <li>
                <a href="https://github.com/Serhii0080" aria-label="GitHub profile">
                    <Icon iconId="github" width={width || "32"} height={height || "32"} viewBox="0 0 31 30" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/feed/" aria-label="LinkedIn profile">
                    <Icon iconId="linkedin" width={width || "32"} height={height || "32"} viewBox="0 0 32 32" />
                </a>
            </li>
            <li>
                <a href="https://t.me/Serhii0800" aria-label="Telegram profile">
                    <Icon iconId="telegram" width={width || "35"} height={height || "30"} viewBox="0 0 35 30" />
                </a>
            </li>
        </StyledSocialList>
    )
}

const StyledSocialList = styled.ul<SocialListProps>`
    display: flex;
    align-items: center;
    gap: ${props => props.$gap || '25px'};

    a {
        display: flex;
    }
`