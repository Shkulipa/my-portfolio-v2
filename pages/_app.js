import React, { useEffect } from 'react';

//next js
import { useRouter } from 'next/router';

//google analytic
import * as gtag from '../google-analytics/gtag';

//styles
import '../styles/globals.scss';
import '../styles/library/Typist/rewrote-style.scss';

//styles fo burger
import '../styles/blocks/_style-burger.scss';

//framer-motion (https://www.npmjs.com/package/framer-motion)
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = url => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} />;
		</AnimatePresence>
	);
}

export default MyApp;
