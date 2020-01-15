import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDev, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
	constructor() {
		super() 

		this.state = {
			contactLinks: [
				{
					href : "mailto:kiara.p.contreras@gmail.com",
					alt  : "email",
					icon : faEnvelope
				},
				{
					href : "https://github.com/kcontreras01",
					alt  : "github",
					icon : faGithub
				},
				{
					href : "https://dev.to/kiarathedev",
					alt  : "dev.to",
					icon : faDev
				},
				{
					href : "https://twitter.com/kiarathedev",
					alt  : "twitter",
					icon : faTwitter
				},
				{
					href : "https://www.linkedin.com/in/kiaracontreras/",
					alt  : "linkedin",
					icon : faLinkedinIn
				},
			]
		}
	}

	render() {
		return (
			<div className="contact-icon-container">
				{this.state.contactLinks.map(link => (
					<a href={link.href} target="_blank" rel="noopener noreferrer" alt={link.alt} key={link.alt}>
						<FontAwesomeIcon icon={link.icon}/>
					</a>	
				))}
			</div>
		)
	}
}