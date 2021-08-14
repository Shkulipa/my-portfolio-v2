import React, { FC, useState } from 'react';

//Next
import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';

//components
import Burger from '../components/burger';
import Project from '../components/project';
import Copyright from '../components/copyright';

//images
import folderOpenSolid from '/public/folder-open-solid.svg';

//styles
import styles from '../styles/pages/portfolio.module.scss';

//Typization
import { project } from '../types/project';
import { catEnum } from '../types/categories';

//Arrays map
const categories: string[] = [catEnum.ALL, catEnum.WEBSITES, catEnum.OTHER];

const projects: project[] = [
	{
		www: 'https://shkulipa.github.io/Mini/',
		github: 'https://github.com/Shkulipa/Mini',
		category: catEnum.WEBSITES,
		cover: require(`/public/projects/gif.gif`),
	},
];

const Portfolio: FC = () => {
	const [category, setCategory] = useState<string>(catEnum.ALL);
	const categoryHandler = (el): void => {
		setCategory(el);
	};

	return (
		<>
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
				<div className={styles.Portfolio__left}>
					<Burger />
					<h1>
						Port<span>f</span>olio
					</h1>
				</div>

				<div className={styles.Portfolio__right}>
					{/*Portfolio__Portfolio*/}
					<div className={styles.Portfolio__Portfolio}>
						<h1>Portfolio</h1>

						<div className={styles.Portfolio__filters}>
							{categories.map((cat, index) => {
								return (
									<div
										key={index}
										onClick={() => categoryHandler(cat)}
										className={
											category === cat
												? styles.active
												: null
										}>
										{cat}
									</div>
								);
							})}
						</div>

						<div className={styles.Portfolio__items}>
							{catEnum.ALL === category
								? projects.map((project, index) => (
										<Project key={index} item={project} />
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  ))
								: projects.map((project, index2) => {
										return category === project.category ? (
											<Project
												key={index2}
												item={project}
											/>
										) : (
											''
										);
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  })}
							{/*<div*/}
							{/*	className={styles.Portfolio__items__block}*/}
							{/*	data-cat='Websites'>*/}
							{/*	<div*/}
							{/*		className={*/}
							{/*			styles.Portfolio__items__block__photo*/}
							{/*		}>*/}
							{/*		<Image src={websiteMini} alt='' />*/}
							{/*	</div>*/}
							{/*	<div*/}
							{/*		className={*/}
							{/*			styles.Portfolio__items__block__content*/}
							{/*		}>*/}
							{/*		<a*/}
							{/*			href='https://github.com/Shkulipa/Mini'*/}
							{/*			target='_blank'*/}
							{/*			rel='noreferrer'>*/}
							{/*			<i className='fab fa-github'></i>*/}
							{/*		</a>*/}
							{/*		<a*/}
							{/*			href='https://shkulipa.github.io/Mini/'*/}
							{/*			target='_blank'*/}
							{/*			rel='noreferrer'>*/}
							{/*			<i className='fas fa-link'></i>*/}
							{/*		</a>*/}
							{/*	</div>*/}
							{/*</div>*/}
							{/*<div className="Portfolio__items__block" data-cat="Websites">*/}
							{/*	<div className="Portfolio__items__block__photo">*/}
							{/*		<img src="./../../img//projects/gif.gif" alt="">*/}
							{/*	</div>*/}
							{/*	<div className="Portfolio__items__block__content">*/}
							{/*		<a href="https://github.com/Shkulipa/Mini" target="_blank"><i*/}
							{/*			className="fab fa-github"></i></a>*/}
							{/*		<a href="https://shkulipa.github.io/Mini/" target="_blank"><i*/}
							{/*			className="fas fa-link"></i></a>*/}
							{/*	</div>*/}
							{/*</div>*/}
						</div>
						<div className={styles.noItems}>
							<div className={styles.noItems__flex}>
								<Image
									className={styles.noItems__flex__img}
									src={folderOpenSolid}
									alt=''
								/>
								<b>
									Sorry, but there are no projects in this
									category :(
								</b>
							</div>
						</div>
					</div>

					<Copyright />
				</div>
			</section>

			<Script
				src='https://kit.fontawesome.com/35537105f3.js'
				crossOrigin='anonymous'
			/>
		</>
	);
};

export default Portfolio;
