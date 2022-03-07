import Link from 'next/link';

import { MainLayout } from '../../components/layouts/MainLayout';

export default function ContactPage() {
	return (
		<MainLayout>
			<h1>Contact page</h1>

			<h1 className="title">
				{/* Ir a <a href="/about">About</a> */}
				Is a <Link href="/">Home</Link>
			</h1>

			<p className="description">
				Get started by editing{' '}
				<code className="code">pages/contact/index.jsx</code>
			</p>
		</MainLayout>
	);
}
