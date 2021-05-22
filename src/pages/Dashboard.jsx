import React from 'react';

const Dashboard = ()=>(
    <>
        <h2 className="text-6xl m-14 text-green-600 font-black ">¡Welcome Jesús!!</h2>
        <div className="grid">
            <table class="table-auto w-4/12 m-auto border border-collapse border-green-600 nth-child:bg-red-400 transform :rotate-45">
                <caption className="text-3xl m-3 text-green-600">Homeworks</caption>
                <thead>
                    <tr className="bg-green-600">
                        <th className="border border-green-600">Homework</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-green-600">Intro to CSS</td>
                    </tr>
                    <tr class="bg-green-600">
                        <td className="border border-green-600">A Long and Winding Tour of the History of UI Frameworks and Tools and</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600">Intro to JavaScript</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
);

export default Dashboard;