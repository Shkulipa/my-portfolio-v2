import React, { FC } from 'react';

//styles
import styles from '../styles/components/copyright.module.scss';

const Copyright: FC = () => {
	return (
		<div className={styles.Copyright}>
			<a href='#' className={styles.Copyright__Name}>
				Oleksii Shkulipa
			</a>
			<div className={styles.Copyright__content}>
				Copyright &copy; 2020 All right reserved
			</div>
		</div>
	);
};

export default Copyright;
