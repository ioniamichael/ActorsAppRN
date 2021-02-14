import {FETCH_ACTORS} from "../types";
import apiService from "../../services/apiService";

export const fetchActors = (searchTerm) => (dispatch) => new Promise(async (resolve, reject) => {
    try {
        const response = await apiService.get('/search/person?api_key=35689b99668862f43e7564605f089bc7', {
            params: {
                query: searchTerm
            }
        })
        const data = response.data;
            dispatch({
                type: FETCH_ACTORS,
                payload: data.results
            });
        resolve(data.results)
    }catch (e) {
        reject(e)
    }
})
