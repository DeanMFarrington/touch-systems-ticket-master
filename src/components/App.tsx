
import React from 'react';

import '../styles/index.css';
import TicketMaster from './organism/TicketMaster';

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<TicketMaster/>
			</div>
		);
	}
}

export default App;