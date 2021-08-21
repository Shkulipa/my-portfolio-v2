import React, { FC } from 'react';

//styles
import styles from '../styles/components/copyright.module.scss';

const Copyright: FC = () => {
	return (
		<div className={styles.Copyright}>
			<div className={styles.Copyright__content}>
				Created by Oleksii Shkulipa &copy; 2020
			</div>
		</div>
	);
};

export default Copyright;
