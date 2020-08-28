import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './style.css';
import aboutMeData from '../../db/aboutMe.json';

import Navigation from '../../components/Navigation';

const Contact = () => {
	return (
		<div>
			<Navigation />

			<Container>
				<Row>
					<Col md={12}>
						<h1 className="headline my-3 text-center">Let's Build Together</h1>
					</Col>
				</Row>
			</Container>

			<Card className="contact-card shadow-lg rounded">
				<Row className="no-gutters">
					<Col md={8}>
						<Card.Body>
							<h2>{aboutMeData[0].name}</h2>
							<h2>{aboutMeData[0].location}</h2>
							<h2>{aboutMeData[0].email}</h2>
							<h2>{aboutMeData[0].contactNumber}</h2>

							<Card.Link
								className="link"
								href={aboutMeData[0].resumePdf}
								target="_blank">
								<h2>Resume</h2>
							</Card.Link>
						</Card.Body>
					</Col>
					<Col variant="top" className="pt-3" md={4}>
						<Card.Img
							className="headshot shadow-lg"
							src={aboutMeData[0].avatarUrl}
						/>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default Contact;
