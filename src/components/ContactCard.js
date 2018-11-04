import React, { Component } from 'react';
import http from 'http';
import fs from 'fs';
import 'bulma/css/bulma.css';
import './ContactCard.css';

const ContactCard = () => {
	return (
		<div className="card contactCard">
			<div className="card-content">
				<p className="title">Kostas Vasileiadis</p>
				<p className="subtitle">Web developer</p>
				<p>Email: konsvass@outlook.com</p>
				<p>Github: 
					<a href="http://www.github.com/konsvasi" 
						target="_blank"
						rel="noopener noreferrer">
						github.com/konsvasi
					</a>
				</p>
				<p>Phone: +491781083520</p>
			</div>
			<a className="button is-info"
				href="../resources/kostas_vasileiadis_cv.pdf" download>Download my CV
			</a>
		</div>
	)
}

export default ContactCard;