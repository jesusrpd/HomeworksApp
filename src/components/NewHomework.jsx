import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeHomework } from "../reducers/newHomeworkReducer";

const NewHomework = () => {
    const dispatch = useDispatch();
    const add = useSelector( ({edit}) => edit.add);
    const error = useSelector(({edit}) => edit.error);

    const handleChange = async (e) => {
        const name = e.target.value;
        dispatch(changeHomework(name));
    };

    return (
        <>
            {add ? (
                <tr>
                    <td className="border p-4 border-green-600">
                        <input
                            type="text"
                            onChange={handleChange}
                            name="homework"
                            className="bg-gray-300 border-none w-full rounded-xl focus:ring-0 focus:outline-none"
                        />
                        <p className="text-red-400">
                            {error ? "write the name homework" : null}
                        </p>
                    </td>
                </tr>
            ) : null}
        </>
    );
};

export default NewHomework;
