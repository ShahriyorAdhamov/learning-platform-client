import '../styles/globals.css';
import '@fontsource/roboto';
import 'react-multi-carousel/lib/styles.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../config/theme';
import { Client, HydrationProvider } from 'react-hydration-provider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<Client>
					<Component {...pageProps} />
				</Client>
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default MyApp;
