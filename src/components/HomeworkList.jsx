import React from "react";

const HomeworkList = ({ homeworks, handleDelete, loading }) => (
    <>
        {homeworks.map((h, i) =>
            loading ? (
                <p className="p-5 w-full bg-green-600 rounded-md animate-pulse"></p>
            ) : (
                <tr
                    onDoubleClick={() => handleDelete(h._id)}
                    className="hover:bg-green-600 hover:text-white ease-in-out"
                    key={i}>
                    <td className="border p-4 border-green-600">{h.name}</td>
                </tr>
            )
        )}
    </>
);

export default HomeworkList;
