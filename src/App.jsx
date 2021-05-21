import React from 'react';
import Form from './components/Form';
import Presentation from './components/Presentation';

const App = ()=>(
	<div className="h-screen w-screen bg-green-600">
		<div className="bg-banner bg-no-repeat bg-cover bg-center h-full">
			<div className="grid grid-cols-2 gap-4 w-full place-items-center h-screen">
				<Presentation/>
				<Form/>
			</div>
		</div>
	</div>
);

export default App;