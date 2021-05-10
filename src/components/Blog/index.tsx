import React from 'react';
import styles from '../../styles/components/Blog.module.css';

interface NoticiasProps {
    title: string,
    subtitle: string,
    text: string,
    author: string,
    image: string
    dateCreated: string,
    dateUpdate: string
}

const noticias = {
	title: '20ª Corrida Para a Luz em Camaragibe (PE) Tem o Patrocínio Caixa',
	subtitle: 'É o 11º ano de parceria com a Caixa encerrando o calendário oficial da Federação Pernambucana de Atletismo',
	text: 'No dia de Natal (25), foi realizada nas ruas da cidade de Camaragibe (PE) a vigésima edição de um dos principais eventos da modalidade esportiva no estado de Pernambuco. Este ano a Corrida e Caminhada para a Luz, promovida pelo Centro Plantando o Futuro, se preocupou com a sustentabilidade e com o meio ambiente. O percurso de 5km foi modificado para que os atletas passassem pela reserva remanescente de mata atlântica que fica no Prive Vermont com 170 hectares, dentro da cidade. Além disso, a 16ª Corrida da Criança de Camaragibe, da qual participaram 150 crianças de projetos sociais ligados ao atletismo de todo o estado de Pernambuco, e a 3ª Olimpíada Estudantil do município, em parceria com a Secretaria de Educação de Camaragibe, selecionou 10 crianças com vocação para serem treinados e se tornarem futuros atletas de corrida de rua.',
	image: '',
	author: 'Caixa Economica',
	dateCreated: '25/01/2020 - 11:30',
	dateUpdate: '25/01/2020 - 11:30',
};

const Blog = (): JSX.Element => {
	const noticia = noticias as NoticiasProps;
	return(
		<div className={styles.containerBlog} >
			<div className={styles.contentBlog}>
				<div style={{textAlign: 'center'}}>
					<img src="https://cdn.shopk.it/usercontent/fercoltools/media/images/da2d1c3-hella-logo-e880c4ad2f-seeklogocom.png" className={styles.imageCorrida} />
				</div>
				<div>
					<h1 className={styles.title}> {noticia.title} </h1>
					<div className={styles.lineTitle} />
					<h2 className={styles.subtitle}> {noticia.subtitle} </h2>
					<p className={styles.text}>
						{noticia.text}
					</p>
				</div>

			</div>
		</div>
	);
};

export default Blog;