import React from "react";

const ButtonHomework = ({add, addHomework, handleAdd}) => (
    <>
        {add ? (
            <>
                <button
                    onClick={addHomework}
                    className="bg-green-600 text-white hover:bg-green-400 font-bold w-1/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                    Add
                </button>
                <button
                    onClick={handleAdd}
                    className="bg-green-600 text-white hover:bg-green-400 font-bold w-1/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                    Cancel
                </button>
            </>
        ) : (
            <button
                onClick={handleAdd}
                className="bg-green-600 text-white hover:bg-green-400 font-bold w-1/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                Add homework
            </button>
        )}
    </>
);

export default ButtonHomework;
