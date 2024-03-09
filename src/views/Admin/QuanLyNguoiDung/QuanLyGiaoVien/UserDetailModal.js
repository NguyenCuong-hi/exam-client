import React from 'react';
import classNames from 'classnames/bind';
import styles from './DisplayTeacher.module.scss';

const cx = classNames.bind(styles);


function UserDetailModal({ selectedUserDetail,  handleCloseUserDetail }) {
    return(
        <div>
        {/* Lớp overlay */}
        <div className={cx('overlay')} onClick={handleCloseUserDetail}></div>
        <div className={cx('userDetailModal')}>
            <h2>Thông tin chi tiết người dùng</h2>
            <p><strong>Tên người dùng:</strong> {selectedUserDetail.name}</p>
            <p><strong>Tài khoản:</strong> {selectedUserDetail.account}</p>
            <p><strong>Email:</strong> {selectedUserDetail.email}</p>
            <p><strong>Ngày sinh:</strong> {selectedUserDetail.birthday}</p>
            <button className={cx('btn_details')} onClick={handleCloseUserDetail}>Đóng</button>
        </div>
    </div>
    )
}

export default UserDetailModal;