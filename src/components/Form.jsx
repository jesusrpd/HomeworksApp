import React from 'react';

const Form = ()=>(
    <div className="w-2/5">
		<h2 className="text-white text-center font-black text-4xl">Login</h2>
		<div className="flex flex-col">
			<input placeholder="Username or Gmail" 
                className="text-white bg-transparent focus:outline-none border-solid border-4 p-2 rounded-sm my-4" 
                type="text" />
			<input placeholder="Password" 
                className="text-white bg-transparent focus:outline-none border-solid border-4 p-2 mb-4 rounded-sm" 
                type="password"/>
			<div className="flex items-center">
                <input 
                    className="bg-transparent my-4 focus:outline-none" 
                    type="checkbox"/>
                <p className="text-white pl-2">Keep session open</p>
            </div>
            <button 
                className="bg-white text-green-600 hover:text-white hover:bg-green-400 font-bold w-2/4 m-auto mt-5 p-1 rounded-md">
                Login
            </button>
		</div>
	</div>
);

export default Form;