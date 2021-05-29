import axios from "axios";
import Cookie from "universal-cookie";
import { PATH_API } from "../routes/paths.routes";
const cookies = new Cookie();

const setUser = async (newUser) => {
    await axios.post(
        `${PATH_API}/user/username`,
        { username: newUser },
        {
            headers: {
                authorization: `bearer ${cookies.get("token")}`,
                "If-Modified-Since": new Date(),
            },
        }
    );
};

export default { setUser };
