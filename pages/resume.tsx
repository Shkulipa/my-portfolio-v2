import React, { FC } from 'react';

//data
import data from '../data/data';

//Next
import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';

//components
import Burger from '../components/burger';
import Copyright from '../components/copyright';

//framer-motion (https://www.npmjs.com/package/framer-motion)
import { motion } from 'framer-motion';

//animation options
import { animateLeftSide, animateRightSide } from '../styles/animation/animationForSides';

//react-reveal (https://www.react-reveal.com/examples/common/)
import Fade from 'react-reveal/Fade';

//Images
import photoForSkills from '/public/Photo__for__skills.svg';
import flagEngland from '/public/flags/English.svg';
import flagGermany from '/public/flags/Germany.svg';
import flagPoland from '/public/flags/Poland.svg';
import flagRussia from '/public/flags/Russia.svg';
import flagUkraine from '/public/flags/Ukraine.svg';
import iconDownload from '/public/cloud-storage-download.svg';
import iconCurriculum from '/public/curriculum-vitae-for-resume.svg';

//styles
import styles from '../styles/pages/resume.module.scss';

//type text animation (https://github.com/jstejada/react-typist#cssBlink)
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const Resume: FC = () => {
	return (
		<motion.div
			key='resume-page'
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
				<title>{data.name} {data.surname} | {data.position} | Resume page</title>
				<meta name='description' content="One programmer's website" />
				<meta
					name='keywords'
					content={data.keywords}
				/>
				<link rel='icon' href='/public/favicon/favicon.ico' />
			</Head>

			<section className={styles.Resume}>
				<motion.div key='Resume__left' variants={animateLeftSide} className={styles.Resume__left}>
					<Burger />

					<h1>
						<Typist startDelay={500} avgTypingDelay={165}>
							Re<span>s</span>ume
						</Typist>
					</h1>
				</motion.div>
				<motion.div key='Resume__right' variants={animateRightSide}  className={styles.Resume__right}>
					{/*Resume__skills*/}
					<div className={styles.Resume__skills}>
						<h1>Skills</h1>
						<div className={styles.Resume__skills__items}>
							<div className={styles.Resume__skills__photo}>
								<Image src={photoForSkills} alt='Skill' />
							</div>

							<div
								className={styles.Resume__skills__progress__bar}
							>
								{data.skills.map(({title, description}, index1) =>
									<Fade key={index1} bottom delay={index1 * 150}>
										<div
											className={
												styles.Resume__skills__progress__itemBlock
											}
										>
											<h3>
												<Fade bottom cascade ssrFadeout delay={index1 * 250}>
													{title}
												</Fade>
											</h3>
											<ul>
												{description.map((item, index2) =>
													<li key={index2}>
														<Fade bottom cascade ssrFadeout delay={index2 * 175}>
															{item}
														</Fade>
													</li>
												)}
											</ul>
										</div>
									</Fade>
								)}

							</div>
						</div>
					</div>
					{/*/Resume__skills*/}

					{/*Resume__certificates*/}
					<div className={styles.Resume__Certificates}>
						<h1>Certificates</h1>

						<div className={styles.Resume__Certificates__items}>
							{data.certificates.map(({title, img, href, alt}, index) => {
								return (
									<a
										key={index}
										href={href}
										target='_blank'
										className={styles.Resume__Certificates__block}
										rel='noreferrer'
									>
										<div className={styles.Resume__photo}>
											<Image
												src={img}
												alt={alt}
											/>
										</div>
										<div
											className={
												styles.Resume__Certificates__title
											}
										>
											{title}
										</div>
									</a>
								)
							})}
						</div>
					</div>

					{/*Resume__right__Education*/}
					<div className={styles.Resume__right__Education}>
						<h1>Work Experience</h1>

						{data.work.map(({title, href, time, position, description}, index) => {
							return (
								<div className={styles.Resume__item}>
									<div className={styles.Resume__title}>
										<div className={styles.Resume__circle} />
										<h2>
											<a
												href={href}
												target='_blank'
												rel='noreferrer'
											>
												{title}
											</a>{' '}
											/ {time} / {position}
										</h2>
									</div>
									<p>{description}</p>
								</div>
							)
						})}


						<h1>Education</h1>

						{data.education.map(({title, href, time, position, description}, index) => {
							return (
								<div className={styles.Resume__item}>
									<div className={styles.Resume__title}>
										<div className={styles.Resume__circle} />
										<h2>
											<a
												href={href}
												target='_blank'
												rel='noreferrer'
											>
												{title}
											</a>{' '}
											/ {time} / {position}
										</h2>
									</div>
									<p>{description}</p>
								</div>
							)
						})}
					</div>
					{/*/Resume__right__Education*/}

					{/*Resume__language*/}
					<div className={styles.Resume__language}>
						<h1>Languages spoken</h1>

						<div className={styles.Resume__language__items}>
							{data.language.map(({title, alt, img, lvl}, index) => {
								return (
									<div key={index} className={styles.Resume__language__block}>
										<Image
											className={styles.languageHoverImg}
											src={img}
											alt={alt}
											width={120}
											height={120}
											layout='fixed'
										/>
										<div className={styles.Resume__language__lvl}>
											{lvl}
										</div>
										<div
											className={
												styles.Resume__language__lvl__Word
											}
										>
											{title}
										</div>
									</div>
								)
							})}
						</div>
					</div>
					{/*/Resume__language*/}

					{/*Resume download*/}
					<div
						className={`${styles.SectionBlock} ${styles.invertCls}`}
					>
						<h1>Download my resume?</h1>

						<div className={styles.ResumeDownload}>
							<div className={styles.resumeImgDownload}>
								<Image src={iconDownload} alt='Download Icon' />
							</div>

							<a
								className={styles.ResumeDownload__button}
								download
								href={`/files/${data.resume}`}
							>
								<div
									className={
										styles.ResumeDownload__button__text
									}
								>
									Download
								</div>
								<Image src={iconCurriculum} alt='' />
							</a>
						</div>
					</div>

					<Copyright />
				</motion.div>
				{/*/Resume*/}
			</section>

			<Script
				src='https://kit.fontawesome.com/35537105f3.js'
				crossOrigin='anonymous'
			/>
		</motion.div>
	);
};

export default Resume;
