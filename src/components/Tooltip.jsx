import React from "react";
import { ReactComponent as TooltipIcon } from "../assets/SVG/tooltip.svg";
import Cookie from 'universal-cookie';
import auth from '../routes/auth';
import {PATH_HOME} from '../routes/paths.routes';
import {useHistory} from 'react-router-dom';

const Tooltip = ({editName}) => {
    let history = useHistory();
    const tooltip = document.querySelector("#tooltip");

    const handleLeave = () => {
        tooltip.classList.add("hidden");
    };

    const handleEnter = () => {
        tooltip.classList.remove("hidden");
    };

    const handleClick = ()=>{
        auth.logout(()=>{
            const cookies = new Cookie();
            cookies.remove('token', {path: '/'});
            cookies.remove('auth', {path: '/'});
            cookies.remove('user', {path: '/'});
            history.push(`${PATH_HOME}`);
        });
    };

    return (
        <div className="relative">
            <TooltipIcon
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                width="100px"></TooltipIcon>
            <span
                id="tooltip"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className=" w-40 hidden bg-green-600 absolute shadow-2xl ">
                <p onClick={handleClick} className="cursor-pointer hover:bg-green-400 p-4 text-white text-center">
                    Cerrar sesión
                </p>
                <p onClick={editName} className="cursor-pointer hover:bg-green-400 p-4 text-white text-center">
                    Cambiar nombre
                </p>
            </span>
        </div>
    );
};

export default Tooltip;
