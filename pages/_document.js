import React from 'react';

//components
import Document, { Html, Head, Main, NextScript } from 'next/document';

//google analytic
import { GA_TRACKING_ID } from '../google-analytics/gtag';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,700i&display=swap'
						rel='stylesheet'
					/>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
