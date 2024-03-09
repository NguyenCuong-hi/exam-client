import React, { useState } from 'react';
import classNames from 'classnames/bind';
import QLSinhVien from './QuanLyGiaoVien/DisplayTeacher';
import QLGiaoVien from './DisplayUser';
import styles from './DisplayUserTeacher.module.scss';

const cx = classNames.bind(styles);
const MainApp = () => {
    const [displayScreen, setDisplayScreen] = useState(null);

    const handleDisplayScreen = (screen) => {
        setDisplayScreen(screen);
    };

    return (

        <div className={cx('Addfile')}>
            <div className={cx('flexBox')}>
                <div className={cx('sideBar')}>
                    <div className={cx('topic')}>

                        <button
                            className={cx('btnTopic') `${displayScreen === 'sinhvien' ? 'active' : ''}`}
                            onClick={() => handleDisplayScreen('sinhvien')}>
                            Thí sinh
                        </button>
                        <button
                            className={cx('btnTopic') ` ${displayScreen === 'giaovien' ? 'active' : ''}`}
                            onClick={() => handleDisplayScreen('giaovien')}>
                            Giáo viên
                        </button>
                    </div>
                    <div className="content">
                        {displayScreen === 'sinhvien' && <QLSinhVien />}
                        {displayScreen === 'giaovien' && <QLGiaoVien />}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainApp;
