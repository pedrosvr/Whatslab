import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Roboto', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        display: flex;
        justify-content: center;
    }
`

export const AppContainer = styled.div`
    width: 600px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    /* margin: 0 auto; */
`