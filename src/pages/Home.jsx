import React from 'react';
import Form from '../components/Login';
import Presentation from '../components/Presentation';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

const Home = ()=>(
    <div className="h-screen w-screen bg-green-600">
		<div className="bg-banner bg-no-repeat bg-cover bg-center h-full">
			<div className="grid grid-cols-2 gap-4 w-full place-items-center h-screen">
				<Presentation/>
				<Login/>
			</div>
		</div>
	</div>
);

export default Home;