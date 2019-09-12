import React, { useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'

import { connect } from 'react-redux';

import { getJoke } from '../actions';

const Jokes = ({ jokes, isFetching, error, getJoke }) => {
	useEffect(
		() => {
			getJoke();
		},
		[ getJoke ]
	);

	return (
		<div>
			<button onClick={getJoke}>Get More</button>
            
			{jokes.map((joke) => {
				return (
					// <div key={joke.id}>
					//     <p>{joke.setup}</p>
					//     <p>{joke.punchline}</p>
					//     <br></br>
					// </div>
					<div>
						<Container fluid>
							<Header as="h2">{joke.setup}</Header>
							<p>
                            {joke.punchline}
							</p>
						</Container>
					</div>
				);
			})}
			<button onClick={getJoke}>Get More</button>
            
        <br></br>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		jokes: state.jokes,
		isFetching: state.isFetching,
		error: state.error
	};
};

export default connect(mapStateToProps, { getJoke })(Jokes);
