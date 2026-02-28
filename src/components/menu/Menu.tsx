import { styled } from "styled-components";
import { theme } from "../../styles/Theme";

const links: { [key: string]: string } = {
    Projects: "#projects",
    Technologies: "#technologies",
    Experience: "#experience"
};

// map перебирает массив menuItems и рендерит <li> с <a>; key используется для уникальной идентификации, если строки будут дублироваться, нужно заменить key={item} на уникальный ID.
export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item) => {
                    return <li key={item}>
                        {/* links[item] – обращение к объекту links по динамическому ключу:
                        используем значение параметра item (строку),
                        которая совпадает с названием ключа в links,
                        чтобы получить соответствующее значение (href) из объекта. */}
                        <Link href={links[item]} aria-label={item}>
                            {item}
                        </Link>
                    </li>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 80px;

        @media ${theme.media.header} {
            flex-direction: column;
            text-align: center;

            a {
                font-size: 22px;
            }
        }

        @media ${theme.media.mobile} {
            a {
                font-size: 18px;
            }
        }
    }

`

const Link = styled.a`
    font-weight: 500;
    font-size: 16px;
`