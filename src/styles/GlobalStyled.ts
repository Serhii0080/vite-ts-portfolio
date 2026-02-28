import { createGlobalStyle } from "styled-components";
import { theme } from './Theme';
import PoppinsMedium from "../assets/fonts/poppins-medium-webfont.woff2";
import PoppinsSemiBold from "../assets/fonts/poppins-semibold-webfont.woff2";

export const GlobalStyles = createGlobalStyle`
    /* Подключение шрифтов */
        @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsSemiBold}) format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsMedium}) format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }



    /* Сброс стилей и глобальные */
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Poppins';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
        min-width: 375px;
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
        background-color: #0f1624;
    }


    a { 
        text-decoration: none; color: inherit; 
    }

    ul { 
        list-style: none; 
    }

    button { 
        background-color: unset; border: none; 
    }

    section:nth-of-type(odd) { 
        background-color: ${theme.colors.primaryBg}; 
    }
    
    section:nth-of-type(even) { 
        background-color: ${theme.colors.secondaryBg}; 
        }
`;