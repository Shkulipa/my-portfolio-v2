import React, { FC, useEffect, useState } from 'react';

import data from './../data/data';

//Next
import Script from 'next/script';
import Head from 'next/head';

//components
import Burger from '../components/burger';
import Project from '../components/project';
import Copyright from '../components/copyright';

//type text animation (https://github.com/jstejada/react-typist#cssBlink)
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

//styles
import styles from '../styles/pages/portfolio.module.scss';

//transition-group
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//animation options
import {
	animateLeftSide,
	animateRightSide,
} from '../styles/animation/animationForSides';

//framer-motion (https://www.npmjs.com/package/framer-motion)
import { motion } from 'framer-motion';

//Typization
import { catEnum } from '../types/categories';
import { portfoliosItem } from '../types/data';

const Portfolio: FC = () => {
	const [category, setCategory] = useState<string>(catEnum.ALL);
	const [projectsFiltred, setProjectsFiltred] =
		useState<portfoliosItem[]>(data.portfolio);

	useEffect(() => {
		if (category === catEnum.ALL) {
			setProjectsFiltred(data.portfolio);
		} else {
			setProjectsFiltred(
				data.portfolio.filter(item => item.category === category)
			);
		}
	}, [category]);

	const categoryHandler = (el): void => {
		setCategory(el);
	};

	return (
		<motion.div
			key='contact-page'
			exit='exit'
			initial='initial'
			animate='animate'
		>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<title>Oleksii Shkulipa | Web-Developer | Resume page</title>
				<meta name='description' content="One programmer's website" />
				<meta
					name='keywords'
					content="Oleksii Shkulipa, Oleksii Shkulipa, Алексей Шкулипа, Oleksii Shkulipa website, Oleksii Shkulipa site, site, one programmer's website, one programmers website"
				/>
				<link rel='icon' href='/public/favicon/favicon.ico' />
			</Head>

			<section className={styles.Portfolio}>
				<motion.div
					key='portfolio__left__side'
					variants={animateLeftSide}
					className={styles.Portfolio__left}
				>
					<Burger />
					<h1>
						<Typist startDelay={500} avgTypingDelay={165}>
							Port<span>f</span>olio
						</Typist>
					</h1>
				</motion.div>

				<motion.div
					key='portfolio__right__side'
					variants={animateRightSide}
					className={styles.Portfolio__right}
				>
					{/*Portfolio__Portfolio*/}
					<div className={styles.Portfolio__Portfolio}>
						<h1>Portfolio</h1>

						<div className={styles.Portfolio__filters}>
							<div
								onClick={() => categoryHandler(catEnum.ALL)}
								className={
									category === catEnum.ALL
										? styles.active
										: null
								}
							>
								All
							</div>
							{[
								...new Set(data.portfolio.map(item => item.category)),
							].map((cat, index) => {
								return (
									<div
										key={index}
										onClick={() => categoryHandler(cat)}
										className={
											category === cat
												? styles.active
												: null
										}
									>
										{cat}
									</div>
								);
							})}
						</div>

						<div className={styles.Portfolio__items}>
							<TransitionGroup>
								{projectsFiltred.map((project, index) => {
									return (
										<CSSTransition
											appear={true}
											key={index}
											timeout={400}
											classNames='project'
										>
											<Project item={project} />
										</CSSTransition>
									);
								})}
							</TransitionGroup>
						</div>
					</div>

					<Copyright />
				</motion.div>
			</section>

			<Script
				src='https://kit.fontawesome.com/35537105f3.js'
				crossOrigin='anonymous'
			/>
		</motion.div>
	);
};

export default Portfolio;
