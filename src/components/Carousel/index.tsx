/* eslint-disable react/jsx-key */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import styles from '../../styles/components/Carosel.module.css';

interface ImgCarouselProps {
	id: number
	img: string
	width: string
	height: string
}

const img = [
	{
		id: 1,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/bbg.jpg',
		width: '194px',
		height: '110px'
	},
	{
		id: 2,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/caixa-patria-amada.jpg',
		width: '641px',
		height: '110px'
	},
	{
		id: 3,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/globo.jpg',
		width: '122px',
		height: '110px'
	},
	{
		id: 4,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/natal-paz.jpg',
		width: '130px',
		height: '110px'
	},
	{
		id: 5,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/assai.jpg',
		width: '127px',
		height: '110px'
	},
	{
		id: 6,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/camaragibe-agora.jpg',
		width: '111px',
		height: '110px'
	},
	{
		id: 7,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/photoshop.jpg',
		width: '187px',
		height: '110px'
	},
	{
		id: 8,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/mobi-pe.jpg',
		width: '299px',
		height: '110px'
	},
	{
		id: 9,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/mg-bicicleta.jpg',
		width: '157px',
		height: '110px'
	},
	{
		id: 10,
		img: 'http://www.corridaparaluz.com.br/img/patrocinadores/atualizados/nossa-fruta.jpg',
		width: '132px',
		height: '110px'
	}
];


const items = img.map((item: ImgCarouselProps) => {	
	return (<div className={styles.containerCarousel} ><img className={styles.img} style={{width: item.width, height: item.height}} src={item.img} /> </div>);
});

const Carousel = () => (
	<AliceCarousel
		autoWidth
		autoPlay
		infinite
		mouseTracking
		items={items}
		disableDotsControls
		disableButtonsControls
	/>
);

export default Carousel;