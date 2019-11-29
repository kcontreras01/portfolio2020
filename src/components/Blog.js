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
				{this.state.articles.map(article => (
					<section className="primary-sticky-nav" key={article.id}>
						<div className="primary-sticky-nav-element">
							<div className="article-header-container">
								<img
									src={article.user.profile_image_90}
									alt="#"
									className="primary-sticky-nav-profile-image"
								/>

								<div className="article-header">
									<a
										href={article.url}
										target="_blank"
										rel="noopener noreferrer"
										className="article-title"
									>
										{article.title}
									</a>
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
										<FontAwesomeIcon icon="heart" />
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

									<div className="article-icon-container">
										<button className="save-button"> SAVE </button>
									</div>
								</div>
							</div>
						</div>
					</section>
				))}
			</React.Fragment>
		);
	}
}
