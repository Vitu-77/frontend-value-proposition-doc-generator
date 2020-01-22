import React from 'react';
import { GlobalStyle } from './styles/globalStyles';

import Routes from './routes';

const App = () => {
	return(
		<React.Fragment>
			<GlobalStyle />
			<Routes />
		</React.Fragment>
	)
}

export default App;