import React from 'react'

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
		    <a href="#news" id="about">About</a>
		    <a href="#contact">Blog</a>
		    <a href="#about">Contact</a>
		  </div>
		  <a href="#" className="icon" onClick={mobileMenuTrigger}>
		    <i className="fa fa-bars"></i>
		  </a>
		</div>
		)
}

export default Nav

