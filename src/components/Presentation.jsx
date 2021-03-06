import React from "react";

const Presentation = ({ view }) => (
    <div className="">
        <h1 className="text-7xl text-white font-black">Homeworks</h1>
        <p className="text-white text-2xl my-5">
            The best platform for the organization
            <br />
            with your homework.
        </p>
        <button
            onClick={view}
            className="text-green-600 duration-400 ease-in-out shadow-2xl w-16 p-1 font-bold rounded-md hover:bg-green-400 hover:text-white bg-white">
            Start
        </button>
    </div>
);

export default Presentation;
