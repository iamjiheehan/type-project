import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body, div, p, span {
        /* margin: 0;
        padding: 0; */
        box-sizing: border-box;
        font-family: 'SUIT-Regular', sans-serif;
    }

    :root {
        --color__primary: #E75151;
    }

    @font-face {
        font-family: 'SUIT-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    hr {
        border-color: #95a5a6;
    }
`;

export default GlobalStyles;
