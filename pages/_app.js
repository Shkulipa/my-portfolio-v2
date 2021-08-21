import React  from 'react';

//styles
import '../styles/globals.scss';
import '../styles/library/Typist/rewrote-style.scss';

//styles fo burger
import '../styles/blocks/_style-burger.scss';

//framer-motion (https://www.npmjs.com/package/framer-motion)
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} />;
		</AnimatePresence>
	);
}

export default MyApp;
