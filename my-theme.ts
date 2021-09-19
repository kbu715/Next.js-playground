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
};

export const darkTheme: DefaultTheme = {
  body: '#363537',
  text: '#FAFAFA',
};

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
  
body {
  font-family: 'Tahoma', sans-serif;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  transition: all 500ms linear;
}

h1 {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  background-color: transparent;
  border: 0;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}

a,
button {
  cursor: pointer;
}

button {
  padding: 0;
}

ul,
ol {
  padding-left: 0;
  list-style: none;
}

address {
  font-style: normal;
}
`;
