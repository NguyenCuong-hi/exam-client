export const URL_API_AUTH = 'http://localhost:8080/api/auth/token';
export const URL_API_DATA = 'http://localhost:8080/api';

export const APPLICATION_PATH = '/';
export const API_ENPOINT = 'http://localhost:8765/api/v1'; //local

export const Messages = {
    ADD_SUCCESS: 'Lưu thành công',
    DELETE_SUCCESS: 'Xóa thành công',
    REJECT_SUCCESS: 'Từ chối thành công',
    APPROVE_SUCCESS: 'Phê duyệt thành công',
    RESTORE_SUCCESS: 'Khôi phục thành công',
    ADD_ERROR: 'Có lỗi xảy ra không thể lưu',
    CONFIRM_DELETE: 'Bạn có chắc chắn muốn xóa?',
    EMPTY_RESULTS: 'Chưa có thông tin',
    DEFAULT_MESSAGE_REQUIRE: 'Trường bắt buộc nhập',
    DEFAULT_MESSAGE_PHONE_NUMBER: 'Số điện thoại phải có 10 - 11 chữ số',
    DEFAULT_MESSAGE_EMAIL: 'Sai định dạng email',
    DEFAULT_MESSAGE_REQUIRE_SAVE: 'Cần nhập các trường bắt buộc nhập',
    DEFAULT_MESSAGE_PASSWORD: 'Mật khẩu phải chứa ít nhất 8 kí tự gồm số và chữ cái',
    DEFAULT_MESSAGE_DATE: 'Sai định dạng ngày tháng',
    DEFAULT_WARNING_UPDATE: 'Chưa có bản ghi nào được chọn',
    DEFAULT_WARNING_UPDATE2: 'Chỉ được chọn 1 bản ghi',
};

// Config Header
export const CONFIG = { header: { 'Content-Type': 'application/json' } };

export const FORMAT_DATE = 'YYYY-MM-DD';
export const FORMAT_DATE2 = 'DD/MM/YYYY';
export const FORMAT_DATE_TIME = 'YYYY-MM-DDTHH:mm:ssZ';
export const FORMAT_DATE_TIME_2 = 'DD/MM/YYYY HH:mm:ss';
export const FORMAT_DATE3 = 'YYYYMMDD';
