import app_apis from "../index.js";
import axios from "axios";

const fetchDataFromApi = (name) => {
    let url = null;
    const filteredApi = app_apis.find(item => item.name === name);
    if(filteredApi){
        url = filteredApi.path;
    }
    return axios.get(url);
}

export default fetchDataFromApi;