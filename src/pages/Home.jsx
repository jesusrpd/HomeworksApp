import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Presentation from "../components/Presentation";
import Cookie from "universal-cookie";
import { useHistory } from "react-router-dom";
import { PATH_DASHBOARD } from "../routes/paths.routes";

const Home = () => {

	const [form, setForm] = useState(true);
    let history = useHistory();

    useEffect(() => {
        const cookies = new Cookie();
        if (cookies.get("user")) {
            history.push(`${PATH_DASHBOARD}`);
        }
    }, [history]);

    const handleForm = () => setForm(!form);

    return (
        <div className="h-screen w-screen bg-green-600">
            <div className="bg-banner bg-no-repeat bg-cover bg-center h-full">
                <div className="grid grid-cols-2 gap-4 w-full place-items-center h-screen">
                    <Presentation view={handleForm}/>
                    <Form form={form} handleForm={handleForm}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
