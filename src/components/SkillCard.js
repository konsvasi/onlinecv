import React from 'react';
import 'bulma/css/bulma.css';
import './cardStyles.css';

const SkillCard = () => {
	return (
		<div className="card cardStyles">
			<div className="card-content">
				<h1 className="title">Technical skills</h1>
					<div className="columns">
						<div className="column">
							<p className="skillTitle">HTML5</p>
							<progress className="progress is-info" value="100" max="100">75%</progress>
						</div>
						<div className="column">
							<p className="skillTitle">CSS3</p>
							<progress className="progress is-info" value="95" max="100">75%</progress>
						</div>
						<div className="column">
							<p className="skillTitle">Javascript</p>
							<progress className="progress is-info" value="95" max="100">75%</progress>
						</div>
					</div>
					<div className="columns">
						<div className="column">
							<p className="skillTitle">React and Redux</p>
							<progress className="progress is-info" value="85" max="100">75%</progress>
						</div>
						<div className="column">
							<p className="skillTitle">Java</p>
							<progress className="progress is-info" value="85" max="100">75%</progress>
						</div>
						<div className="column">
							<p className="skillTitle">NodeJS</p>
							<progress className="progress is-info" value="85" max="100">75%</progress>
						</div>
					</div>
					<div>
						<h3 className="inline skillTitle">Deployment tools: </h3>
						<p className="inline">Docker, Maven</p>
						<br></br>
						<h3 className="inline skillTitle">Versioning: </h3>
						<p className="inline">Git</p>
						<br></br>
						<h3 className="inline skillTitle">Databases: </h3>
						<p className="inline">MySql, PostgreSql, Redis</p>
						<br></br>
						<h3 className="inline skillTitle">Testing: </h3>
						<p className="inline">Jest, Mocha</p>
					</div>		
			</div>
		</div>
	)
}

export default SkillCard;