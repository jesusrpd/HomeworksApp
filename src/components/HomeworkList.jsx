import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHomework } from "../reducers/homeworksReducer";

const HomeworkList = () => {
    const dispatch = useDispatch();
    const homeworks = useSelector((state) => state.homeworks);
    const loading = useSelector(({edit})=> edit.loading);

    return (
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
                        onDoubleClick={() => dispatch(deleteHomework(h._id))}
                        className="hover:bg-green-600 transition duration-300 hover:text-white ease-in-out"
                        key={i}>
                        <td className="border p-4 border-green-600">
                            {h.name}
                        </td>
                    </tr>
                )
            )}
        </>
    );
};

export default HomeworkList;
