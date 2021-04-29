import '../styles/globals.css'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import { ClickProvider } from '../context/click'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ClickProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClickProvider>
    )
}

export default MyApp
