import axios from 'axios';
import ConstantList from '../../appConfig';
import Constant from '../../constants/Constants';
const API_PATH = ConstantList.API_ENPOINT + '/api';
const API_PATH_LOGIN = API_PATH + '/login';

export const login = (item) => {
    var url = API_PATH_LOGIN;
    return axios.post(url, item);
};
