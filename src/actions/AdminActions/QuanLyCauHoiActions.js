import axios from 'axios';
import getAllDanhSachNganHangService from '../../services/Admin/QLNganHangCauHoi/getAllDanhSachNganHangService';



// Load Câu hỏi
export const loadQuestion = () => async (dispatch) => {
    try {
        const { data } = await getAllDanhSachNganHangService();
    } catch (error) {
        dispatch({payload: error.response.data.message });
    }
};


// thêm sủa xóa