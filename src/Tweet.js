import React from 'react';

class Tweet extends React.Component {
	render() {
		return (
			<div className = "tweet">
				<img source="http://twitter.com/some-avatar.png" className="tweet_avatar"/>
				<div className = "tweet_body">
					<p> We are writing this tweet in JSX. Holy moly!</p>
				</div>
			</div>		
		);
	}
}


export default Tweet;