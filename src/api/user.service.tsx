import axios from "./api_config/axios.config";

/*lms config auth*/
let base_url = "https://mocky.io/";
export const getAuthProfile = () => {};
export const getUsers = async () => {
  return axios
    .get("https://run.mocky.io/v3/663b6779-31a8-4e8c-aa84-2074c908c393")
    .then((res) => res.data);
};
