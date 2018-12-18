import React from 'react';
import 'bulma/css/bulma.css';
import 'bulma-timeline/dist/css/bulma-timeline.min.css';
import './cardStyles.css';

const ExperienceCard = () => {
	return (
		<div className="card cardStyles">
			<div className="card-content">
					<h1 className="title">Experience and education</h1>
					<div className="timeline">
						<header className="timeline-header">
							<span className="tag is-medium is-primary">Present</span>
						</header>
						<div className="timeline-item">
							<div className="timeline-marker"></div>
						<div className="timeline-content">
							<p className="heading">May 2018</p>
							<p className="subtitle">Web developer at the Greek ministry of Defence</p>
							<p>During my compulsory military service I was chosen to be part
								of a team that would support and extend a Java web application
								for the Greek army that was used by the people in the army to better manage 
								their employees and civilians that where doing their military service. 
							</p>
						</div>
						</div>

						<header className="timeline-header">
							<span className="tag is-primary">2017</span>
						</header>
						
						<div className="timeline-item">
							<div className="timeline-marker"></div>
							<div className="timeline-content">
								<p className="heading">July 2017 - April 2018</p>
								<p className="subtitle">Web developer at Seeburger AG</p>
								<p>At Seeburger I had the joy to work as a Java developer developing the framework that
									was used internally by the developers at the company to create one of our products.
									One notable accomplishment of mine was the reduction of the size of the css files by
									correctly implementing sass. 
								</p>
							</div>
						</div>

						<header className="timeline-header">
							<span className="tag is-primary">2016</span>
						</header>

						<div className="timeline-item">
							<div className="timeline-marker"></div>
							<div className="timeline-content">
								<p className="heading">July 2016 - June 2017</p>
								<p className="subtitle">Web developer at Rissc Solutions</p>
								<p>At my first developer job I worked with Javascript and Node.js where my main task
									at the beginning was to test different technologies in order to update our product and move
									it away from older technologies. That led me to work deeply with 'Canvas' and 'FabricJs' and also
									gave me the opportunity to take a more serious look at performance.
								</p>
							</div>
						</div>

						<header className="timeline-header">
							<span className="tag is-primary">2015</span>
						</header>

						<div className="timeline-item">
							<div className="timeline-marker"></div>
							<div className="timeline-content">
								<p className="heading">October 2008 - July 2015</p>
								<p className="subtitle">Bachelor degree in Computer Science (Aristotle University of Thessaloniki)</p>
								<p>Graduated from one of the most renowned universities in the country. I chose the
									software development path where the main courses where: </p>
								<ul>
									<li><p>Data structures, Algorithms, Object oriented programming (Java, C++),</p></li>
									<li><p>Operating systems, Networks, Data mining, Computer architecture</p></li>
									<li><p>and various math courses (Linear Algrebra, Calculus)</p></li> 
								</ul>
							</div>
						</div>
						<div className="timeline-header">
							<span className="tag is-medium is-primary">Start</span>
						</div>
					</div>
			</div>
		</div>
	)
}

export default ExperienceCard;