import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Slide from '../components/Slide/Slide';
import Carousel from '../components/SlidePatrocinio';

const Home = (): JSX.Element => {
	return (		
		<>
			<Sidebar />
			<Slide />
			<Carousel />			
		</>
	);
};

export default Home;