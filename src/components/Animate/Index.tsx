import React from 'react';
import { motion } from 'framer-motion';

import styles from './Animate.module.css';


const Animate = (): JSX.Element => {
	return (
		<>
			<div className={styles.animateContainer}>
				<motion.div 
					initial={{ boxShadow: '0px 0px 2px #000', y: '100vh' }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8 }}
					whileHover={{
						boxShadow: '0px 0px 7px #000',
						scale: 1.5
					}}
					className={styles.divMotion} 
				/>
			</div>
		</>
	);
};

export default Animate;