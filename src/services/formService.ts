import axios from "axios";

const formAPI = axios.create({
  baseURL: "http://localhost:3000",
});

export const postFormAPI = async (payload: Record<string, unknown>) => {
  const response = await formAPI.post("/basicForm/", { ...payload });
  return response.status;
};

export const getFormAPI = async () => {
  try {
    const response = await formAPI.get("/basicForm");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
