import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import user from '../../../../../assets/image/user.jpg';

// import Popup from 'reactjs-popup';
// import CreatExam from './CreateExam';
import styles from './Insert.module.scss'; // Đảm bảo import CSS cho form
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function Update({ onClose }) {
    return (
        <div className={cx('overLay')}>
            <div className={cx('Update')}>
                <img className={cx('logo-img')} src={user} alt="Hình ảnh" />
                <div className={cx('formInputs')}>
                    <div className={cx('formInput')}>
                        <span className={cx('lable')}>Họ Tên</span>
                        <input className={cx('input')} placeholder="Nhập Họ Tên" />
                    </div>
                    <div className={cx('formInput')}>
                        <span className={cx('lable')}>Ngày Sinh</span>
                        <input className={cx('input')} placeholder="Nhập Ngày Sinh" />
                    </div>
                    <div className={cx('formInput')}>
                        <span className={cx('lable')}>Giới Tính</span>
                        <input className={cx('input')} placeholder="Nhập Giới Tính" />
                    </div>
                    <div className={cx('formInput')}>
                        <span className={cx('lable')}>Email</span>
                        <input className={cx('input')} placeholder="Nhập Email" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Update;
