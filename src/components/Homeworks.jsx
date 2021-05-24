import React from "react";
import ButtonHomework from "../components/ButtonHomework";
import NewHomework from '../components/NewHomework';
import HomeworkList from '../components/HomeworkList';

const Homeworks = ({homeworks, handleDelete, handleChange, add, error, addHomework, handleAdd}) => {

    return (
        <div className="flex flex-col">
            <table className="table-auto w-6/12 m-auto border border-collapse shadow-2xl border-green-600 nth-child:text-white nth-child:bg-red-400 transform :rotate-45">
                <thead>
                    <tr className="bg-green-600">
                        <th className="border p-4 border-green-600 text-white">
                            Homeworks
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <HomeworkList
                        homeworks={homeworks}
                        handleDelete={handleDelete}
                    />
                    <NewHomework
                        add={add}
                        handleChange={handleChange}
                        error={error}
                    />
                </tbody>
            </table>
            <ButtonHomework
                add={add}
                addHomework={addHomework}
                handleAdd={handleAdd}
            />
        </div>
    );
};

export default Homeworks;
