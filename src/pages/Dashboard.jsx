import React, { useState } from 'react';
import {ReactComponent as TooltipIcon} from '../assets/SVG/tooltip.svg';

const Dashboard = ()=>{

    const [add, setAdd] = useState(false);
    const [newHomework, setNewHomework] = useState('');
    const homeworks = ['Estudiar', 'Leer', 'Trabajar', 'Ejercisio', 'YT'];

    const handleDelete = h =>{
        homeworks.pop(h);
    };

    const handleAdd = ()=>{
        setAdd(!add);
    };

    const addHomework = ()=>{
        homeworks.push(newHomework);
        setAdd(!add);
    };

    const handleChange = e =>{
        setNewHomework(e.target.value);
    };
    
    return(
        <>
            <div className="flex align-middle justify-around my-5">
                <h2 className="text-6xl m-14 text-green-600 font-black ">¡Welcome Jesús!!</h2>
                <TooltipIcon width="100px"/>
            </div>
            <div className="grid grid-cols-2 w-full gap-4 mt-20">
                <div className="flex flex-col">
                    <table className="table-auto w-6/12 m-auto border border-collapse shadow-2xl border-green-600 nth-child:text-white nth-child:bg-red-400 transform :rotate-45">
                        <thead>
                            <tr className="bg-green-600">
                                <th className="border p-4 border-green-600 text-white">Homeworks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {homeworks.map((homework,i) =>(
                                <tr onDoubleClick={()=> handleDelete(homework)} className="hover:bg-green-600 hover:text-white ease-in-out" key={i}>
                                    <td className="border p-4 border-green-600">{homework}</td>
                                </tr>
                            ))}
                            {add 
                                ?<tr>
                                    <td className="border p-4 border-green-600">
                                        <input type="text" onChange={handleChange} name="homework" className="bg-transparent border-none border-b-4 border-green-600 focus:ring-0 focus:outline-none"/>
                                    </td>
                                </tr>
                                : null
                            }
                        </tbody>                  
                    </table>
                    {add 
                        ?<>
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
                        :<button
                            onClick={handleAdd}
                            className="bg-green-600 text-white hover:bg-green-400 font-bold w-1/4 m-auto mt-10 p-1 rounded-md focus:outline-none">
                            Add homework
                        </button> 
                    } 
                </div>
                <p className="shadow-2xl w-max h-6 rounded-md px-4 text-white bg-green-600 font-bold">Homeworks: {homeworks.length}</p>
            </div>
        </>
    );
};

export default Dashboard;