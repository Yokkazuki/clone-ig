import axios from "axios";

export const getPosts = async () => {
  return await axios
    .get("http://localhost:3000/posts", { timeout: 500 })
    .then((res) => res.data);
};
