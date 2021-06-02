import React, {useEffect} from "react";
import Modal from "../components/Modal";
import Tooltip from "../components/Tooltip";
import { getUsername } from "../reducers/usernameReducer";
import {useSelector, useDispatch} from 'react-redux';
import { handleEdit } from "../reducers/editReducers";

const Welcome = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.username);
    const user = useSelector(({ edit }) => edit.user);
    const modal = useSelector(({ edit }) => edit.modal);

    useEffect(() => {
        dispatch(getUsername());
    }, [dispatch]);

    return (
        <>
            {modal ? (
                <Modal onClick={() => dispatch(handleEdit("NOTMODAL"))} />
            ) : null}
            {
                <div className="flex items-center justify-around my-5">
                    <h2 className="text-6xl m-14 text-green-600 font-black flex items-center">
                        <p className="inline mr-2">¡Welcome</p>{" "}
                        {user ? (
                            <div>
                                <input
                                    className="bg-gray-200 border-none rounded-xl mt-4 mx-4 focus:ring-0 focus:outline-none"
                                    type="text"
                                />
                                <button className="bg-green-600 text-white text-xl p-1 m-1 rounded-md hover:bg-green-400">
                                    Confirm
                                </button>
                                <button
                                    className="bg-red-600 text-white text-xl p-1 m-1 rounded-md hover:bg-red-400"
                                    onClick={() =>
                                        dispatch(handleEdit("NOTUSER"))
                                    }>
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            username
                        )}
                        !!
                    </h2>
                    <Tooltip />
                </div>
            }
        </>
    );
};

export default Welcome;
