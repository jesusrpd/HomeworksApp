import React from "react";

const HomeworkList = ({ homeworks, handleDelete, loading }) => (
    <>
        {homeworks.map((h, i) =>
            loading ? (
                <tr key={i}>
                    <td>
                        <p className="p-2 m-4 bg-green-600 rounded-md animate-pulse"></p>
                    </td>
                </tr>
            ) : (
                <tr
                    onDoubleClick={() => handleDelete(h._id)}
                    className="hover:bg-green-600 transition duration-300 hover:text-white ease-in-out"
                    key={i}>
                    <td className="border p-4 border-green-600">{h.name}</td>
                </tr>
            )
        )}
    </>
);

export default HomeworkList;
