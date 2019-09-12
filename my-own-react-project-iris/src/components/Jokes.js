import React, { useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';

import { getJoke } from '../actions';

const Jokes = ({ jokes, isFetching, error, getJoke }) => {
	useEffect(() => {
			getJoke();
		},
		[ getJoke ]);
    
    if (isFetching) {
        return <h2>Retrieving: DAD JOKES</h2>;
      }

	return (
        <div>
        <div>
            <button onClick={getJoke}>Get More</button>
        </div>
		<div>
			
            
			{jokes.map((joke) => {
				return (
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
        <br></br>
		</div>
        <button onClick={getJoke}>Get More</button>
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
