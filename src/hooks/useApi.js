import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const useApi = () => ({
  //token
  validateToken: async (token) => {
    const response = await api.post('/validate',{token})
    return response.data
  },
  //login
  signin: async (email,password) => {
    return {
      user: {id:1, email: "brener@gmail.com", password: "1111111"},
      token:"12345"
    }
    const dataUser = {email,password}
    const response = await api.post("/posts",dataUser);
    return response.data
  },
  logout: async () => {
    const response = await api.post("/logout")
    return response.data
  }

});
