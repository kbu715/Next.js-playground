// my-theme.ts
import { createGlobalStyle, DefaultTheme } from 'styled-components';

// export const myTheme: DefaultTheme = {
//   borderRadius: '3px',

//   colors: {
//     main: 'cyan',
//     secondary: 'magenta',
//   },
// };

export const lightTheme: DefaultTheme = {
  body: '#FFF',
  text: '#363537',
}

export const darkTheme: DefaultTheme = {
  body: '#363537',
  text: '#FAFAFA',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`