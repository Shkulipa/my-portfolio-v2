import React from 'react';

//styles
import '../styles/globals.scss';
import '../styles/library/Typist/rewrote-style.scss';

//styles fo burger
import '../styles/blocks/_style-burger.scss';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
