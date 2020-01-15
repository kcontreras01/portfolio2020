import React from "react";
import Contact from '../contact/Contact';
import './about.css';

const About = () => {
	return (
		<div className="about-container overflow-container fade-in">
			<p>
				Kiara Contreras is a Web Developer at S’well with a background in
				technology, customer service, and retail. Her role as an Apple Genius
				sparked her curiosity about how we interact with our devices and she
				began her journey into becoming a self-taught and eventual General
				Assembly Bootcamp Developer.
			</p>

			<p>
				Kiara specializes in Frontend technologies and loves React. She regularly
				volunteers at{" "}
				<a
					href="https://www.nanohackers.org/"
					alt="Nano Hackers Academy site"
					target="_blank"
					rel="noopener noreferrer"
					className="purple"
				>
					Nano Hackers Academy
				</a>
				, offering advanced learning opportunities for tech-enthusiastic kids,
				and{" "}
				<a
					href="http://brooklynanimalaction.org/"
					alt="Brooklyn Animal Action site"
					target="_blank"
					rel="noopener noreferrer"
					className="purple"
				>
					Brooklyn Animal Action
				</a>
				, caring for rescue animals. Kiara thrives in a team-based environment
				and believes that our greatest resource is our peers.
			</p>

			<p>
				In her free time you can find her singing Barbershop music with her
				Quartet,{" "}
				<a
					href="http://www.alexisdpn.com/repeatoffenders"
					alt="repeat offenders quartet site"
					target="_blank"
					rel="noopener noreferrer"
					className="purple"
				>
					Repeat Offenders
				</a>
				, watching Youtube videos, and taking long walks, constantly on the
				lookout for cats.
			</p>

			<Contact />
			
		</div>
	);
};

export default About;
