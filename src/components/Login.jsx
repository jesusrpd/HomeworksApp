import React from 'react';

const Form = ()=>(
    <div className="w-2/5">
		<h2 className="text-white text-center font-black text-4xl mb-5">Login</h2>
		<div className="flex flex-col">
			<input placeholder="Username or Gmail" 
                className="text-white bg-transparent focus:outline-none border-solid border-4 p-2 rounded-sm my-5 placeholder-white" 
                type="text" />
			<input placeholder="Password" 
                className="text-white bg-transparent focus:outline-none border-solid border-4 p-2 my-5 rounded-sm placeholder-white" 
                type="password"/>
			<div className="flex items-center">
                <input 
                    className="my-4 focus:outline-none" 
                    type="checkbox"/>
                <p className="text-white pl-2">Keep session open</p>
            </div>
            <p className="text-white underline cursor-pointer">You do not have an account?</p>
            <button
                
                className="bg-white text-green-600 hover:text-white hover:bg-green-400 font-bold w-2/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                Login
            </button>
		</div>
	</div>
);

export default Form;