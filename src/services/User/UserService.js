import axios from 'axios';
import ConstantList from '../../appConfig';
const API_PATH = ConstantList.API_ENPOINT + '/api';

const API_PATH_USER = API_PATH + '/nguoi-dung';

export const getById = (id) => {
    var url = API_PATH_USER + '/thong-tin-sinh-vien/' + id;
    return axios.get(url);
};
export const getExaminer = (token) => {
    const url = API_PATH + '/v1/exam-test/exam-test';
    return axios.get(url, token);
};
export const updateInfo = (item) => {
    var url = API_PATH_USER + '/update-info';
    return axios.post(url, item);
};

// api của học sinh
export const getTest = () => {
    var url = API_PATH_USER + '/bai-thi';
    return axios.get(url);
};

export const getUserDetail = (token) => {
    var url = API_PATH_USER + '/thong-tin-sinh-vien/';
    return axios.get(url, token, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
};
// export const submitTest = (item) => {
//     var url = API_PATH_USER_STUDENT + '/submit-bai-thi';
//     return axios.post(url, item);
// };
