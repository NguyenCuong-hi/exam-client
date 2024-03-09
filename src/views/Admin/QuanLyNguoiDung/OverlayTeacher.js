import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './OverlayTeacher.module.scss';
import avatar from '../../../assets/image/user.jpg';

const cx = classNames.bind(styles);

function Overlay(){
    return (
        <div className={cx('overlay')}>
            <div className={cx('form_input')}>
                <img src={avatar} className={cx('avatar')} />
                <div className={cx('import')}>
                    <div className={cx('input')}>
                        <span className={cx('label')}> Họ Tên </span>
                        <input placeholder=" eg : Nguyễn Trung Hiếu...." type="text" className={cx('ipputText')} />
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('label')}> Email </span>
                        <input
                            placeholder=" eg : nguyentrunghieu@gmail.com...."
                            type="text"
                            className={cx('ipputText')}
                        />
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('label')}> Ngày Sinh </span>
                        <input type="date" className={cx('ipputText')} />
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('label')}> Giới Tính </span>
                        <input placeholder=" eg : Nam..." type="text" className={cx('ipputText')} />
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('label')}> User Name </span>
                        <input placeholder=" eg : trunghieu73" type="text" className={cx('ipputText')} />
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('label')}> Mật Khẩu </span>
                        <input placeholder=" eg : Nhập mật khẩu" type="password" className={cx('ipputText')} />
                        <button className={cx('reset')}>Reset</button>
                    </div>
                </div>

                <div className={cx('btnType')}>
                    <button className={cx('btn', 'active')}>Hủy</button>
                    <button className={cx('btn')}>Xác Nhận</button>
                </div>
            </div>
        </div>

    );
}

export default Overlay;