import axios from "axios";

const API_KEY = process.env.REACT_APP_YT_API_KEY;
const URL = process.env.REACT_APP_BASEURL;

export default axios.create({
  baseURL: URL,
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY
  }
});
