import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Form = ()=>{
    const [form, setForm] = useState(false);

    const viewForm = v =>{
        if (form) {
            setForm('signup');
        }else{
            setForm('login');
        };
    };

    return(
        <>
        {form
            ?<Login onClick={viewForm}/>
            :<SignUp onClick={viewForm}/>
        }
        </>
    );
};

export default Form;