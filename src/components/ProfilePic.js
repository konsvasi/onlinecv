import React from 'react';
import 'bulma/css/bulma.css'; 
import './ProfilePic.css'

const ProfilePic = () => {
	return (
		<div>
			<figure className="image profilePic">
				<img className="is-rounded is-small" 
					src="https://bulma.io/images/placeholders/128x128.png"
					alt="My profile" 
				/>
			</figure>
		</div>
	)
}

export default ProfilePic;