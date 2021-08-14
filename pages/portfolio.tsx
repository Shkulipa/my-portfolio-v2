import React, { FC, useEffect, useState } from 'react';

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
	const [projectsFiltred, setProjectsFiltred] = useState<project[]>(projects);

	useEffect(() => {
		if (category === catEnum.ALL) {
			setProjectsFiltred(projects);
		} else {
			setProjectsFiltred(
				projects.filter(item => item.category === category)
			);
		}
	}, [category]);

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
							{projectsFiltred.length <= 0 ? (
								<div className={styles.noItems}>
									<div className={styles.noItems__flex}>
										<Image
											width={128}
											height={128}
											className={
												styles.noItems__flex__img
											}
											src={folderOpenSolid}
											alt=''
										/>
										<b>
											Sorry, but there are no projects in
											this category :(
										</b>
									</div>
								</div>
							) : (
								projectsFiltred.map((project, index) => (
									<Project key={index} item={project} />
									// eslint-disable-next-line no-mixed-spaces-and-tabs
								))
							)}
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
