import React, { FC } from 'react';

//next
import Image from 'next/image';

//styles
import styles from '../styles/pages/portfolio.module.scss';

//Typization
import { project } from '../types/project';
interface ProjectProps {
	item: project;
}

const Project: FC<ProjectProps> = (item, ...props) => {
	return (
		<div className={styles.Portfolio__items__block} {...props}>
			<div className={styles.Portfolio__items__block__photo}>
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/*// @ts-ignore*/}
				<Image src={item.item.cover} alt='' />
			</div>
			<div className={styles.Portfolio__items__block__content}>
				<a href={item.item.github} target='_blank' rel='noreferrer'>
					<i className='fab fa-github'></i>
				</a>
				{item.item.www ? (
					<a href={item.item.www} target='_blank' rel='noreferrer'>
						<i className='fas fa-link'></i>
					</a>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Project;
