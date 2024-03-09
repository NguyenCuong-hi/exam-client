import axios from 'axios';
import ConstantList from '../../appConfig';
const API_PATH = ConstantList.API_ENPOINT + '/api';
const API_PATH_USER = API_PATH + '/quan-ly-nguoi-dung';

// ------------------------- api của giáo viên -------------------------
const API_PATH_USER_TEACHER = API_PATH_USER + '/teacher';

export const getAllTeacherService = () => {
    var url = API_PATH_USER_TEACHER + '/getAll';
    return axios.get(url);
};

export const getTeacherById = (id) => {
    var url = API_PATH_USER_TEACHER + '/thong-tin-giao-vien/' + id;
    return axios.get(url);
};
export const addTeacherService = (item) => {
    var url = API_PATH_USER_TEACHER + '/add-teacher';
    return axios.post(url, item);
};

export const updateTeacherItem = (item) => {
    var url = API_PATH_USER_TEACHER + '/update-teacher';
    return axios.post(url, item);
};

export const deleteTeacherService = (id) => {
    var url = API_PATH_USER_TEACHER + '/delete-teacher/' + id;
    return axios.post(url);
};

// ------------------------- api của học sinh ------------------------
const API_PATH_USER_STUDENT = API_PATH_USER + '/student';

export const getAllStudentService = () => {
    var url = API_PATH_USER_STUDENT + '/getAll';
    return axios.get(url);
};

export const getStudentById = (id) => {
    var url = API_PATH_USER_STUDENT + '/thong-tin-sinh-vien/' + id;
    return axios.get(url);
};
export const addStudentService = (item) => {
    var url = API_PATH_USER_STUDENT + '/add-student';
    return axios.post(url, item);
};

export const updateStudentItem = (item) => {
    var url = API_PATH_USER_STUDENT + '/update-student';
    return axios.post(url, item);
};

export const deleteStudentService = (id) => {
    var url = API_PATH_USER_STUDENT + '/delete-student/' + id;
    return axios.post(url);
};
