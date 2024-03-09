import axios from 'axios';
const API_EXAM_URL = 'http://localhost:8080/v1/admin/exam',
    API_EXAM_ADD = 'http://localhost:8080/v1/admin/exam/add',
    API_EXAM_DELETE = 'http://localhost:8080/v1/admin/exam/delete',
    API_EXAM_UPDATE = 'http://localhost:8080/v1/admin/exam/update',
    API_EXAM_SEARCH = 'http://localhost:8080/v1/admin/exam?query=',
    API_EXAM_ID = 'http://localhost:8080/v1/admin/exam/id';

const getExamService = () => {
    return axios.get(API_EXAM_URL);
};

const addExamService = (exam) => {
    return axios.post(API_EXAM_ADD, exam);
};

const deleteExamService = (id) => {
    return axios.post(API_EXAM_DELETE, id);
};

const editExam = (idUser) => {
    return axios.post(API_EXAM_UPDATE, idUser);
};
export { getExamService, addExamService, deleteExamService,editExam };
