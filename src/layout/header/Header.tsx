import styled from "styled-components";
import { useState } from "react";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { SocialIcon } from "../../components/socialIcon/SocialIcon";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

const items = ['Projects', 'Technologies', 'Experience'];


export const Header = () => {
    // Хук состояния: хранит текущее состояние меню (открыто/закрыто)
    // useState возвращает пару: текущее состояние и функцию для его изменения
    // setIsOpen вызывается при клике на бургер и обновляет состояние
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper $justify="space-between" $align="center">
                    <Logo />

                    <DesktopMenu>
                        <Menu menuItems={items} />
                        <SocialIcon />
                    </DesktopMenu>

                    {/* Oбработчик клика: переключает состояние меню */}
                    {/* Тернарный оператор: если isOpen = true, присваиваем класс 'open', иначе класс не добавляется */}
                    {/* При 'open' срабатывают стили: появляется меню, и бургер превращается в крестик. */}
                    <ToggleBlock>
                        <BurgerButton
                            onClick={() => setIsOpen(!isOpen)}
                            className={isOpen ? 'open' : ''}
                            $isOpen={isOpen}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <span />
                            <span />
                            <span />
                        </BurgerButton>

                        <MobileMenuPopup $isOpen={isOpen} onClick={() => { setIsOpen(false) }}>
                            <Menu menuItems={items} />
                            <SocialIcon />
                        </MobileMenuPopup>
                    </ToggleBlock>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #0f1624;
    padding: 26px 0;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 9999999;
    opacity: 0.85;
`;

const DesktopMenu = styled.div`
    display: flex;
    gap: 215px;
    align-items: center;

    @media ${theme.media.header} {
        display: none;
    }
`;

const ToggleBlock = styled.div`
    display: none;

    @media ${theme.media.header} {
        display: block;
        position: relative;

        ul {
            gap: 40px;
        }
    }

    @media ${theme.media.mobile} {

        ul {
            gap: 35px;
        }
        
    }
`;


/* Типизация через деструктуризацию прямо в компоненте */
const BurgerButton = styled.button<{ $isOpen: boolean }>`

        /* Внутри Styled Components деструктуризируем $isOpen прямо из пропса: */
        position: ${({ $isOpen }) => ($isOpen ? 'fixed' : 'relative')};
        top: ${({ $isOpen }) => ($isOpen ? '40px' : 'auto')};
        right: ${({ $isOpen }) => ($isOpen ? '28px' : '12px')};
        width: 24px;
        height: 18px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 1000;

    span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        box-sizing: border-box;
        backface-visibility: hidden;
        transform-origin: center;
        background-color: ${theme.colors.font};
        border-radius: 2px;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.2s ease;
    }

    /* Позиционируем бургер-меню: внутри кнопки span — полоски, которые формируют бургер */
    span:nth-child(1) { top: 0; }
    span:nth-child(2) { top: 7px; }
    span:nth-child(3) { bottom: 0; }

    /* Если к кнопке добавлен класс 'open', обращаемся к полоскам через :nth-child 
    и применяем стили, чтобы превратить бургер в крестик */
    &.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    &.open span:nth-child(2) { opacity: 0; }
    &.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
`;

// Типизация пропса $isOpen для мобильного меню
type MobileMenuPopupProps = {
    $isOpen: boolean;
};

const MobileMenuPopup = styled.div<MobileMenuPopupProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(15, 22, 36, 0.95);
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    align-items: center;
    gap: 40px;
    z-index: 999;

    /* Передаём параметр $isOpen через деструктуризацию.
    В теле функции тернарный оператор: если $isOpen = true 
    → 'translateY(0)', если false → 'translateY(-100%)'.

    С помощью этого включаем или выключаем сворачиваемое меню и меняем вид бургер-кнопки.
    То же самое делаем с opacity: если $isOpen = true → 1, если false → 0,
    чтобы меню плавно появлялоcь или исчезало. */

    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity 0.3s ease, transform 0.3s ease;

    @media ${theme.media.header} {
        gap: 50px;
    }
    
    @media ${theme.media.mobile} {
        gap: 45px;
    }
`;