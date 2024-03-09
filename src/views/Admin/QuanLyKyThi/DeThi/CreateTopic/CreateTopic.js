import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// import Popup from 'reactjs-popup';
// import CreatExam from './CreateExam';
import styles from './CreateTopic.module.scss'; // Đảm bảo import CSS cho form
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function Update({ onClose }) {
    return (
        <div className={cx('overLay')}>
            <div className={cx('Update')}>
                <span className={cx('heading')}> Cấu Hình Thông Tin Đề Thi</span>
                <div className={cx('formInputs')}>
                    <div className={cx('formInput')}>
                        <span className={cx('lable')}>Tên Đề</span>
                        <input className={cx('input')} placeholder="Nhập Tên Đề" />
                    </div>
                    <div className={cx('formInput')}>
                        <span className={cx('lable')}>Ca Thi</span>
                        <input className={cx('input')} placeholder="Nhập Ca Thi" />
                    </div>
                    <div className={cx('formInput')}>
                        <label className={cx('lable')}>Môn Thi</label>
                        <select name="cars" id="cars" className={cx('input')}>
                            <option value="">------Môn Thi -------</option>
                            <option value="network">Mạng Máy Tính</option>
                            <option value="math">Toán Rời Rạc</option>
                            <option value="Infor">Tin Học Văn Phòng</option>
                        </select>
                    </div>
                    <div className={cx('formInput')}>
                        <span className={cx('lable')}>Thời Gian Làm Bài</span>
                        <input className={cx('input')} placeholder="Nhập thòi gian làm" />
                    </div>
                </div>
                <div className={cx('toolBtn')}>
                    <Link onClick={onClose} className={cx('btns')}>
                        Hủy
                    </Link>
                    <Link className={cx('btns')}>Xác Nhận</Link>
                </div>
            </div>
        </div>
    );
}

export default Update;
