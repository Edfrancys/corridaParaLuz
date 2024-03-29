import React, { useState } from 'react';
import { images } from './Images';
import { wrap } from 'popmotion';
import { AnimatePresence, motion } from 'framer-motion';

import styles from '../../styles/components/Slide.module.css';


const variants = {
	enter: (direction: number) => {
		return {
			x:  direction > 0 ? 2000 : -2000,
			opacity: 0
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1
	},
	exit: () => {
		return {
			zIndex: 0,			
			opacity: 0
		};
	}
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const Slide = (): JSX.Element => {	
	
	const [ [page, direction], setPage ] = useState([0,0]);
	const imageIndex = wrap( 0, images.length, page );
	
	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<>
			<header className={styles.slideContainer}  >
				<AnimatePresence initial={false} custom={direction} >
					<motion.img
						key={page}
						src={images[imageIndex]}
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 }
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e,{ offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								paginate(1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1);
							}
						}}
						className={styles.imgStyle}											
					/>
				</AnimatePresence>
				<div className={styles.paginateNextPrev}>
					<div className={styles.next} onClick={() => paginate(1)}>
						{'‣'}
					</div>
					<div className={styles.prev} onClick={() => paginate(-1)}>
						{'‣'}
					</div>
				</div>
				
			</header>
		</>
	);
};

export default Slide;