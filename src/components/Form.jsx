import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Form = ({handleForm, form})=>{

    return(
        <>
        {form
            ?<Login view={handleForm}/>
            :<SignUp view={handleForm}/>
        }
        </>
    );
};

export default Form;