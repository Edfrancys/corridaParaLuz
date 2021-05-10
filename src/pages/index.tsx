import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Slide from '../components/Slide/Slide';
import Carousel from '../components/Carousel';
import Corrida from '../components/Corrida';
import Blog from '../components/Blog';

const Home = (): JSX.Element => {
	return (		
		<>
			<Sidebar />
			<Slide />
			<Carousel />
			<Corrida />	
			<Blog />
		</>
	);
};

export default Home;