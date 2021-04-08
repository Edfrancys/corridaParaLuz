import React from 'react';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
const theme = {
	colors: {
		background: '#fafafa',
		primary: '#2e2830',
		secondary: '#ffd951'
	}
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return ( 
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
			
		</>
	);
}

export default MyApp;