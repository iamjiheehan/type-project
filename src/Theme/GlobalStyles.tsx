// GlobalStyles.tsx
import React, { useEffect } from 'react';

const GlobalStyles: React.FC = () => {
    useEffect(() => {
        const root = document.documentElement;
        const style = document.createElement('style');

    style.innerHTML = `
        html, body, div, p, span {
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

        root.appendChild(style);

        return () => {
        root.removeChild(style);
        };
    }, []);

    return null;
};

export default GlobalStyles;
