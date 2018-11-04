import React from 'react';
import Profile from './Profile';
import ExperienceCard from './ExperienceCard';
import SkillCard from './SkillCard';
import 'bulma/css/bulma.css'; 

const Info = () => {
	return (
		<div>
			<section className="section is-small">
				<div className="container">
					<Profile />
				</div>
			</section>
			<section className="section is-small">
				<div className="container">
					<ExperienceCard />
				</div>
			</section>
			<section className="section is-small">
				<div className="container">
					<SkillCard />
				</div>
			</section>
		</div>
	)
}

export default Info;