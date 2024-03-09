import React from 'react';
import classNames from 'classnames/bind';
import style from './DisplayExam.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(style);

function DisplayExam() {
    return (
        <div className={cx('manager')}>
            <h3 className={cx('heading')}>Quản Lý Đề Thi</h3>

            <div className={cx('manager-btn')}>
                <button className={cx('btn-add')}>
                    <i className={cx('fa-solid fa-building-columns', 'icon')}></i>
                    Thêm từ ngân hàng câu hỏi
                </button>
                <button className={cx('btn-add')}>
                    <i className={cx('fa-solid fa-plus', 'icon')}></i>
                    Thêm
                </button>
            </div>

            <div className={cx('table')}>
                <ul className={cx('item')}>
                    <li className={cx('list')}>
                        <span className={cx('lable')}>Tên</span>
                    </li>
                    <li className={cx('list')}>
                        <span className={cx('lable ', 'center')}>Trạng Thái </span>
                    </li>
                    <li className={cx('list')}>
                        <span className={cx('lable')}>Cập Nhật Lần Cuối</span>
                    </li>
                </ul>
                <div className={cx('border-style')}></div>

                <ul className={cx('item')}>
                    <li className={cx('list')}>
                        <span className={cx('lable')}>Đề thi đánh giá năng lực Draytek</span>
                    </li>
                    <li className={cx('list')}>
                        <span className={cx('lable', 'centerX')}>Chưa mở </span>
                    </li>
                    <li className={cx('list')}>
                        <span className={cx('lable')}>29/12/2023 12:45</span>
                    </li>
                </ul>
                <ul className={cx('item')}>
                    <li className={cx('list')}>
                        <span className={cx('lable')}>Đề thi đánh giá năng lực Draytek</span>
                    </li>
                    <li className={cx('list')}>
                        <span className={cx('lable', 'centerX')}>Chưa mở </span>
                    </li>
                    <li className={cx('list')}>
                        <span className={cx('lable')}>29/12/2023 12:45</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DisplayExam;
