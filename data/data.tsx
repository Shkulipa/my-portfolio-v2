import React from 'react';

//images
import certificateMindK from './../public/Certificates/mindk-dev-camp.png';
import certificateEnglish from './../public/Certificates/english_sertificate_303x222px.jpg';
import flagEngland from '/public/flags/English.svg';
import flagGermany from '/public/flags/Germany.svg';
import flagPoland from '/public/flags/Poland.svg';
import flagRussia from '/public/flags/Russia.svg';
import flagUkraine from '/public/flags/Ukraine.svg';
import avatar from '/public/my_photo_165px-x-165px.jpg';
import LinkedIn from '/public/LinkedIn.svg';
import facebook from '/public/facebook.svg';
import telegram from '/public/telegram.svg';
import github from '/public/github.svg';
import gmail from '/public/gmail-logo.svg';
import instagram from '/public/instagram.svg';

//projects
import imgSeaBattle from '/public/projects/see-battle.jpg';
import shopMrkt from '/public/projects/shop-mrkt.gif';
import portfolio from '/public/projects/portfolio-old-gulp.gif';

//typization
import { dataValues } from '../types/data';
import { catEnum } from '../types/categories';

const data: dataValues = {
	name: 'Oleksii',
	surname: 'Shkulipa',
	position: 'Web Developer',
	country: 'Ukraine',
	city: 'Sumy',
	postIndex: 40000,
	map: (
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201073.546887858!2d33.73154994045105!3d50.201345899186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41290220fc73a461%3A0xdb74f6366b836c28!2z0KHRg9C80YssINCh0YPQvNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MDAwMA!5e0!3m2!1sru!2sua!4v1589633466029!5m2!1sru!2sua'
			frameBorder={0}
			style={{ border: 0 }}
			allowFullScreen={false}
			tabIndex={0}
		/>
	),
	imgAvatar: avatar,
	email: 'oleksii.shkulipa@gmail.com',

	keywords:
		"Oleksii Shkulipa, Oleksii Shkulipa, Алексей Шкулипа, Oleksii Shkulipa website, Oleksii Shkulipa site, site, one programmer\\'s website, one programmers website",

	work: [
		{
			title: 'One-V',
			href: 'https://www.one-v.co.il/',
			time: 'November 2020 - Present time',
			position: 'Front-end developer',
			description:
				'Making layout of websites, support of existing projects, making edits using HTML, CSS, JS, PHP.',
		},
	],

	education: [
		{
			title: 'Sumy State University',
			href: 'https://sumdu.edu.ua/int/en/',
			time: 'September 2018 - May 2020',
			position: "Masters's degree",
			description:
				'Faculty of Electronics and Information Technology, specialty "Electronic devices and devices."',
		},
		{
			title: 'Sumy State University',
			href: 'https://sumdu.edu.ua/int/en/',
			time: 'September 2014 - May 2018',
			position: "Bachelor's degree",
			description:
				'Faculty of Electronics and Information Technology, specialty "Electronic devices and devices."',
		},
	],

	resume: 'Oleksii_Shkulipa_dev.pdf',

	certificates: [
		{
			title: 'MindK Dev Camp',
			img: certificateMindK,
			alt: 'A MindK Certificate',
			href: 'https://www.mindk.com/certificates/60894751cd52b68996465494/',
		},
		{
			title: 'English language. Intermediate',
			img: certificateEnglish,
			alt: 'A English Certificate',
			href: 'https://geekbrains.ru/certificates/849767.en',
		},
	],

	language: [
		{
			title: 'Intermediate',
			alt: 'Flag of England',
			img: flagEngland,
			lvl: 'B1',
		},
		{
			title: 'Elementary',
			alt: 'Flag of Germany',
			img: flagGermany,
			lvl: 'A1',
		},
		{
			title: 'Elementary',
			alt: 'Flag of Poland',
			img: flagPoland,
			lvl: 'A1',
		},
		{
			title: 'Proficient',
			alt: 'Flag of Russia',
			img: flagRussia,
			lvl: 'C2',
		},
		{
			title: 'Proficient',
			alt: 'Flag of Ukraine',
			img: flagUkraine,
			lvl: 'C2',
		},
	],

	socials: [
		{
			href: 'https://www.linkedin.com/in/oleksii-shkulipa',
			alt: 'LinkedIn',
			imgHomePage: LinkedIn,
			imgContactPage: <i className='fab fa-linkedin-in' />,
		},
		{
			href: 'https://www.facebook.com/Oleksii.Shkulipa/',
			alt: 'Facebook',
			imgHomePage: facebook,
			imgContactPage: <i className='fab fa-facebook-f' />,
		},
		{
			href: 'https://t.me/Shkulipa',
			alt: 'Telegram',
			imgHomePage: telegram,
			imgContactPage: <i className='fab fa-telegram-plane' />,
		},
		{
			href: 'https://github.com/Shkulipa',
			alt: 'Github',
			imgHomePage: github,
			imgContactPage: <i className='fab fa-github' />,
		},
		{
			href: 'mailto:oleksii.Shkulipa@gmail.com',
			alt: 'gmail',
			imgHomePage: gmail,
			imgContactPage: <i className='far fa-envelope' />,
		},
		{
			href: 'https://www.instagram.com/oleksii.shkulipa',
			alt: 'instagram',
			imgHomePage: instagram,
			imgContactPage: <i className='fab fa-instagram' />,
		},
	],

	skills: [
		{
			title: 'Front-end',
			description: [
				'HTML',
				'CSS',
				'SASS',
				'JavaScript',
				'Gulp',
				'React JS',
				'Redux',
				'Material Ui',
				'Bootstrap',
				'TypesScript',
				'Next JS',
			],
		},
		{
			title: 'Back-end',
			description: ['Node JS', 'Express', 'Nest JS', 'PHP'],
		},
		{
			title: 'Database',
			description: ['SQL', 'MongoDB', 'PostgresSQL', 'PhpMyAdmin'],
		},
		{
			title: 'Source control',
			description: ['Git', 'GitHub', 'Bitbucket'],
		},
	],

	portfolio: [
		{
			github: 'https://github.com/Shkulipa/shopp-mrtk',
			category: catEnum.MPERN,
			img: portfolio,
		},
		{
			github: 'https://github.com/Shkulipa/shopp-mrtk',
			category: catEnum.MPERN,
			img: shopMrkt,
		},
		{
			github: 'https://github.com/Shkulipa/See__Battle',
			href: 'https://shkulipa.github.io/See__Battle/',
			category: catEnum.OTHER,
			img: imgSeaBattle,
		},
	],
};

export default data;
