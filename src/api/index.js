import axios from "axios";
import history from "../browserHistory";

export const domain = "192.168.1.148:5000";

const httpClient = axios.create({
  baseURL: `http://${domain}/api`,
});

/* 
  add interceptors

  на каждый запрос или ответ вешается промежуточный обработчик
*/

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

httpClient.interceptors.response.use(
  (response) => {
    // save tokens
    if (response.data && response.data.tokenPair) {
      localStorage.setItem("accessToken", response.data.tokenPair.accessToken);
      localStorage.setItem(
        "refreshToken",
        response.data.tokenPair.refreshToken
      );
    }
  },
  (err) => {
    const refreshToken = localStorage.getItem("refreshToken");
    // receive auth errorMessage
    if (err.status === 403 && refreshToken) {
      // redirect user back
      httpClient.put("/auth/refresh", {
        refreshToken,
        redirectTo: window.location.pathname,
      });
    }

    // refresh просрочился
    if (err.status === 419) {
      logout();
      history.push("/login");
    }

    Promise.reject(err);
  }
);

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export default httpClient;
