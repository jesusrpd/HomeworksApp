import React, {useState, useEffect} from "react";
import { ReactComponent as TooltipIcon } from "../assets/SVG/tooltip.svg";
import Homeworks from '../components/Homeworks';
import Cookie from 'universal-cookie';
import axios from 'axios';
import {PATH_API} from '../routes/paths.routes.js';

const Dashboard = () => {

    const [username, setUsername] = useState('');
    const [add, setAdd] = useState(false);
    const [newHomework, setNewHomework] = useState("");
    const [error, setError] = useState(false);
    const [homeworks, setHomeworks] = useState([]);

    const getHomeworks = async () => {
        const cookies = new Cookie();
        const res = await axios.get(`${PATH_API}/homeworks`, {
            headers: {
                authorization: `bearer ${cookies.get("token")}`,
                "If-Modified-Since": new Date(),
            },
        });
        setHomeworks(res.data);
    };

    useEffect(() => {
        getHomeworks();
    }, []);

    useEffect(()=>{
        const cookies = new Cookie();
        setUsername(cookies.get('user'));
    },[])

    const handleDelete = async (h) => {
        const cookies = new Cookie();
        await axios.delete(`${PATH_API}/homeworks/${h}`, {
            headers: {
                authorization: `bearer ${cookies.get("token")}`,
                "If-Modified-Since": new Date(),
            },
        });
        getHomeworks();
    };

    const handleAdd = () => setAdd(!add);

    const addHomework = async () => {
        if (newHomework !== "") {
            const cookies = new Cookie();
            axios.post(
                `${PATH_API}/homeworks`,
                { name: newHomework },
                {
                    headers: {
                        authorization: `bearer ${cookies.get("token")}`,
                        "If-Modified-Since": new Date(),
                    },
                }
            );
            getHomeworks();
            setNewHomework("");
            setAdd(!add);
        } else {
            setError(true);
        }
    };

    const handleChange = (e) => {
        setNewHomework(e.target.value);
        setError(false);
    };

    return (
        <>
            <div className="flex align-middle justify-around my-5">
                <h2 className="text-6xl m-14 text-green-600 font-black ">
                    ¡Welcome {username}!!
                </h2>
                <TooltipIcon width="100px" />
            </div>
            <div className="grid grid-cols-2 w-full gap-4 mt-20">
                <Homeworks 
                    homeworks={homeworks} 
                    handleDelete={handleDelete} 
                    add={add} 
                    error={error} 
                    handleAdd={handleAdd}
                    handleChange={handleChange} 
                    addHomework={addHomework}/>
                <p className="shadow-2xl w-max h-6 rounded-md px-4 text-white bg-green-600 font-bold">
                    Homeworks: {homeworks.length}
                </p>
            </div>
        </>
    );
};

export default Dashboard;
