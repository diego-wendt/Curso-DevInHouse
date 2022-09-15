import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    color: ${({theme})=>theme.colors.primary};; 
}

:root{
    background-color: ${({theme})=>theme.colors.backgroundPrimary};

}

`;
