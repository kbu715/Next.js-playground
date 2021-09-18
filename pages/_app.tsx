import '../styles/globals.css'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import { ClickProvider } from '../context/click'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { darkTheme, GlobalStyles, lightTheme } from '../my-theme'

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState<string>('light');
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
