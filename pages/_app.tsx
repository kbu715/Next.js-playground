import '../styles/globals.css'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import { ClickProvider } from '../context/click'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { darkTheme, GlobalStyles, lightTheme } from '../my-theme'
import { useDarkMode } from '../hooks/useDarkMode'

function MyApp({ Component, pageProps }: AppProps) {

  const { theme, setLightTheme, setDarkTheme } = useDarkMode();

  const toggleTheme = () => {
    // theme == 'light' ? setDarkTheme() : setLightTheme();
    if (theme === lightTheme) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }


  return (
    <ThemeProvider theme={theme === lightTheme ? darkTheme : lightTheme}>
      <ClickProvider>
      <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
          <button onClick={toggleTheme}>Switch Theme</button>
        </Layout>
      </ClickProvider>
    </ThemeProvider>
    )
}

export default MyApp
