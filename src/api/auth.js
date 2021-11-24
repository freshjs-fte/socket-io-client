import httpClient from ".";

export const loginRequest = async (data) => {
  const response = await httpClient.post("/auth/login", data);

  return response.data;
};

export const registerRequest = async (data) => {};
