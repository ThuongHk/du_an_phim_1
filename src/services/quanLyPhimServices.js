import { GROUPID } from "../util/settings/config";
import { BasicServices } from "./basicServices";



export class QuanLyFimServices extends BasicServices {
    constructor(){
        super();
    }

    layDanhSachFim = () =>{
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}

export const quanLyFimServices = new QuanLyFimServices();