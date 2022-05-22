import Head from 'next/head';
import styles from './PrimaryLayout.module.css';
import {FC, ReactNode} from 'react';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: FC<IPrimaryLayout> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Primary Layout Example</title>
            </Head>
            <main className={styles.main}>{children}</main>
        </>
    );
};

export default PrimaryLayout;
