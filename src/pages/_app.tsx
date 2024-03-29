import React from 'react';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
    
    :root {
      --primary: #ffd951;
      --secondary: #2e2830;
      --white: #ececec;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {    
        background: #fafafa;
        font-family: 'Play', sans-serif
    }    
`;

const theme = {
	colors: {
		background: '#ececec',
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