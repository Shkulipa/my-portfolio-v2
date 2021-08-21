import React, { FC, useEffect } from 'react';

//type text animation (https://github.com/jstejada/react-typist#cssBlink)
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

//Next
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

//components
import LinkCustom from '../components/link';

//framer-motion (https://www.npmjs.com/package/framer-motion)
import { motion } from 'framer-motion';

//animation options
import { animateLeftSide, animateRightSide } from '../styles/animation/animationForSides';

//Images
import avatar from '/public/my_photo_165px-x-165px.jpg';
import LinkedIn from '/public/LinkedIn.svg';
import facebook from '/public/facebook.svg';
import telegram from '/public/telegram.svg';
import resumeIcon from '/public/curriculum-vitae-for-resume-with-border-01.svg';
import portfolioIcon from '/public/portfolio-with-border-01.svg';
import contactIcon from '/public/email-with-border-01.svg';
import paper from '/public/paper-with-border-01.svg';
import magnifier from '/public/magnifier-01.svg';
import lastEmail from '/public/last-email-with-border-01.svg';

//styles
import styles from '../styles/pages/home.module.scss';

const Index: FC = () => {
	return (
		<motion.div
			key='home-page'
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
				<title>Oleksii Shkulipa | Web-Developer | Home page</title>
				<meta name='description' content="One programmer's website" />
				<meta
					name='keywords'
					content="Oleksii Shkulipa, Oleksii Shkulipa, Алексей Шкулипа, Oleksii Shkulipa website, Oleksii Shkulipa site, site, one programmer's website, one programmers website"
				/>
				<link rel='icon' href='/public/favicon/favicon.ico' />
			</Head>
			<section className={styles.Homepage}>
				<motion.div key='Homepage__left__side' variants={animateLeftSide} className={styles.Homepage__left__side}>
					<div className={styles.Homepage__left__side__content}>
						<Image
							className={styles.Homepage__left__side__photo}
							src={avatar}
							alt='Oleksii Shkulipa'
						/>
						<h1>
							<Typist startDelay={500} avgTypingDelay={165}>
								hello
								<br /> i&apos;m <span>Oleksii</span>{' '}
								Shkulipa
							</Typist>
						</h1>
						<h2>web-developer</h2>

						<div className={styles.social}>
							<a
								target='_blank'
								href='https://www.linkedin.com/in/oleksii-shkulipa'
								rel='noreferrer'
							>
								<Image
									src={LinkedIn}
									width={24}
									height={24}
									alt='LinkedIn'
									layout='fixed'
								/>
							</a>
							<a
								target='_blank'
								href='https://www.facebook.com/Oleksii.Shkulipa/'
								rel='noreferrer'
							>
								<Image
									src={facebook}
									width={24}
									height={24}
									alt='facebook'
									layout='fixed'
								/>
							</a>
							<a
								target='_blank'
								href='https://t.me/Shkulipa'
								rel='noreferrer'
							>
								<Image
									src={telegram}
									width={24}
									height={24}
									alt='telegram'
									layout='fixed'
								/>
							</a>
							<a
								target='_blank'
								href='https://github.com/Shkulipa'
								rel='noreferrer'
							>
								<i className='fab fa-github' />
							</a>
						</div>
					</div>
				</motion.div>

				<motion.div key='Homepage__right__side' variants={animateRightSide} className={styles.Homepage__right__side}>
					{/*Resume*/}
					<LinkCustom
						className={styles.Homepage__right__side__coll}
						href='/resume'
					>
						<div
							className={styles.Homepage__right__side__photo}
						>
							<div
								className={`${styles.Homepage__right__side__bgForPhoto} ${styles.resumeBlock}`}
							>
								<Image
									src={resumeIcon}
									width={62}
									height={62}
									alt='Resume'
									layout='fixed'
									className={
										styles.Homepage__right__side__bgForPhoto__ResumePhotoMain
									}
								/>

								<Image
									src={magnifier}
									width={54}
									height={54}
									alt='Resume'
									layout='fixed'
									className={
										styles.Homepage__right__side__bgForPhoto__ResumePhotoMain
									}
								/>
							</div>
						</div>

						<div
							className={
								styles.Homepage__right__side__content
							}
						>
							<div
								className={
									styles.Homepage__right__sidetitle
								}
							>
								re<span>s</span>ume
							</div>
							<div
								className={
									styles.Homepage__right__sidesubtitle
								}
							>
								Something about my experience and skills
							</div>
						</div>
					</LinkCustom>
					{/*Portfolio*/}
					<LinkCustom
						className={styles.Homepage__right__side__coll}
						href='/portfolio'
					>
						<div
							className={styles.Homepage__right__side__photo}
						>
							<div
								className={`${styles.Homepage__right__side__bgForPhoto} ${styles.portfolioBlock}`}
							>
								<Image
									src={portfolioIcon}
									width={49}
									height={49}
									alt='Portfolio'
									layout='fixed'
								/>
								<Image
									src={paper}
									width={54}
									height={54}
									alt='Resume'
									layout='fixed'
									className={
										styles.Homepage__right__side__bgForPhoto__leftImg
									}
								/>
								<Image
									src={paper}
									width={54}
									height={54}
									alt='Resume'
									layout='fixed'
									className={
										styles.Homepage__right__side__bgForPhoto__leftImg
									}
								/>
								<Image
									src={paper}
									width={54}
									height={54}
									alt='Resume'
									layout='fixed'
									className={
										styles.Homepage__right__side__bgForPhoto__leftImg
									}
								/>
								<Image
									src={paper}
									width={54}
									height={54}
									alt='Resume'
									layout='fixed'
									className={
										styles.Homepage__right__side__bgForPhoto__leftImg
									}
								/>
							</div>
						</div>
						<div
							className={
								styles.Homepage__right__side__content
							}
						>
							<div
								className={
									styles.Homepage__right__sidetitle
								}
							>
								port<span>f</span>olio
							</div>
							<div
								className={
									styles.Homepage__right__sidesubtitle
								}
							>
								Have a look at my works
							</div>
						</div>
					</LinkCustom>
					{/*Contact*/}
					<LinkCustom
						className={styles.Homepage__right__side__coll}
						href='/contact'
					>
						<div
							className={styles.Homepage__right__side__photo}
						>
							<div
								className={`${styles.Homepage__right__side__bgForPhoto} ${styles.contactBlock}`}
							>
								<Image
									src={contactIcon}
									width={51}
									height={51}
									alt='Contact'
									layout='fixed'
								/>
								<Image
									src={contactIcon}
									width={51}
									height={51}
									alt='Contact'
									layout='fixed'
								/>
								<Image
									src={contactIcon}
									width={51}
									height={51}
									alt='Contact'
									layout='fixed'
								/>
								<Image
									src={lastEmail}
									width={51}
									height={51}
									alt='Contact'
									layout='fixed'
								/>
							</div>
						</div>
						<div
							className={
								styles.Homepage__right__side__content
							}
						>
							<div
								className={
									styles.Homepage__right__sidetitle
								}
							>
								co<span>n</span>tact
							</div>
							<div
								className={
									styles.Homepage__right__sidesubtitle
								}
							>
								Say hello or find me
							</div>
						</div>
					</LinkCustom>
				</motion.div>
			</section>


			<Script
				src='https://kit.fontawesome.com/35537105f3.js'
				crossOrigin='anonymous'
			/>
		</motion.div>
	);
};

export default Index;
