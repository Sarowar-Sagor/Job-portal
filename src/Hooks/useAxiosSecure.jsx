import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-mu.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.status === 401 || error.status === 403) {
            signOutUser()
            .then(() => {
                navigate('/login');
            })
            // .catch(err => console.log(err))
        }
        return Promise.reject(error);
    })

    return axiosInstance;
};

export default useAxiosSecure;