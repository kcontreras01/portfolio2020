import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
						<section className="primary-sticky-nav" key={article.id}>
							<a
								href={article.url}
								target="_blank"
								rel="noopener noreferrer"
								className="article-title"
							>
								<div className="primary-sticky-nav-element">
									<div className="article-header-container">
										<div className="article-header">
											{article.title}
											<h4 className="article-author">{article.description}</h4>
											<div className="primary-sticky-nav-element-details">
												{article.tag_list.map((e, index) => {
													return <span key={index}>#{e} </span>;
												})}
											</div>
										</div>
									</div>

									<div>
										<div className="primary-sticky-nav-author-follow article-footer">
											<div className="article-icon-container">
												<FontAwesomeIcon icon="heart" className="pink" />
												<span style={{ margin: "3px" }}>
													{article.positive_reactions_count}
												</span>
											</div>

											<div className="article-icon-container">
												<FontAwesomeIcon icon="comments" />
												<span style={{ margin: "3px" }}>
													{article.comments_count}
												</span>
											</div>
										</div>
									</div>
								</div>
							</a>
						</section>
					))}
				</div>
			</React.Fragment>
		);
	}
}
