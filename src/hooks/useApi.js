import axios from "axios";
const api = axios.create({
  baseURL: "URL_AQUI",
  // baseURL: "http://172.16.7.121:3000",
});
const token = localStorage.getItem("token");
api.defaults.headers.common = { Authorization: `bearer ${token}` };

// usar axios interceptor

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("interceptor: ", response);
    if (response.status === 422) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return (window.location.href = "/login");
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const useApi = () => ({
  // token

  //login
  signin: async (email, password) => {
  
    const response = await api.post("/login", {
      email: email,
      senha: password,
    });
    return response.data;
  },

  getUser: async () => {
    const response = await api.get("/users");
    return response.data;
  },

  getFluxoDeEntrada: async () => {
    const response = await api.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  },

  getRecords: async () => {
    const response = await api.get("/records");
    return response.data;
  },
});
