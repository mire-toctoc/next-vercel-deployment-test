//Este es un higher order component, recibe otros elementos o componentes
/*Servirá para mantener replicado código en otda la App
Pero sin la necesidad de dejarlo en cada archivo*/



import { FC } from 'react'
import styles from './MainLayout.module.css';
import Head from 'next/head';
import { Navbar } from '../Navbar';

export const MainLayout: FC = ({ children }) => {//el children recibirá la info de otro componente
                                              
    return (
        <div className={styles.container}>

          <Head>
            <title>App Index </title>
            <meta name="description" content="Home page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>  

          <main className={styles.main}>
          
          { children } {/*Aquí irá el children, recibiendo la info de otro componente*/ }
    
            
          </main>
    
          
        </div>
      )
};