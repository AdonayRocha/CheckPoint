import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        background-color: #fff;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        color: #1E90FF;
    }

    #root {
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyle;
