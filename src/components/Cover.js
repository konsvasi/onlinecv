import React from 'react';
import 'bulma/css/bulma.css'; 
import './Cover.css';
import ProfilePic from './ProfilePic';
import ContactCard from './ContactCard';
import myCv from '../resources/konstantinos_vasileiadis_cv.pdf';

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
						<div className="column">
							<a className="button is-link downloadButton"
								href={myCv} download="kostas_vasileiadis_cv.pdf">
								Download my CV
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Cover;