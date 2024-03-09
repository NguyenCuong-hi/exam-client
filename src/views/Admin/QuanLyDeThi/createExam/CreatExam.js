import React from 'react';
import classNames from 'classnames/bind';
import style from './CreatExam.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(style);

function CreatExam() {
    return (
        <div className={cx('Create')}>
            <h3 className={cx('heading')}>Tạo Đề Thi</h3>

            <div className={cx('btnAdd')}>
                <button className={cx('btnFile')}>
                    <i className={cx('fa-solid fa-folder-plus', 'icon')}></i>
                    Thêm File
                </button>
            </div>
            <div className={cx('border')}></div>
            <div className={cx('Create-btn')}>
                <button className={cx('btn-adds')}>
                    <i className={cx('fa-solid fa-plus', 'icon')}></i>
                    Tự Tạo Đề Thủ Công
                </button>
                <button className={cx('btn-adds')}>
                    <i className={cx('fa-solid fa-building-columns', 'icon')}></i>
                    Tự Tạo Đề Ngân Hàng
                </button>
            </div>
        </div>
    );
}

export default CreatExam;
