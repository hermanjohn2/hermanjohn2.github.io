import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

import Navigation from '../../components/Navigation';

const Home = () => {
	return (
		<div>
			<Navigation />
			<Container>
				<Row>
					<Col md={12}>
						<h1 className="headline my-5 mx-2">
							Hi, <br />
							I'm John. <br />A web
							developer.
						</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
