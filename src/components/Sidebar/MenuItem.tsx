/* eslint-disable react/prop-types */
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
	open: {		
		y: 0,
		opacity: 1,
		display: 'flex',
		transition: {			
			y: {deleay: 0.4, stiffness: 1000, velocity: -100 },
			
		}
	},
	closed: {		
		y: 50,
		opacity: 0,
		display: 'none',
		transition: {
			y: { stiffness: 1000 },
			
		}
	}
};

//const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const menuItemLink = [
	{
		nome: 'Home',
		icon: 'home',
		link: '/'
	},
	{
		nome: 'A Corrida',
		icon: 'corrida',
		link: '/corrida'
	},
	{
		nome: 'Projeto',
		icon: 'projeto',
		link: '/projeto'
	},
	{
		nome: 'Regulamento 2021',
		icon: 'regulamento',
		link: '/regulamento'
	},
	{
		nome: 'Galeria',
		icon: 'galeria',
		link: '/galeria'
	},
	{
		nome: 'Galeria dos Campeões',
		icon: 'galeria',
		link: '/galeria'
	},
	{
		nome: 'Contato',
		icon: 'contato',
		link: '/contato'
	},
	{
		nome: 'Resultado',
		icon: 'resultado',
		link: '/resultado'
	}	
];

export const MenuItem = ({ i }) => {
	// const style = { border: `2px solid ${colors[i]}` };
	console.log(i);
	
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<Link href={i.link}>
				<a> {i.nome} </a>
			</Link>
			{/* <div className="icon-placeholder" style={style} />
			<div className="text-placeholder" style={style} /> */}
		</motion.li>
	);
};
