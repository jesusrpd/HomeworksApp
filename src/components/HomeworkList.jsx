import React from "react";

const HomeworkList = ({homeworks, handleDelete}) => (
    <>
        {homeworks.map((h, i) => (
            <tr
                onDoubleClick={() => handleDelete(h._id)}
                className="hover:bg-green-600 hover:text-white ease-in-out"
                key={i}>
                <td className="border p-4 border-green-600">{h.name}</td>
            </tr>
        ))}
    </>
);

export default HomeworkList;
