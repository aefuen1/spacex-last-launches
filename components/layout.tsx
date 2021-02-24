import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Layout({ children }:{children:React.ReactNode}){
    return (
        <div className={styles.container}>
            <Head>
                <title>SpaceX Launches</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
            <h1 className={styles.title}>
            Check <a href="https://www.spacex.com" target="_blank">SpaceX</a> Launches!
            </h1>
            {children}
            </main>
            <footer className={styles.footer}>
            <a
            href="https://github.com/aefuen1"
            target="_blank"
            >
            &copy;Andres Fuentes
            </a>
        </footer>
        </div>
    );
        
}