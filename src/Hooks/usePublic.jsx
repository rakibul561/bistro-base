import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://bistro-boss-server-inky-chi.vercel.app'
})

const usePublic = () => {
  return axiosPublic;
};

export default usePublic;