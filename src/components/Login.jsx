import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    username: yup.string().required("Obligatory field"),
    password: yup.string().required("Obligatory password")
});

const Form = ({onClick})=>{

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

    return(
        <div className="w-2/5">
            <h2 className="text-white text-center font-black text-4xl mb-5">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input
                    {...register("username")} 
                    placeholder="Username or Gmail" 
                    className="text-white bg-transparent focus:border-white focus:ring-0 focus:outline-none border-white border-solid border-4 p-2 rounded-sm mt-5 placeholder-white" 
                    type="text" />
                    <p className="text-red-400">{errors.username?.message}</p>
                <input
                    {...register("password")} 
                    placeholder="Password" 
                    className="text-white bg-transparent focus:border-white focus:ring-0 focus:outline-none border-white border-solid border-4 p-2 mt-5 rounded-sm placeholder-white" 
                    type="password"/>
                    <p className="text-red-400">{errors.password?.message}</p>
                <div className="flex items-center my-5">
                    <input
                        {...register("check")}
                        type="checkbox" 
                        className="form-checkbox rounded-sm border-none h-5 w-5 text-green-400 focus:outline-none"/>
                    <span className="ml-2 text-white">Keep session open</span>
                </div>
                <p onClick={()=>onClick('signup')} className="text-white underline cursor-pointer">You do not have an account?</p>
                <button
                    className="bg-white duration-400 ease-in-out text-green-600 hover:text-white hover:bg-green-400 font-bold w-2/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Form;