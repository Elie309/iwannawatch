import axiosInstance from '../data/axiosInstance';
import { getRefreshToken } from './TokenHandler';


export default async function isSessionActive(): Promise<boolean> {

    if (!getRefreshToken()) { return false; }

    try {
        return axiosInstance.get('/sessions').then(res => {
            return res.data;
        }).then(data => {
            return data.success;
        }).catch(err => {
            return false;
        });

    } catch (e: any) {
        return false;
    }


}