import httpClient from ".";

export const getUserRequest = async (userId = "0") => {
  const response = await httpClient.get(`/users/${userId}`);
  return response.data.data;
};
