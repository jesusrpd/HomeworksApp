import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHomework } from "../reducers/homeworksReducer";
import { handleEdit } from "../reducers/editReducers";

const ButtonHomework = () => {
    const newHomework = useSelector((state) => state.newHomework);
    const edit = useSelector(({ edit }) => edit.add);
    const dispatch = useDispatch();

    const addHomework = () => {
        if (newHomework !== "") {
            dispatch(createHomework(newHomework));
            dispatch(handleEdit("NOTADD"));
            dispatch(handleEdit("NOERROR"));
        } else {
            dispatch(handleEdit("ERROR"));
        }
    };

    return (
        <>
            {edit ? (
                <>
                    <button
                        onClick={addHomework}
                        className="bg-green-600 text-white hover:bg-green-400 font-bold w-1/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                        Add
                    </button>
                    <button
                        onClick={() => dispatch(handleEdit("NOTADD"))}
                        className="bg-green-600 text-white hover:bg-green-400 font-bold w-1/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                        Cancel
                    </button>
                </>
            ) : (
                <button
                    onClick={() => dispatch(handleEdit("ADD"))}
                    className="bg-green-600 text-white hover:bg-green-400 font-bold w-1/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                    Add homework
                </button>
            )}
        </>
    );
};

export default ButtonHomework;