import React, { FC, useState } from 'react';

//next
import { useRouter } from 'next/router';

//components
import LinkCustom from './link';

//styles
import styles from '../styles/pages/resume.module.scss';

//Array of Pages
const pages: page[] = [
	{
		html: (
			<>
				H<span>o</span>me
			</>
		),
		link: '/',
	},
	{
		html: (
			<>
				Re<span>s</span>ume
			</>
		),
		link: '/resume',
	},
	{
		html: (
			<>
				Port<span>f</span>olio
			</>
		),
		link: '/portfolio',
	},
	{
		html: (
			<>
				Co<span>n</span>tact
			</>
		),
		link: '/contact',
	},
];

//Typization
interface page {
	html: React.ReactChild | React.ReactNode;
	link: string;
}

const Burger: FC = () => {
	const router = useRouter();
	const [active, setActive] = useState<boolean>(false);

	const clickHandler = (): void => {
		setActive(prevState => !prevState);
	};

	return (
		<div className={styles.burgerBtn}>
			<div
				className={`${styles.burgerBtn__menu} ${
					active ? styles.openBurger : ''
				}`}
				onClick={clickHandler}>
				<div className={styles.burgerBtn__menu__burger} />
				<div className={styles.burgerBtn__menu__title}>
					M<span>e</span>nu
				</div>
			</div>

			<nav className={`${styles.burgerNav} ${active ? styles.open : ''}`}>
				{pages.map((item, index) => {
					return item.link === router.pathname ? (
						''
					) : (
						<LinkCustom
							key={index}
							className={styles.burgerNav__item}
							href={item.link}>
							{item.html}
						</LinkCustom>
					);
				})}
			</nav>
		</div>
	);
};

export default Burger;
