import { GROUPID } from "../util/settings/config";
import { BasicServices } from "./basicServices";


export class QuanLyRapServices extends BasicServices {
    constructor(){
        super();
    }

    layDanhSachHeThongRap = () =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
}

export const quanLyRapServices = new QuanLyRapServices()