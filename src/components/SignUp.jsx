import React from 'react';

const SignUp = ()=>(
    <div className="w-2/5">
        <h2 className="text-white text-center font-black text-4xl mb-5">Sign Up</h2>
        <div className="flex flex-col">
            <input placeholder="Username" 
                className="text-white bg-transparent border-white focus:border-white focus:ring-0 focus:outline-none border-solid border-4 p-2 rounded-sm my-5 placeholder-white" 
                type="text" />
            <input placeholder="Gmail" 
                className="text-white bg-transparent border-white focus:border-white focus:ring-0 focus:outline-none border-solid border-4 p-2 rounded-sm my-5 placeholder-white" 
                type="email" />
            <input placeholder="Password" 
                className="text-white bg-transparent border-white focus:border-white focus:ring-0 focus:outline-none border-solid border-4 p-2 my-5 rounded-sm placeholder-white" 
                type="password"/>
            <div className="flex items-center my-5">
                <input type="checkbox" class="form-checkbox rounded-sm border-none h-5 w-5 text-green-400 focus:outline-none"/>
                <span class="ml-2 text-white">Keep session open</span>
            </div>
            <p className="text-white underline cursor-pointer">Do you already have an account?</p>
            <button 
                className="bg-white duration-400 ease-in-out text-green-600 hover:text-white hover:bg-green-400 font-bold w-2/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                Sign up
            </button>
        </div>
    </div>
);

export default SignUp;