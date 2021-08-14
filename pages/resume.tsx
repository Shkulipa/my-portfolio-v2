import React, { FC } from 'react';

//Next
import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';

//components
import Burger from '../components/burger';
import Copyright from '../components/copyright';

//Images
import photoForSkills from '/public/Photo__for__skills.svg';
import certificateMindK from '/public/Certificates/mindk-dev-camp.png';
import certificateEnglish from '/public/Certificates/english_sertificate_303x222px.jpg';
import flagEngland from '/public/flags/English.svg';
import flagGermany from '/public/flags/Germany.svg';
import flagPoland from '/public/flags/Poland.svg';
import flagRussia from '/public/flags/Russia.svg';
import flagUkraine from '/public/flags/Ukraine.svg';
import iconDownload from '/public/cloud-storage-download.svg';
import iconCurriculum from '/public/curriculum-vitae-for-resume.svg';

//styles
import styles from '../styles/pages/resume.module.scss';

const Resume: FC = () => {
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

			<section className={styles.Resume}>
				<div className={styles.Resume__left}>
					<Burger />

					<h1>
						Re<span>s</span>ume
					</h1>
				</div>
				<div className={styles.Resume__right}>
					{/*Resume__skills*/}
					<div className={styles.Resume__skills}>
						<h1>Skills</h1>
						<div className={styles.Resume__skills__items}>
							<div className={styles.Resume__skills__photo}>
								<Image src={photoForSkills} alt='Skill' />
							</div>

							<div
								className={
									styles.Resume__skills__progress__bar
								}>
								<div
									className={
										styles.Resume__skills__progress__item
									}>
									<div style={{ width: '90%' }}>
										<h1>HTML</h1>
									</div>
								</div>

								<div
									className={
										styles.Resume__skills__progress__item
									}>
									<div style={{ width: '86%' }}>
										<h1>CSS</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*/Resume__skills*/}

					{/*Resume__certificates*/}
					<div className={styles.Resume__Certificates}>
						<h1>Certificates</h1>

						<div className={styles.Resume__Certificates__items}>
							<a
								href='https://www.mindk.com/certificates/60894751cd52b68996465494/'
								target='_blank'
								className={styles.Resume__Certificates__block}
								rel='noreferrer'>
								<div className={styles.Resume__photo}>
									<Image
										src={certificateMindK}
										alt='A MindK Certificate'
									/>
								</div>
								<div
									className={
										styles.Resume__Certificates__title
									}>
									MindK Dev Camp
								</div>
							</a>

							<a
								href='https://geekbrains.ru/certificates/849767.en'
								target='_blank'
								className={styles.Resume__Certificates__block}
								rel='noreferrer'>
								<div className={styles.Resume__photo}>
									<Image
										src={certificateEnglish}
										alt='A English Certificate'
									/>
								</div>
								<div
									className={
										styles.Resume__Certificates__title
									}>
									English language. Intermediate
								</div>
							</a>
						</div>
					</div>

					{/*Resume__right__Education*/}
					<div className={styles.Resume__right__Education}>
						<h1>Work Expirence</h1>

						<div className={styles.Resume__item}>
							<div className={styles.Resume__title}>
								<div className={styles.Resume__circle} />
								<h2>
									<a
										href='https://www.one-v.co.il/'
										target='_blank'
										rel='noreferrer'>
										One-V
									</a>{' '}
									/ November 2020 - present time / front-end
									developer
								</h2>
							</div>
							<p>
								Layout and design of websites, support of
								existing projects, making edits using HTML, CSS,
								JS, PHP.
							</p>
						</div>

						<h1>Education</h1>

						<div className={styles.Resume__item}>
							<div className={styles.Resume__title}>
								<div className={styles.Resume__circle} />
								<h2>
									<a
										href='https://sumdu.edu.ua/int/en/'
										target='_blank'
										rel='noreferrer'>
										Sumy State University
									</a>
									/ September 2018 - May 2020 / Masters&apos;s
									degree
								</h2>
							</div>
							<p>
								Faculty of Electronics and Information
								Technology, specialty &quot;Electronic devices
								and devices.&quot;
							</p>
						</div>

						<div className={styles.Resume__item}>
							<div className={styles.Resume__title}>
								<div className={styles.Resume__circle} />
								<h2>
									<a
										href='https://sumdu.edu.ua/int/en/'
										target='_blank'
										rel='noreferrer'>
										Sumy State University
									</a>
									/ September 2014 - May 2018 /
									bachelor&apos;s degree
								</h2>
							</div>
							<p>
								Faculty of Electronics and Information
								Technology, specialty &quot;Electronic devices
								and devices.&quot;
							</p>
						</div>
					</div>
					{/*/Resume__right__Education*/}

					{/*Resume__language*/}
					<div className={styles.Resume__language}>
						<h1>Languages spoken</h1>

						<div className={styles.Resume__language__items}>
							<div className={styles.Resume__language__block}>
								<Image
									className={styles.languageHoverImg}
									src={flagEngland}
									alt='Flag of England'
								/>
								<div className={styles.Resume__language__lvl}>
									B1
								</div>
								<div
									className={
										styles.Resume__language__lvl__Word
									}>
									Intermediate
								</div>
							</div>

							<div className={styles.Resume__language__block}>
								<Image
									className={styles.languageHoverImg}
									src={flagGermany}
									alt='Flag of Germany'
								/>
								<div className={styles.Resume__language__lvl}>
									A1
								</div>
								<div
									className={
										styles.Resume__language__lvl__Word
									}>
									Elementary
								</div>
							</div>

							<div className={styles.Resume__language__block}>
								<Image
									className={styles.languageHoverImg}
									src={flagPoland}
									alt='Flag of Poland'
								/>
								<div className={styles.Resume__language__lvl}>
									A1
								</div>
								<div
									className={
										styles.Resume__language__lvl__Word
									}>
									Elementary
								</div>
							</div>

							<div className={styles.Resume__language__block}>
								<Image
									className={styles.languageHoverImg}
									src={flagRussia}
									alt='Flag of Russia'
								/>
								<div className={styles.Resume__language__lvl}>
									C2
								</div>
								<div
									className={
										styles.Resume__language__lvl__Word
									}>
									Proficient
								</div>
							</div>

							<div className={styles.Resume__language__block}>
								<Image
									className={styles.languageHoverImg}
									src={flagUkraine}
									alt='Flag of Ukraine'
								/>
								<div className={styles.Resume__language__lvl}>
									C2
								</div>
								<div
									className={
										styles.Resume__language__lvl__Word
									}>
									Proficient
								</div>
							</div>
						</div>
					</div>
					{/*/Resume__language*/}

					{/*Resume download*/}
					<div
						className={`${styles.SectionBlock} ${styles.invertCls}`}>
						<h1>Download my resume?</h1>

						<div className={styles.ResumeDownload}>
							<div className={styles.resumeImgDownload}>
								<Image src={iconDownload} alt='Download Icon' />
							</div>

							<a
								className={styles.ResumeDownload__button}
								download
								href='/files/Oleksii_Shkulipa_dev.pdf'>
								<div
									className={
										styles.ResumeDownload__button__text
									}>
									Download
								</div>
								<Image src={iconCurriculum} alt='' />
							</a>
						</div>
					</div>

					<Copyright />
				</div>
				{/*/Resume*/}
			</section>

			<Script
				src='https://kit.fontawesome.com/35537105f3.js'
				crossOrigin='anonymous'
			/>
		</>
	);
};

export default Resume;
