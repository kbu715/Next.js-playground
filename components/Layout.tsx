import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'
import { ReactNode } from 'react'

interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

const Layout = ({children}: IProps) => {
    return (
        <>
        <Meta />
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
