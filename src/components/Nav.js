import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
	const mobileMenuTrigger = () => {
	  let x = document.getElementById("nav-links");
	  if (x.style.display === "block") {
	    x.style.display = "none";
	  } else {
	    x.style.display = "block";
	  }
	}

	return (
		<div className="topnav">
		  <a href="#home" className="active"></a>
		  <div id="nav-links">
		    <Link to="/">About</Link>
		    <Link to="/blog">Blog</Link>
		    <Link to="/contact">Contact</Link>
		  </div>
		  <a href="#" className="icon" onClick={mobileMenuTrigger}>
		    <i className="fa fa-bars"></i>
		  </a>

		 

		</div>
		)
}

export default Nav

