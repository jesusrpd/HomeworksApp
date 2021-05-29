import React, { useState, useEffect } from "react";
import Homeworks from "../components/Homeworks";
import Cookie from "universal-cookie";
import Tooltip from "../components/Tooltip";
import Modal from "../components/Modal";
import homeworksServices from "../services/homeworks";
import userServices from "../services/user";

const Dashboard = () => {
    const [username, setUsername] = useState("");
    const [newUser, setNewUser] = useState("");
    const [add, setAdd] = useState(false);
    const [newHomework, setNewHomework] = useState("");
    const [error, setError] = useState(false);
    const [editName, setEditName] = useState(false);
    const [modal, setModal] = useState(false);
    const [homeworks, setHomeworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        homeworksServices.getHomeworks().then((homeworks) => {
            setLoading(false);
            setHomeworks(homeworks);
        });
    }, []);

    useEffect(() => {
        const cookies = new Cookie();
        setUsername(cookies.get("user"));
    }, []);

    const handleDelete = async (h) => {
        homeworksServices
            .deleteHomework(h)
            .then(() =>
                homeworksServices
                    .getHomeworks()
                    .then((homeworks) => setHomeworks(homeworks))
            );
    };

    const handleAdd = () => setAdd(!add);

    const addHomework = async () => {
        if (newHomework !== "") {
            homeworksServices
                .addHomework(newHomework)
                .then(
                    homeworksServices
                        .getHomeworks()
                        .then((homeworks) => setHomeworks(homeworks))
                );
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
        userServices.setUser(newUser).then(() => {
            setEditName(!editName);
            setModal(!modal);
        });
    };

    const handleModal = () => {
        setModal(!modal);
    };

    return (
        <div className="h-screen">
            {modal ? <Modal onClick={handleModal} /> : null};
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
                    loading={loading}
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
        </div>
    );
};

export default Dashboard;
