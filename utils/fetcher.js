import axios from "axios";

const mode = process.env.NODE_ENV === "production" ? "https://transearch22.herokuapp.com/" : "http://localhost:5000/";

const API = async (method = "post", path, payload) => {
  return await axios[method](`${mode}${path}`, payload)
    .then((res) => res.data)
    .catch((err) => {
      // console.log("AXIOS ERROR: ", err);
      // return err;
      throw err;
    });
};

export default API;
