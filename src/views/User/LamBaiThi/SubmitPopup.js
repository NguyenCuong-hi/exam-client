import React from 'react';
import classNames from 'classnames/bind';
import styles from './SubmitPopup.module.scss';

const cx = classNames.bind(styles);

function SubmitPopup({ closePopup, handleConfirm }) {
    return (
        <>
            <div className={cx('popup')}>
                <div className={cx('content-form')}>Bạn có chắc chắn muốn nộp bài không?</div>
                <div className={cx('operation')}>
                    <button className={cx('button-operation', 'cancel-button')} onClick={closePopup}>
                        Hủy
                    </button>
                    <button className={cx('button-operation', 'save-button')} onClick={handleConfirm}>
                        Xác nhận
                    </button>
                </div>
            </div>
        </>
    );
}

export default SubmitPopup;
