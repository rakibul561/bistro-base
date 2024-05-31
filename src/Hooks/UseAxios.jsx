import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import useAuth from './UseAuth';

const UseAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        axiosSecure.interceptors.response.use(
            function (response) {
                return response;
            },
            function (error) {
                const status = error.response.status;
                console.log('status error in the interceptors ', status);
                if (status === 401 || status === 403) {
                    logOut().then(() => {
                        navigate('/login');
                    });
                }
                return Promise.reject(error);
            }
        );
    }, [navigate, logOut]);

    return axiosSecure;
};

export default UseAxiosSecure;
