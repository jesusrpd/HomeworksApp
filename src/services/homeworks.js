import axios from "axios";
import Cookie from "universal-cookie";
import { PATH_API } from "../routes/paths.routes";
const cookies = new Cookie();

const getHomeworks = async () => {
    const res = await axios.get(`${PATH_API}/homeworks`, {
        headers: {
            authorization: `bearer ${cookies.get("token")}`,
            "If-Modified-Since": new Date(),
        },
    });
    return res.data;
};

const deleteHomework = async h => {
    const res = await axios.delete(`${PATH_API}/homeworks/${h}`, {
        headers: {
            authorization: `bearer ${cookies.get("token")}`,
            "If-Modified-Since": new Date(),
        },
    });

    return res.data;
};


const addHomework = async newHomework =>{
    const res = await axios.post(
        `${PATH_API}/homeworks`,
        { name: newHomework },
        {
            headers: {
                authorization: `bearer ${cookies.get("token")}`,
                "If-Modified-Since": new Date(),
            },
        }
    );

    return res.data;
};

export default { getHomeworks , deleteHomework, addHomework};
