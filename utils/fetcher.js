import axios from "axios";

const mode = process.env.NODE_ENV === "production" ? "https://transearch.herokuapp.com/" : "http://localhost:5000/";

const API = async (method = "post", path, payload) => {
  return await axios[method](
    `${mode}${path}`,
    payload
    // {
    //   headers: {
    //     "Content-Type": "application/json;charset=UTF-8",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // }
  )
    .then((res) => res.data)
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    });
};

export default API;
