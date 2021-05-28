import React, { useState, useEffect } from "react";
import Homeworks from "../components/Homeworks";
import Cookie from "universal-cookie";
import axios from "axios";
import { PATH_API } from "../routes/paths.routes.js";
import Tooltip from "../components/Tooltip";

const Dashboard = () => {
    // const cookies = new Cookie();
    const [username, setUsername] = useState("");
    const [newUser, setNewUser] = useState("");
    const [add, setAdd] = useState(false);
    const [newHomework, setNewHomework] = useState("");
    const [error, setError] = useState(false);
    const [homeworks, setHomeworks] = useState([]);
    const [editName, setEditName] = useState(false);

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

    useEffect(() => {
        const cookies = new Cookie();
        setUsername(cookies.get("user"));
    }, []);

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

    const handleName = (e) => {
        setNewUser(e.target.value);
    };

    const handleCancel = () => {
        const cookies = new Cookie();
        setEditName(!editName);
        setUsername(cookies.get("user"));
    };

    const editUsername = () => {
        setEditName(!editName);
    };

    const handleConfirm = async () => {
        const cookies = new Cookie();
        cookies.remove("user", { path: "/" });
        const res = await axios.post(
            `${PATH_API}/user/username`,
            { username: newUser },
            {
                headers: {
                    authorization: `bearer ${cookies.get("token")}`,
                    "If-Modified-Since": new Date(),
                },
            }
        );
        cookies.set('user', res.data.username, {path: '/'});
        window.location.href = '/dashboard';
    };

    return (
        <>
            <div className="flex items-center justify-around my-5">
                <h2 className="text-6xl m-14 text-green-600 font-black flex items-center">
                    <p className="inline mr-2">¡Welcome</p>{" "}
                    {editName ? (
                        <div>
                            <input
                                className="bg-gray-200 border-none rounded-xl mt-4 mx-4 focus:ring-0 focus:outline-none"
                                type="text"
                                onChange={handleName}
                            />
                            <button
                                className="bg-green-600 text-white text-xl p-1 m-1 rounded-md hover:bg-green-400"
                                onClick={handleConfirm}>
                                Confirm
                            </button>
                            <button
                                className="bg-red-600 text-white text-xl p-1 m-1 rounded-md hover:bg-red-400"
                                onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        username
                    )}
                    !!
                </h2>
                <Tooltip editName={editUsername} />
            </div>
            <div className="grid grid-cols-2 w-full gap-4 mt-20">
                <Homeworks
                    homeworks={homeworks}
                    handleDelete={handleDelete}
                    add={add}
                    error={error}
                    handleAdd={handleAdd}
                    handleChange={handleChange}
                    addHomework={addHomework}
                />
                <p className="shadow-2xl w-max h-6 rounded-md px-4 text-white bg-green-600 font-bold">
                    Homeworks: {homeworks.length}
                </p>
            </div>
        </>
    );
};

export default Dashboard;
