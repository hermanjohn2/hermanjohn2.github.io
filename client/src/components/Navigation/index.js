import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './style.css';

const Navigation = () => {
	return (
		<div>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark">
				<Navbar.Brand href="#home">
					John Herman | Developer
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown
							title="Portfolio"
							id="collapsible-nav-dropdown">
							<NavDropdown.Item href="#projects">
								Projects
							</NavDropdown.Item>
							<NavDropdown.Item href="#assignments">
								Examples of Code
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#contact">
							Contact
						</Nav.Link>
						<Nav.Link href="#about">
							About Me
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link
							href="https://github.com/hermanjohn2"
							className="fa fa-github active"
							target="_blank"></Nav.Link>
						<Nav.Link
							href="https://www.linkedin.com/in/john-joseph-herman"
							className="fa fa-linkedin active"
							target="_blank"></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
