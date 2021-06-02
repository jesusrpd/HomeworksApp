import React from "react";

const Modal = ({ onClick }) => (
    <div className="absolute w-full h-full bg-gray-800 opacity-90 z-20">
        <div
            className="absolute w-1/3 top-1/4 left-1/3 z-30 bg-white rounded-md shadow-md p-10 flex justify-between 
            items-center animate-aparecer">
            <p>Para ver los cambios reflejados cierre e inicie seión.</p>
            <span
                onClick={onClick}
                className="text-green-600 text-3xl cursor-pointer">
                X
            </span>
        </div>
    </div>
);

export default Modal;