import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Slide from '../components/Slide/Slide';
import Animate from '../components/Animate/Index';

const Home = (): JSX.Element => {
	return (		
		<>
			<Sidebar />
			<Slide />
			<Animate />
		</>
	);
};

export default Home;