import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
    display: flex;

    height: 100vh;
    background: #fafafa;
`;

const Home = (): JSX.Element => {
	return (
		<Display>
			<h1>Home Corrida</h1>
		</Display>
	);
};

export default Home;