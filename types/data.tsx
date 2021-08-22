import React from 'react';

interface workEducationItem {
	title: string;
	href: string;
	time: string;
	position: string;
	description: string;
}
interface certificatesItem {
	title: string;
	img: React.HTMLProps<HTMLImageElement>;
	alt: string;
	href: string;
}
interface languageItem {
	title: string;
	alt: string;
	img: React.HTMLProps<HTMLImageElement>;
	lvl: string;

}
interface socialsItem {
	href: string;
	alt: string;
	imgHomePage: React.HTMLProps<HTMLImageElement>;
	imgContactPage: React.HTMLProps<HTMLElement>;
}
interface skillsItem {
	title: string;
	description: string[];
}
interface portfoliosItem {
	category: string;
	img: React.HTMLProps<HTMLImageElement>;
	github: string;
	domain: string;
}

interface dataValues {
	name: string;
	surname: string;
	position: string;
	country: string;
	city: string;
	postIndex: number;
	map: React.HTMLProps<HTMLIFrameElement>;
	imgAvatar: React.HTMLProps<HTMLImageElement>;
	email: string;
	keywords: string;
	work: workEducationItem[];
	education: workEducationItem[];
	resume: string;
	certificates: certificatesItem[];
	language: languageItem[];
	socials: socialsItem[];
	skills: skillsItem[];
	portfolio: portfoliosItem[];
}

export default dataValues;
