import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';
import {PATH_API, PATH_DASHBOARD} from '../routes/paths.routes';
import Cookie from 'universal-cookie';
import {useHistory} from 'react-router-dom';

const schema = yup.object().shape({
    username: yup.string().required("username required"),
    email: yup.string().required("email required"),
    password: yup.string().required("passsword required"),
});

const SignUp = ({onClick})=>{

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    let history = useHistory();

    const onSubmit = async data =>{
        const res = await axios.post(`${PATH_API}/user/signup`, data);
        const cookies = new Cookie();
        cookies.set('auth', res.data.auth, {path: '/'});
        cookies.set('token', res.data.token, {path: '/'});
        cookies.set('user', res.data.username, {path: '/'});
        history.push(`${PATH_DASHBOARD}`);
    };

    return(
        <div className="w-2/5">
            <h2 className="text-white text-center font-black text-4xl mb-5">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input
                    {...register("username")} 
                    placeholder="Username"
                    className="text-white bg-transparent border-white focus:border-white focus:ring-0 focus:outline-none border-solid border-4 p-2 rounded-sm mt-5 placeholder-white" 
                    type="text" />
                <p className="text-red-400">{errors.username?.message}</p>
                <input
                    {...register("email")} 
                    placeholder="Gmail" 
                    className="text-white bg-transparent border-white focus:border-white focus:ring-0 focus:outline-none border-solid border-4 p-2 rounded-sm mt-5 placeholder-white" 
                    type="email" />
                    <p className="text-red-400">{errors.email?.message}</p>
                <input 
                    {...register("password")}
                    placeholder="Password" 
                    className="text-white bg-transparent border-white focus:border-white focus:ring-0 focus:outline-none border-solid border-4 p-2 mt-5 rounded-sm placeholder-white" 
                    type="password"/>
                <p className="text-red-400">{errors.password?.message}</p>
                <div className="flex items-center my-5">
                    <input type="checkbox" className="form-checkbox rounded-sm border-none h-5 w-5 text-green-400 focus:outline-none"/>
                    <span className="ml-2 text-white">Keep session open</span>
                </div>
                <p onClick={()=>{onClick('login')}} className="text-white underline cursor-pointer">Do you already have an account?</p>
                <button 
                    className="bg-white duration-400 ease-in-out text-green-600 hover:text-white hover:bg-green-400 font-bold w-2/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default SignUp;