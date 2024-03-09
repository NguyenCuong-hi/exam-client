import axios from 'axios';
import ConstantList from '../../appConfig';

const API_PATH = ConstantList.API_ENPOINT + '/api/v1';

const API_PATH2 = ConstantList.API_ENPOINT;

// ok ------------------------------------ phần giao diện Exam ------------------------------------
const API_PATH_EXAM = API_PATH + '/exam';

export const getAllExamService = () => {
    var url = API_PATH_EXAM + '/page?pageIndex=1&pageSize=999';
    // const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/';
    return axios.get(url);
};

export const getExamItemById = (id) => {
    var url = API_PATH_EXAM + id;
    return axios.get(url);
};

export const addExamService = (item) => {
    var url = API_PATH_EXAM;
    return axios.post(url, item);
};

export const updateExamItem = (id, item) => {
    var url = API_PATH_EXAM + '/' + id;
    return axios.put(url, item);
};

export const deleteExamService = (id) => {
    var url = API_PATH_EXAM + '/' + id;
    return axios.delete(url);
};

// oki ------------------------------------ phần ca thi ------------------------------------
const API_PATH_CATHI = API_PATH + '/exam-session';

export const getAllCaThiService = (pageIndex, pageSize) => {
    var url = API_PATH_CATHI + '/page?pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    return axios.get(url);
};

export const addCaThiService = (item) => {
    var url = API_PATH_CATHI;
    return axios.post(url, item);
};

export const updateCaThi = (id, item) => {
    var url = API_PATH_CATHI + '/exam-day/' + id;
    return axios.post(url, item);
};

export const deleteECaThiService = (id) => {
    var url = API_PATH_CATHI + '/deleteCaThi/' + id;
    return axios.post(url);
};

//------------------------------------ danh sách thi ------------------------------------
const API_PATH_DANHSACHTHI = API_PATH2 + '/examiners';

export const getAllDanhSachService = () => {
    var url = API_PATH_DANHSACHTHI + '/getAllDanhSach';
    return axios.get(url);
};

export const getItemById = (id) => {
    var url = API_PATH_DANHSACHTHI + '/getDanhSachItemById/' + id;
    return axios.get(url);
};

export const searchByPage = (searchObject) => {
    var url = API_PATH_DANHSACHTHI + '/searchByPage';
    return axios.post(url, searchObject);
};

export const addDanhSachService = (item) => {
    var url = API_PATH_DANHSACHTHI + '/addDanhSach/item';
    return axios.post(url, item);
};

export const uploadDanhSach = (item) => {
    var url = API_PATH_DANHSACHTHI + '/uploadDanhSach';
    return axios.post(url, item);
};

export const exportDanhSach = (item) => {
    var url = API_PATH_DANHSACHTHI + '/exportDanhSach';
    return axios.post(url, item);
};

export const updateDanhSach = (item) => {
    var url = API_PATH_DANHSACHTHI + '/updateDanhSach';
    return axios.post(url, item);
};

export const deleteEDanhSachService = (id) => {
    var url = API_PATH_DANHSACHTHI + '/deleteDanhSach/' + id;
    return axios.post(url);
};

// examiner
export const addExaminer = (item) => {
    var url = API_PATH_DANHSACHTHI;
    return axios.post(url, item);
};

export const getExaminer = (id) => {
    var url = API_PATH_DANHSACHTHI + '/' + id;
    return axios.get(url);
};

// ------------------------------------ phần đề thi ------------------------------------
const API_PATH_DANHSACHDETHI = API_PATH + '/exam-test';

export const getAllDeThiService = (pageIndex, pageSize) => {
    var url = API_PATH_DANHSACHDETHI + '/pages?pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    return axios.get(url);
};

// -- Tạo đề thủ công
// phần cấu hình đề thi thử công. có cần phải api riêng không. ???

export const addDeThiMauThuCongService = (item) => {
    var url = API_PATH_DANHSACHDETHI + '/exam-test';
    return axios.post(url, item);
};

// -- tạo đề thi tự động

export const addDeThiMauTuDongService = (item) => {
    var url = API_PATH_DANHSACHDETHI + '/auto-gen-exam-test';
    return axios.post(url, item);
};

// -- import đề thi

export const importDeThiService = (item) => {
    var url = API_PATH_DANHSACHDETHI + '/import-de-thi';
    return axios.post(url, item);
};

//
export const getDeThiById = (id) => {
    var url = API_PATH_DANHSACHDETHI + '/exam-test/' + id;
    return axios.get(url);
};

export const updateDeThi = (item) => {
    var url = API_PATH_DANHSACHDETHI + '/updateDanhSach';
    return axios.post(url, item);
};

export const deleteDeThi = (id) => {
    var url = API_PATH_DANHSACHDETHI + '/deleteDanhSach/' + id;
    return axios.post(url);
};

// -- api sinh khi ấn vào nút sinh đề
export const sinhDeThi = (item) => {
    var url = API_PATH_DANHSACHDETHI + '/sinh-de-thi';
    return axios.post(url, item);
};

//------------------------------------------------ api kết quả thi -------------------------
const API_PATH_KETQUATHI = API_PATH + '/ketquathi';

export const getAllResultService = () => {
    var url = API_PATH_KETQUATHI + '/getAllResult';
    return axios.get(url);
};

export const exportExcel = () => {
    var url = API_PATH_KETQUATHI + '/export-danh-sach';
    return axios.post(url);
};

//-------------------------------------------------- api thống kê --------------------------------
