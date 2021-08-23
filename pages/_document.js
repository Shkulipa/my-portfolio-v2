import React from 'react';

//components
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,700i&display=swap'
						rel='stylesheet'
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
