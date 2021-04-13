import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem, menuItemLink } from './MenuItem';

const variants = {
	open: {	
		x: 20,	
		display: 'block',	
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {			
		x: 0,	
		display: 'none',
		transition: {delay: 2, staggerChildren: 0.05, staggerDirection: -10 }
	}
};

export const Navigation = () => (
	<motion.ul variants={variants}>
		{menuItemLink.map(i => (
			<MenuItem i={i} key={i.nome} />
		))}
	</motion.ul>
);

const itemIds = [0, 1];
