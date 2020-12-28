import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './style.css';

const ProjectCard = ({ data, wait }) => {
	const [message, setMessage] = useState('');
	const [hasAnimated, setHasAnimated] = useState(false);

	const handleHover = async () => {
		if (!hasAnimated) {
			let arr = 'Check out my code on GitHub!'.split('');
			let msg = '';

			for (const char in arr) {
				await wait(100);
				msg += arr[char];
				setMessage(msg);
			}

			setHasAnimated(true);
		}
	};

	// const wait = ms => {
	// 	return new Promise(resolve => setTimeout(resolve, ms));
	// };

	return (
		<div>
			<Card className="shadow-lg p-5 m-5 rounded">
				<Row className="no-gutters">
					<Col className="pt-3" md={4}>
						<Card.Link href={data.deployedLink} target="_blank">
							<Card.Img variant="top" src={data.img} alt={data.alt} />
						</Card.Link>
					</Col>
					<Col md={8}>
						<Card.Body>
							<Card.Link
								className="link"
								href={data.deployedLink}
								target="_blank">
								<Card.Title>
									<span className="project-title">
										{data.title}
									</span>
								</Card.Title>
							</Card.Link>

							<Card.Text>
								{data.description}
								<br />
								<br />
								<Card.Link
									onMouseEnter={() => handleHover()}
									className="gh-card-link fa fa-github"
									href={data.githubLink}
									rel="noopener noreferrer"
									target="_blank
									">
									{' '}
									<span>{message}</span>
								</Card.Link>
							</Card.Text>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default ProjectCard;
