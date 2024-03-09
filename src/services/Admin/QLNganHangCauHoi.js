import axios from 'axios';
import ConstantList from '../../appConfig';
const API_PATH = ConstantList.API_ENPOINT;

const API_PATH_QUESTION = API_PATH + '/exam-question';

// chức năng với danh sách cách môn
export const getAllDanhSachNganHangService = () => {
    var url = API_PATH_QUESTION + '/getAll';
    return axios.get(url);
};
export const addDanhSachNganHangService = (item) => {
    var url = API_PATH_QUESTION + '/them-danh-sach';
    return axios.post(url, item);
};

// export const updateDanhSachNganHangItem = (item) => {
//     var url = API_PATH_USER_STUDENT + '/update-student';
//     return axios.post(url, item);
// };

export const deleteDanhSachNganHangService = (id) => {
    var url = API_PATH_QUESTION + '/delete-danh-sach/' + id;
    return axios.post(url);
};

// chức năng với các câu hỏi trong môn đó

export const getListQuestOfDanhSachNganHangService = (id) => {
    var url = API_PATH_QUESTION + '/get-list-questions/' + id;
    return axios.get(url);
};

export const addQuestService = (item) => {
    var url = API_PATH_QUESTION;
    return axios.post(url, item);
};

export const updateQuestItem = (id, item) => {
    var url = API_PATH_QUESTION + '/' + id;
    return axios.put(url, item);
};

export const deleteQuestService = (id) => {
    var url = API_PATH_QUESTION + '/' + id;
    return axios.delete(url);
};
