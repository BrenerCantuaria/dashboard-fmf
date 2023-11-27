import axios from "axios";
const api = axios.create({
  // baseURL: "URL_AQUI",
 
});
const token = localStorage.getItem("token");
api.defaults.headers.common = { Authorization: `bearer ${token}` };

// usar axios interceptor

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("interceptor: ", response);
    if (response.status == 422) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return (window.location.href = "/login");
    }
    console.log("interceptor : ",response)
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const useApi = () => ({
  //login
  signin: async (email, password) => {
    return{ user:{nome:"User", email:"user@teste.com", tipo: "Administrador"}, token:"tokenDeTeste"}
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
  getVisitas: async ()=>{
    const response = await api.get("/visits")
    return response.data
  },
  getTeste: async () => {
    const response = await api.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  },

  getRecords: async () => {
    const response = await api.get("/records");
    return response.data;
  },
  /*
    - criar uma rota 
    - /button/:value
    - usar tamplete string
    - receber valores abaixo:
    - DEVE SER UM BOTÃO PARA CADA PARÂMETRO
    - Open,close
    - R1ON,R1OFF,R2ON,R2OFF 
  */
  getButton: async (value) =>{
    console.log("value recebido : ",value)
    const response = await api.get(`/button/${value}`)
    return response.data
  }
});
