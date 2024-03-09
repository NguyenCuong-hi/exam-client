import React from 'react';
import classNames from 'classnames/bind';
import styles from './DisplayTeacher.module.scss';

const cx = classNames.bind(styles);

function ConfirmDeleteModal({ confirmDeleteUser, handleConfirmDelete, handleCloseConfirmDelete }) {

    return (
        <div>
            {/* Lớp overlay */}
            <div className={cx('overlay')} onClick={handleCloseConfirmDelete}></div>
            <div className={cx('confirmDeleteModal')}>
                <h2>Xác nhận xóa người dùng</h2>
                <p>Bạn có chắc chắn muốn xóa người dùng "{confirmDeleteUser.name}" không?</p>
                <button onClick={handleConfirmDelete}>Xác nhận</button>
                <button onClick={handleCloseConfirmDelete}>Hủy</button>
            </div>
        </div>
    )
}

export default ConfirmDeleteModal;