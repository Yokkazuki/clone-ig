import axios from "axios";

export const getStories = () => {
  return axios
    .get("http://localhost:3000/stories", { timeout: 500 })
    .then((res) => res.data);
};
