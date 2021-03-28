import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --shape: #FFFFFF;
    --background: #F0F2F5;
    --text-body: #969CB3;
    --text-title: #363F5F;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --red: #E52E4D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Font padrão 16px - Ótimo para desktop
  // REM 1rem = font-size || 1rem = 16px
  // Com valor fixo, sobrepõe as preferências do usuário por exp que tem dificuldade de ler

  html {
    @media(max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px){
      font-size: 87.5% // 14px
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;