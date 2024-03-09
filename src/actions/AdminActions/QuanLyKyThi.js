import { getAllExamService, addExamService, deleteExamService, updateExamItem } from '../../services/Admin/QLKiThi';
import { getAllDeThiService } from '../../services/Admin/QLKiThi'; // đề thi

export const loadExam = () => async () => {
    try {
        const data = await getAllExamService();
        return data;
    } catch (error) {}
};

export const CreateExams = () => async (item) => {
    try {
        const data = await addExamService(item);
        return data;
    } catch (error) {}
};

export const DeleteExams = () => async (id) => {
    try {
        const data = await deleteExamService(id);
        return data;
    } catch (error) {}
};

export const EditExams = () => async (id, item) => {
    try {
        debugger
        const data = await updateExamItem(id, item);
        return data;
    } catch (error) {}

};
export const loadTopics = () => async (pageIndex, pageSize) => {
    try {
        const data = await getAllDeThiService(pageIndex, pageSize);
        return data;
    } catch (error) {}
};

