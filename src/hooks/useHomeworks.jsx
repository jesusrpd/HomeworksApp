import { useEffect, useState } from 'react';
import Cookie from 'universal-cookie';
import axios from 'axios';
import {PATH_API} from '../routes/paths.routes';

const useHomeworks = ()=>{
    const [homeworks, setHomeworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getHomeworks = async ()=>{
            const cookies = new Cookie();
            const res = await axios.get(`${PATH_API}/homeworks`, {
                headers: {
                    authorization: `bearer ${cookies.get("token")}`,
                    "If-Modified-Since": new Date(),
                },
            });
            setHomeworks(res.data);
            setLoading(false);
        };
        getHomeworks();
    },[]);

    return {homeworks, loading};
};

export default useHomeworks;