import React, { useEffect } from "react";
import Homeworks from "../components/Homeworks";
import { getHomeworks } from "../reducers/homeworksReducer";
import { useDispatch, useSelector } from "react-redux";
import { handleEdit } from "../reducers/editReducers";
import Welcome from "../components/Welcome";

const Dashboard = () => {
    const dispatch = useDispatch();
    const homeworks = useSelector((state) => state.homeworks);

    useEffect(() => {
        dispatch(getHomeworks());
        dispatch(handleEdit("NOTLOADING"));
    }, [dispatch]);

    return (
        <div className="h-screen">
            <Welcome />
            <div className="grid grid-cols-2 w-full gap-4 mt-20">
                <Homeworks />
                <p className="shadow-2xl w-max h-6 rounded-md px-4 text-white bg-green-600 font-bold">
                    Homeworks: {homeworks.length}
                </p>
            </div>
        </div>
    );
};

export default Dashboard;