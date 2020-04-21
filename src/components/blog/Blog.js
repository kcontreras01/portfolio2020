import React, { Component } from "react";
import BlogCard from './BlogCard';
import './blog.css';

export default class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		};
	}

	componentDidMount() {
		fetch("https://dev.to/api/articles?username=kiarathedev")
			.then(res => res.json())
			.then(data =>
				this.setState({
					articles: data
				})
			);
	}

	render() {
		return (
			<React.Fragment>
				<div className="overflow-container">
					{this.state.articles.map(article => (
						<div key={article.id} className="fade-in card">
							<BlogCard article={article}/>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}