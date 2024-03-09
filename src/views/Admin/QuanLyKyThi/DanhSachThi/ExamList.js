import React from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Update from './Update/Update';
import Insert from './Insert/Insert';

import styles from './ExamList.module.scss'; // Đảm bảo import CSS cho form
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function ExamList() {
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [isPopupVisible1, setPopupVisibility1] = useState(false);

    const handleUpdateListUser = () => {
        if (!isPopupVisible) {
            setPopupVisibility(true);
        }
    };
    const handleInsertListUser = () => {
        if (!isPopupVisible1) {
            setPopupVisibility1(true);
        }
    };
    const closePopup = () => {
        setPopupVisibility(false);
    };
    const closePopupInsert = () => {
        setPopupVisibility1(false);
    };

    const [fakeListUser] = useState([
        {
            id: 1,
            name: 'Nguyễn Trung Hiếu',
            dayofbirth: '2023-11-28',
            gender: 'Nam',
            email: 'nguyentrunghieu@gmail.com',
        },
        {
            id: 2,
            name: 'Nguyễn Trung Hiếu',
            dayofbirth: '2023-11-28',
            gender: 'Nam',
            email: 'nguyentrunghieu@gmail.com',
        },
        {
            id: 3,
            name: 'Nguyễn Trung Hiếu',
            dayofbirth: '2023-11-28',
            gender: 'Nam',
            email: 'nguyentrunghieu@gmail.com',
        },
    ]);

    return (
        <div className={cx('ExamList')}>
            <div className={cx('toolBtn')}>
                <input type="text" className={cx('inputName')} />
                <Link className={cx('btns')}>Export</Link>
                <Link className={cx('btns')}>Import</Link>
                <Link
                    onClick={() => {
                        handleInsertListUser();
                    }}
                    disabled={isPopupVisible1}
                    className={cx('btns')}
                >
                    Thêm
                </Link>
            </div>
            <div className={cx('contentExam')}>
                <span className={cx('heading')}>Nguyễn Trung Hiếu</span>
                <div className={cx('formList')}>
                    <ul className={cx('itemExams')}>
                        <li className={cx('listExams')}>STT</li>
                        <li className={cx('listExams')}>Họ Và Tên</li>
                        <li className={cx('listExams')}>Năm Sinh</li>
                        <li className={cx('listExams')}>Giới Tính</li>
                        <li className={cx('listExams')}>Email</li>
                        <li className={cx('listExams')}></li>
                    </ul>
                    <div className={cx('border')}></div>
                    {fakeListUser.map((user, index) => (
                        <>
                            <ul className={cx('itemExam')} key={index}>
                                <li className={cx('listExam')}>{user.id}</li>
                                <li className={cx('listExam')}>{user.name}</li>
                                <li className={cx('listExam')}>{user.dayofbirth}</li>
                                <li className={cx('listExam')}>{user.gender}</li>
                                <li className={cx('listExam')}>{user.email}</li>
                                <li className={cx('listExam')}>
                                    <div className={cx('toolBtn')}>
                                        <Link
                                            onClick={() => {
                                                handleUpdateListUser();
                                            }}
                                            disabled={isPopupVisible}
                                            className={cx('btnList')}
                                        >
                                            Sửa
                                        </Link>
                                        <Link className={cx('btnList')}>Xóa</Link>
                                    </div>
                                </li>
                            </ul>
                            <div className={cx('border')}></div>
                        </>
                    ))}
                </div>
            </div>
            <Popup
                open={isPopupVisible}
                onClose={closePopup}
                modal
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1500,
                }}
            >
                {isPopupVisible && (
                    <div>
                        <Update onClose={closePopup} />
                    </div>
                )}
            </Popup>
            {/* insert */}
            <Popup
                open={isPopupVisible1}
                onClose={closePopupInsert}
                modal
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1500,
                }}
            >
                {isPopupVisible1 && (
                    <div>
                        <Insert onClose={closePopupInsert} />
                    </div>
                )}
            </Popup>
        </div>
    );
}

export default ExamList;
