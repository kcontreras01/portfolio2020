import React from "react";
import Contact from '../contact/Contact';
import './about.css';
import headshot from './me.jpeg';

const About = () => {
	return (
		<div className="about-container overflow-container fade-in">
			<img alt="headshot" src={headshot}/>
			
			<p>
				Kiara Contreras is a Frontend Developer with a background in technology, 
				music, and customer service. 
				
				During her repair time as an Apple Genius she became more curious about
				how users interacted with their devices by using its software.

				With some self-taught coding and passion, she left her position at Apple and became a
				General Assembly Web Developer Bootcamp graduate. 
				
				She thrives in a team-based environment and believes that our greatest resource is our peers.
			</p>

			<p>
				Kiara specializes in Frontend technologies and loves React! She regularly
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
				, offering advanced learning opportunities for tech-enthusiastic kids, {" "}

				<a
					href="https://www.nyhistory.org/education/teen-programs/scholars-program"
					alt="Tech Scholars site"
					target="_blank"
					rel="noopener noreferrer"
					className="purple"
				>
					Tech Scholars
				</a>
				, mentoring high-school aged girls on how to build digital products,


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
				, caring for rescue animals.
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
