import Axios from "axios";
import { useUserStore } from "../store/useStore";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axios.interceptors.request.use((config) => {
  const token = useUserStore.getState().user?.token;
  config.headers.token = token;
  return config;
});

export default axios;
