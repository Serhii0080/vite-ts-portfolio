import styled from "styled-components";
import { Icon } from "../icon/Icon";


export const Logo = () => {
    return (
        <div>
            <LogoLink href="#" aria-label="Sergey Zhuk Homepage">
                <Icon iconId={'logo'} />
            </LogoLink>
        </div>
    )
};

const LogoLink = styled.a`
    display: flex;
`