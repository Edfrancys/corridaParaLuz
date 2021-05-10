import React from 'react';
import styles from '../../styles/components/Corrida.module.css';

const Corrida = (): JSX.Element => {
	return (
		<div className={styles.containerCorrida} >
			<div className={styles.contentCorrida}>
				<div style={{textAlign: 'center'}}>
					<img src="https://cdn.shopk.it/usercontent/fercoltools/media/images/da2d1c3-hella-logo-e880c4ad2f-seeklogocom.png" className={styles.imageCorrida} />
				</div>
				<div>
					<h1 className={styles.title}> A Corrida </h1>
					<div className={styles.lineTitle} />
					<p className={styles.text}>
						A Corrida e Caminhada Para a Luz é um dos maiores eventos esportivos do Nordeste, sendo um ambiente propício para o intercambio de grandes atletas de todo Brasil e de atletas internacionais. A Corrida e Caminhada Para Luz é realizada no dia 25 de Dezembro de cada ano, e traz em sua base o compromisso de levar o esporte cada vez mais longe, abrindo portas para o surgimento de grandes atletas para a modalidade. Sendo realizada pelo Centro Plantando o Futuro e organizada por Júlio César da Costa, tendo seu local de chagada e largada na Rua Pe Ozéas Cavalcante (Próximo ao Shopping Camará).
					</p>
				</div>

			</div>
		</div>
	);
};

export default Corrida;