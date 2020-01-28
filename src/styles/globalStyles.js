import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');

    *{
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body{
        margin: 0;
        padding: 0;
        background: #f6f8fa;
        overflow-x: hidden;
    }
`;