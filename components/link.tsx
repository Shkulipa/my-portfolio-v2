import NextLink from 'next/link';
import React, { FC } from 'react';

//Typescript
interface LinkCustomProps {
	className: string;
	href: string;
	children: React.ReactNode | React.ReactChild;
}
const LinkCustom: FC<LinkCustomProps> = ({ href, children, ...props }) => {
	return (
		<NextLink href={href}>
			<a {...props}>{children}</a>
		</NextLink>
	);
};

export default LinkCustom;
