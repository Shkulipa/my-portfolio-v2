import React, { FC } from 'react';

//Next
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

//components
import LinkCustom from '../components/link';

//Images
import avatar from '/public/my_photo_165px-x-165px.jpg';
import LinkedIn from '/public/LinkedIn.svg';
import facebook from '/public/facebook.svg';
import telegram from '/public/telegram.svg';
import resumeIcon from '/public/curriculum-vitae.svg';
import portfolioIcon from '/public/portfolio.svg';
import contactIcon from '/public/contact.svg';

//styles
import styles from '../styles/pages/home.module.scss';

const Index: FC = () => {
	return (
		<>
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
				<div className={styles.Homepage__left__side}>
					<div className={styles.Homepage__left__side__content}>
						<Image
							className={styles.Homepage__left__side__photo}
							src={avatar}
							alt='Oleksii Shkulipa'
						/>
						<h1>
							hello
							<br /> i&apos;m <span>Oleksii</span> Shkulipa
						</h1>
						<h2>web-developer</h2>

						<div className={styles.social}>
							<a
								target='_blank'
								href='https://www.linkedin.com/in/oleksii-shkulipa'
								rel='noreferrer'>
								<Image
									src={LinkedIn}
									width='24'
									alt='LinkedIn'
								/>
							</a>
							<a
								target='_blank'
								href='https://www.facebook.com/Oleksii.Shkulipa/'
								rel='noreferrer'>
								<Image
									src={facebook}
									width='24'
									alt='facebook'
								/>
							</a>
							<a
								target='_blank'
								href='https://t.me/Shkulipa'
								rel='noreferrer'>
								<Image
									src={telegram}
									width='24'
									alt='telegram'
								/>
							</a>
							<a
								target='_blank'
								href='https://github.com/Shkulipa'
								rel='noreferrer'>
								<i className='fab fa-github'></i>
							</a>
						</div>
					</div>
				</div>

				<div className={styles.Homepage__right__side}>
					{/*Resume*/}
					<LinkCustom
						className={styles.Homepage__right__side__coll}
						href='/resume'>
						<div className={styles.Homepage__right__side__photo}>
							<div
								className={
									styles.Homepage__right__side__bgForPhoto
								}>
								<Image
									src={resumeIcon}
									width={54}
									height={54}
									alt='Resume'
								/>
							</div>
						</div>

						<div className={styles.Homepage__right__side__content}>
							<div className={styles.Homepage__right__sidetitle}>
								re<span>s</span>ume
							</div>
							<div
								className={
									styles.Homepage__right__sidesubtitle
								}>
								Something about my experience and skills
							</div>
						</div>
					</LinkCustom>
					{/*Portfolio*/}
					<LinkCustom
						className={styles.Homepage__right__side__coll}
						href='/portfolio'>
						<div className={styles.Homepage__right__side__photo}>
							<div
								className={
									styles.Homepage__right__side__bgForPhoto
								}>
								<Image
									src={portfolioIcon}
									width={46}
									alt='Portfolio'
								/>
							</div>
						</div>
						<div className={styles.Homepage__right__side__content}>
							<div className={styles.Homepage__right__sidetitle}>
								port<span>f</span>olio
							</div>
							<div
								className={
									styles.Homepage__right__sidesubtitle
								}>
								Have a look at my works
							</div>
						</div>
					</LinkCustom>
					{/*Contact*/}
					<LinkCustom
						className={styles.Homepage__right__side__coll}
						href='/contact'>
						<div className={styles.Homepage__right__side__photo}>
							<div
								className={
									styles.Homepage__right__side__bgForPhoto
								}>
								<Image
									src={contactIcon}
									width={48}
									alt='Contact'
								/>
							</div>
						</div>
						<div className={styles.Homepage__right__side__content}>
							<div className={styles.Homepage__right__sidetitle}>
								co<span>n</span>tact
							</div>
							<div
								className={
									styles.Homepage__right__sidesubtitle
								}>
								Say hello or find me
							</div>
						</div>
					</LinkCustom>
				</div>
			</section>

			<Script
				src='https://kit.fontawesome.com/35537105f3.js'
				crossOrigin='anonymous'
			/>
		</>
	);
};

export default Index;
