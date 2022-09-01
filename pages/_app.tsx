import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createContext, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

export const ValueContext = createContext({
	value: '',
	setValue: (_: string) => {},
});

const client = new QueryClient({
	defaultOptions: {
		queries: { refetchOnWindowFocus: false },
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	const [value, setValue] = useState('');

	return (
		<QueryClientProvider client={client}>
			<ValueContext.Provider value={{ value, setValue }}>
				<Head>
					<title>MVBIN</title>
					<meta name='description' content='Minimum Viable Pastebin' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<main>
					<Component {...pageProps} />
					<footer>© 2022 Ironolife</footer>
				</main>
			</ValueContext.Provider>
		</QueryClientProvider>
	);
}

export default MyApp;
