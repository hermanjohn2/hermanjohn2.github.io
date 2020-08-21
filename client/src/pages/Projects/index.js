import React from 'react';

import Navigation from '../../components/Navigation';
import ProjectCard from '../../components/ProjectCard';

import projectData from '../../db/projects.json';

const Projects = () => {
	return (
		<div>
			<Navigation />
			<h1 className="headline my-3 text-center">Projects</h1>
			{projectData.map(project => (
				<ProjectCard data={project} />
			))}
		</div>
	);
};

export default Projects;
