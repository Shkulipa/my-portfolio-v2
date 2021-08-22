import React, { FC } from 'react';

//next
import Image from 'next/image';

//styles
import styles from '../styles/pages/portfolio.module.scss';

//Typization
import { portfoliosItem } from '../types/data';
interface ProjectProps {
	item: portfoliosItem;
}

const Project: FC<ProjectProps> = item => {
	return (
		<div className={styles.Portfolio__items__block}>
			<div className={styles.Portfolio__items__block__photo}>
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/*// @ts-ignore*/}
				<Image src={item.item.img} alt='' />
			</div>
			<div className={styles.Portfolio__items__block__content}>
				<a href={item.item.github} target='_blank' rel='noreferrer'>
					<i className='fab fa-github'></i>
				</a>
				{item.item.href ? (
					<a href={item.item.href} target='_blank' rel='noreferrer'>
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
