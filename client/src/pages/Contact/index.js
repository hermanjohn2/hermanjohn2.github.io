import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './style.css';

import Navigation from '../../components/Navigation';

const Contact = () => {
	return (
		<div>
			<Navigation />

			<Container>
				<Row>
					<Col md={12}>
						<h1 className="headline my-3 text-center">
							Let's Build Together
						</h1>
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					<Col className="pt-5" md={6}>
						<h2>John Herman</h2>
						<h3>Atlanta, GA</h3>
						<h3>hermanjohn2@gmail.com</h3>
						<h3>(770) 241-6512</h3>
						<a
							href="/pdf/resume-john-herman.pdf"
							target="_blank">
							<h3 className="link">
								Resume
							</h3>
						</a>
					</Col>
					<Col className="pt-5" md={6}>
						<Image
							className="headshot img-fluid shadow-lg"
							src="/images/headshot1.jpg"
							rounded
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
