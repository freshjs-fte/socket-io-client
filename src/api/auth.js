import httpClient from ".";

export const loginRequest = async (data) => {
  const response = await httpClient.post("/auth/login", data);

  return response.data.data;
};

export const registerRequest = async (data) => {
  const response = await httpClient.post("/auth/register", data);

  return response.data.data;
};
