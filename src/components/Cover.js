import React from 'react';
import 'bulma/css/bulma.css'; 
import './Cover.css';
import ProfilePic from './ProfilePic';
import ContactCard from './ContactCard';

const Cover = () => {
	return (
		<div>
			<section className="section cover">
				<div className="container">
					<div className="columns">
						<div className="column is-one-quarter">
							<ProfilePic />
						</div>
						<div className="column is-half">
							<ContactCard />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Cover;