import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({ data }) => {
	return (
		<div>
			<Card className="shadow-lg p-3 mx-5 my-2 rounded">
				<Row className="no-gutters">
					<Col className="pt-3" md={4}>
						<Card.Link
							href={data.deployedLink}
							target="_blank">
							<Card.Img
								variant="top"
								src={data.img}
							/>
						</Card.Link>
					</Col>
					<Col md={8}>
						<Card.Body>
							<Card.Link
								className="link"
								href={
									data.deployedLink
								}
								target="_blank">
								<Card.Title>
									{
										data.title
									}
								</Card.Title>
							</Card.Link>

							<Card.Text>
								{
									data.description
								}
								<br />
								<br />
								<Card.Link
									className="link"
									href={
										data.githubLink
									}
									rel="noopener noreferrer"
									target="_blank">
									GitHub
									Repository
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
