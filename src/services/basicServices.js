import axios from "axios";
import { DOMAIN, ACCESS_TOKENT } from "../util/settings/config";

export class BasicServices {
    get = (url,model) =>{
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            data: model,
            hedaers: {'Authorization' : 'Bearer' + localStorage.getItem(ACCESS_TOKENT)}
        })
    }
    post = (url,model) =>{
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKENT)}
        })
    }

    put = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKENT)}
        })
    }
    delete = (url,model)=>{
        return axios({
            url: `${DOMAIN}/${url}`,
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKENT)}
        })
    }
}