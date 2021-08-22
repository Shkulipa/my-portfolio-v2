import React, { FC, useState } from 'react';

//data
import data from '../data/data';

//Next js
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

//components
import Burger from '../components/burger';
import Copyright from '../components/copyright';

//Utilities
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';

//Images
import location from '/public/location.svg';
import email from '/public/Email.svg';
import skype from '/public/skype.svg';
import close from '/public/close.svg';

//styles
import styles from '../styles/pages/contact.module.scss';

//animation options
import { animateLeftSide, animateRightSide } from '../styles/animation/animationForSides';

//type text animation (https://github.com/jstejada/react-typist#cssBlink)
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { motion } from 'framer-motion';

//Typization
interface initialValues {
	name: string;
	email: string;
	message: string;
}

const Contact: FC = () => {
	const [msgModal, setMsgModal] = useState<string>('');
	const [showModal, setShowModal] = useState<boolean>(false);
	const [errorMsgAfterFetch, setErrorMsgAfterFetch] =
		useState<boolean>(false);

	const initialValues: initialValues = {
		name: '',
		email: '',
		message: '',
	};

	const schema = Yup.object().shape({
		name: Yup.string()
			.min(2, 'Must be 2 characters or More')
			.required('Required'),
		email: Yup.string().email('Invalid email address').required('Required'),
		message: Yup.string()
			.min(2, 'Must be 2 characters or less')
			.max(299, 'Must be 299 characters or less')
			.required('Required'),
	});

	const submitHandler = ({ email, message, name }, action) => {
		// Телеграм отправка сообщения
		// https://core.telegram.org/bots/api#sendmessage
		const requestOptionsPush = {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
				parse_mode: 'HTML',
				text: `
Сайт: Портфолио
Name: ${name}
Email: <a href="mailto:${email}">${email}</a>
Message: ${message}`,
			}),
		};

		try {
			fetch(
				`https://api.telegram.org/${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`,
				requestOptionsPush
			).then(() => {
				setErrorMsgAfterFetch(false);
				setMsgModal('Thank you, message sent!');
				setShowModal(true);
			});
		} catch (e) {
			setMsgModal('Something went wrong, please try again later :(');
			setErrorMsgAfterFetch(true);
			setShowModal(true);
			console.error(e);
		}

		action.resetForm();
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const errorMsg = msg => {
		return <div className={styles.form__error}>{msg}</div>;
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
				<title>{data.name} {data.surname} | {data.position} | Contact page</title>
				<meta name='description' content="One programmer's website" />
				<meta
					name='keywords'
					content={data.keywords}
				/>
				<link rel='icon' href='/public/favicon/favicon.ico' />
			</Head>
			<section className={styles.Portfolio__right}>
				<motion.div key='contact__left__side' variants={animateLeftSide} className={styles.Contact__left}>
					<Burger />
					<h1>
						<Typist startDelay={500} avgTypingDelay={165}>
							Co<span>n</span>tact
						</Typist>
					</h1>
				</motion.div>

				<motion.div key='contact__right__side' variants={animateRightSide} className={styles.Contact__right}>
					{/*Contact__SeyHello*/}
					<div className={styles.Contact__SeyHello}>
						<h1>Sey Hello!</h1>

						<Formik
							initialValues={initialValues}
							validationSchema={schema}
							onSubmit={submitHandler}
						>
							{formik => (
								<form
									className={styles.form}
									onSubmit={formik.handleSubmit}
								>
									<div
										className={
											styles.Contact__SeyHello__Name
										}
									>
										<ErrorMessage name='name'>
											{errorMsg}
										</ErrorMessage>
										<input
											name='name'
											type='text'
											placeholder='Your name...'
											{...formik.getFieldProps('name')}
										/>
									</div>

									<div
										className={
											styles.Contact__SeyHello__YourEmail
										}
									>
										<ErrorMessage name='email'>
											{errorMsg}
										</ErrorMessage>
										<input
											type='email'
											name='email'
											placeholder='Your email...'
											{...formik.getFieldProps('email')}
										/>
									</div>

									<div
										className={
											styles.Contact__SeyHello__Message
										}
									>
										<ErrorMessage name='message'>
											{errorMsg}
										</ErrorMessage>
										<textarea
											id='msg_contact'
											name='msg'
											placeholder='Your Message...'
											maxLength={299}
											{...formik.getFieldProps('message')}
										/>
									</div>

									<button
										className={
											styles.Contact__SeyHello__SendButton
										}
										type='submit'
									>
										Send
									</button>
								</form>
							)}
						</Formik>
					</div>

					{/*Contact__Map*/}
					<div className={styles.Contact__Map}>
						{data.map}
					</div>

					{/*Contact__Details*/}
					<div className={styles.Contact__Details}>
						<div className={styles.Contact__Detail__items}>
							<div className={styles.Contact__Details__block}>
								<Image width='24' src={location} alt='' />
								<div
									className={
										styles.Contact__Details__block__content
									}
								>
									{data.country}, {data.city}, {data.postIndex}
								</div>
							</div>
						</div>

						<div className={styles.Contact__social}>
							{data.socials.map(({imgContactPage, href}, index) => {
								return (
									<a
										key={index}
										className={styles.Contact__social__content}
										href={href}
										target='_blank'
										rel='noreferrer'
									>
										<div
											className={
												styles.Contact__social__content__icon
											}
										>
											{imgContactPage}
										</div>
									</a>
								)
							})}
						</div>
					</div>
					<Copyright />
				</motion.div>
			</section>
			{/*/Contact*/}

			{/*Форма благодарности*/}
			<div
				className={`${styles.overlay} ${
					showModal ? styles.overlayShow : ''
				}`}
			>
				<div
					className={`${styles.modal} ${
						showModal ? styles.modalShow : ''
					}`}
				>
					<div className={styles.modal__close} onClick={closeModal}>
						<Image src={close} width={24} height={24} alt='' />
					</div>
					<div
						className={`${styles.modal__text} ${
							errorMsgAfterFetch
								? styles.errorText
								: styles.successText
						}`}
					>
						{msgModal}
					</div>
				</div>
			</div>

			<Script
				src='https://kit.fontawesome.com/35537105f3.js'
				crossOrigin='anonymous'
			/>
		</motion.div>
	);
};

export default Contact;
