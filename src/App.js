
import React from 'react';
import './Style.css';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import Launches from "./components/Launches";
import Launch from './components/Launch';
import { Router } from "@reach/router";

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

class App extends React.Component {
	render() {
		return(
			<ApolloProvider client={client}>
				<div className="container">
					
					<Router>
						<Launches path="/"/>
						<Launch path="/launch/:id"/>
					</Router>
				</div>
			</ApolloProvider>

		)
	}
}

export default App;
