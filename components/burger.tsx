import React, { FC, useState } from 'react';

//next
import { useRouter } from 'next/router';

//components
import LinkCustom from './link';

//transition
import { CSSTransition } from 'react-transition-group';

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
		<div className='burgerBtn'>
			<div
				className={`burgerBtn__menu ${active ? 'openBurger' : ''}`}
				onClick={clickHandler}
			>
				<div className='burgerBtn__menu__burger' />
				<div className='burgerBtn__menu__title'>
					M<span>e</span>nu
				</div>
			</div>

			<CSSTransition
				in={active}
				timeout={3000}
				classNames='open'
				mountOnEnter={true}
				unmoutOnExit={true}
			>
				<nav className='burgerNav'>
					{pages.map((item, index) => {
						return item.link === router.pathname ? (
							''
						) : (
							<LinkCustom
								key={index}
								className='burgerNav__item'
								href={item.link}
							>
								{item.html}
							</LinkCustom>
						);
					})}
				</nav>
			</CSSTransition>
		</div>
	);
};

export default Burger;
