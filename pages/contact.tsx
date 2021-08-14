import React, { FC } from 'react';

//Next js
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

//components
import Burger from '../components/burger';
import Copyright from '../components/copyright';

//Images
import location from '/public/location.svg';
import email from '/public/Email.svg';
import skype from '/public/skype.svg';
import close from '/public/close.svg';

//styles
import styles from '../styles/pages/contact.module.scss';

const Contact: FC = () => {
	return (
		<>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<title>Oleksii Shkulipa | Web-Developer | Contact page</title>
				<meta name='description' content="One programmer's website" />
				<meta
					name='keywords'
					content="Oleksii Shkulipa, Oleksii Shkulipa, Алексей Шкулипа, Oleksii Shkulipa website, Oleksii Shkulipa site, site, one programmer's website, one programmers website"
				/>
				<link rel='icon' href='/public/favicon/favicon.ico' />
			</Head>
			<section className={styles.Portfolio__right}>
				<div className={styles.Contact__left}>
					<Burger />
					<h1>
						Co<span>n</span>tact
					</h1>
				</div>

				<div className={styles.Contact__right}>
					{/*Contact__SeyHello*/}
					<div className={styles.Contact__SeyHello}>
						<h1>Sey Hello!</h1>

						<form className={styles.form} method='POST' action='#'>
							<div className={styles.Contact__SeyHello__Name}>
								<input
									name='name_contact'
									id='name_contact'
									placeholder='Your name...*'
									type='text'
								/>
							</div>
							<div
								className={styles.Contact__SeyHello__YourEmail}>
								<input
									name='u_email'
									id='u_email'
									placeholder='Your Email...*'
									type='text'
								/>
							</div>
							<div className={styles.Contact__SeyHello__Message}>
								<textarea
									id='msg_contact'
									name='msg'
									placeholder='Your Message...*'
									maxLength={299}
								/>
							</div>

							<button
								className={
									styles.Contact__SeyHello__SendButton
								}>
								Send
							</button>
						</form>
					</div>

					{/*Contact__Map*/}
					<div className={styles.Contact__Map}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201073.546887858!2d33.73154994045105!3d50.201345899186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41290220fc73a461%3A0xdb74f6366b836c28!2z0KHRg9C80YssINCh0YPQvNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MDAwMA!5e0!3m2!1sru!2sua!4v1589633466029!5m2!1sru!2sua'
							frameBorder='0'
							style={{ border: 0 }}
							allowFullScreen={false}
							aria-hidden={false}
							tabIndex={0}
						/>
					</div>

					{/*Contact__Details*/}
					<div className={styles.Contact__Details}>
						<div className={styles.Contact__Detail__items}>
							<div className={styles.Contact__Details__block}>
								<Image width='24' src={location} alt='' />
								<div
									className={
										styles.Contact__Details__block__content
									}>
									Ukraine, Sumy
								</div>
							</div>

							<div className={styles.Contact__Details__block}>
								<Image width='24' src={email} alt='' />
								<div
									className={
										styles.Contact__Details__block__content
									}>
									Oleksii.Shkulipa@gmail.com
								</div>
							</div>

							<div className={styles.Contact__Details__block}>
								<a
									target='_blank'
									href='Skype:Stronger0075?chat'
									rel='noreferrer'>
									<Image
										width={24}
										height={24}
										src={skype}
										alt=''
									/>
									<div
										className={
											styles.Contact__Details__block__content
										}>
										Skype
									</div>
								</a>
							</div>
						</div>

						<div className={styles.Contact__social}>
							<a
								className={styles.Contact__social__content}
								href='https://www.linkedin.com/in/oleksii-shkulipa'
								target='_blank'
								rel='noreferrer'>
								<div
									className={
										styles.Contact__social__content__icon
									}>
									<i className='fab fa-linkedin-in'></i>
								</div>
							</a>
							<a
								className={styles.Contact__social__content}
								href='https://www.facebook.com/Oleksii.Shkulipa/'
								target='_blank'
								rel='noreferrer'>
								<div
									className={
										styles.Contact__social__content__icon
									}>
									<i className='fab fa-facebook-f'></i>
								</div>
							</a>
							<a
								className={styles.Contact__social__content}
								href='https://instagram.com/'
								target='_blank'
								rel='noreferrer'>
								<div
									className={
										styles.Contact__social__content__icon
									}>
									<i className='fab fa-instagram'></i>
								</div>
							</a>
							<a
								className={styles.Contact__social__content}
								target='_blank'
								href='https://t.me/Shkulipa'
								rel='noreferrer'>
								<div
									className={
										styles.Contact__social__content__icon
									}>
									<i className='fab fa-telegram-plane'></i>
								</div>
							</a>
							<a
								className={styles.Contact__social__content}
								href='https://github.com/Shkulipa'
								target='_blank'
								rel='noreferrer'>
								<div
									className={
										styles.Contact__social__content__icon
									}>
									<i className='fab fa-github'></i>
								</div>
							</a>
						</div>
					</div>

					<Copyright />
				</div>
			</section>
			{/*/Contact*/}

			{/*Форма благодарности*/}
			<div className={styles.overlay}>
				<div className={styles.modal} id='modal'>
					<div className={styles.modal__close} id='modal-close'>
						<Image src={close} width='24' alt='' />
					</div>
					<div className='modal__text' id='modal-text'>
						{/*Some text*/}
					</div>
				</div>
			</div>

			<Script
				src='https://kit.fontawesome.com/35537105f3.js'
				crossOrigin='anonymous'
			/>
		</>
	);
};

export default Contact;
