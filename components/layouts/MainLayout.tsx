import { FC } from 'react';

import Head from 'next/head';

import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout: FC = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home - Marlon</title>
				<meta name="description" content="Home page" />
				<meta name="keywords" content="marlon, varon, curso, next.js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className={styles.main}>{children}</main>
		</div>
	);
};
