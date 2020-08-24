import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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

			<Card className="contact-card shadow-lg rounded">
				<Row className="no-gutters">
					<Col md={8}>
						<Card.Body>
							<h2>John Herman</h2>
							<h2> Atlanta, GA</h2>
							<h2>
								hermanjohn2@gmail.com
							</h2>
							<h2>(770) 241-6512</h2>

							<Card.Link
								className="link"
								href="/pdf/resume-john-herman.pdf"
								target="_blank">
								<h2>Resume</h2>
							</Card.Link>
						</Card.Body>
					</Col>
					<Col
						variant="top"
						className="pt-3"
						md={4}>
						<Card.Img
							className="headshot shadow-lg"
							src="/images/headshot1.jpg"
						/>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default Contact;
