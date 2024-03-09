import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import CreateTopic from './CreateAutomatic/CreateAutomatic';
import CauHinhDe from './CauHinhDe';
import ItemExam from './PopupItemExam/ItemExam.';
import { loadTopics } from '../../../../../src/actions/AdminActions/QuanLyKyThi';

// import Insert from './Insert/Insert';

import styles from './Exam.module.scss'; // Đảm bảo import CSS cho form
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function Exam() {
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [isPopupVisible1, setPopupVisibility1] = useState(false);
    const [isPopupVisible2, setPopupVisibility2] = useState(false);

    // Call API Dethi

    const [fakeExamData, setFakeExamData] = useState([]);

    useEffect(() => {
        const Data = async () => {
            const data = loadTopics(1, 10);
            const datas = await data(1, 10);
            //setFakeExamData(datas.data.data.content);
            console.log(datas);
        };
        console.log(Data());
    }, []);

    //-----------------------
    const handleCreateTopic = () => {
        if (!isPopupVisible) {
            setPopupVisibility(true);
        }
    };
    const handleCreateTopicThuCong = () => {
        if (!isPopupVisible2) {
            setPopupVisibility2(true);
        }
    };
    const handleItemExam = () => {
        if (!isPopupVisible1) {
            setPopupVisibility1(true);
        }
    };
    const closePopup = () => {
        setPopupVisibility(false);
    };
    const closePopupThuCong = () => {
        setPopupVisibility2(false);
    };
    const closePopupItemExam = () => {
        setPopupVisibility1(false);
    };

    const [fakeExam] = useState([
        {
            id: 1,
            name: 'Đề Thi Draytek',
            code: 'D01',
            poetry: '1',
            subject: 'Mạng Máy Tính',
            time: '60 phút',
        },
        {
            id: 2,
            name: 'Đề Thi Đầu ra',
            code: 'D01',
            poetry: '1',
            subject: 'Tin học văn Phòng',
            time: '60 phút',
        },
        {
            id: 3,
            name: 'Đề Thi Draytek',
            code: 'D01',
            poetry: '2',
            subject: 'PTTK Hệ Thống',
            time: '90 phút',
        },
        {
            id: 4,
            name: 'Đề Thi Draytek',
            code: 'D01',
            poetry: '2',
            subject: 'PTTK Hệ Thống',
            time: '90 phút',
        },
        {
            id: 5,
            name: 'Đề Thi Draytek',
            code: 'D01',
            poetry: '2',
            subject: 'PTTK Hệ Thống',
            time: '90 phút',
        },
        {
            id: 6,
            name: 'Đề Thi Draytek',
            code: 'D01',
            poetry: '2',
            subject: 'PTTK Hệ Thống',
            time: '90 phút',
        },
    ]);

    return (
        <div className={cx('ExamList')}>
            <div className={cx('toolBtn')}>
                <input type="text" className={cx('inputName')} />

                <Link className={cx('btns')}>Import</Link>
                <Link
                    className={cx('btns')}
                    onClick={() => {
                        handleCreateTopicThuCong();
                    }}
                    disabled={isPopupVisible2}
                >
                    Tạo Đề Thủ Công
                </Link>

                <Link
                    className={cx('btns')}
                    onClick={() => {
                        handleCreateTopic();
                    }}
                    disabled={isPopupVisible}
                >
                    Tạo Đề Tự Động
                </Link>
            </div>
            <div className={cx('toolBtn')}>
                <Link className={cx('btns', 'botton')}>Sinh Đề</Link>
                <Link className={cx('btns', 'botton')} to="/admin/quan-ly-ki-thi/de-thi/danh-sach-de-thi">
                    Danh Sách Đề Thi
                </Link>
            </div>
            <div className={cx('contentExam')}>
                <span className={cx('heading')}>Danh Sách Đề Thi Mẫu</span>
                <div className={cx('formList')}>
                    <ul className={cx('itemExams')}>
                        <li className={cx('listExams')}>STT</li>
                        <li className={cx('listExams')}>Tên Đề</li>
                        <li className={cx('listExams')}>Mã Đề</li>
                        <li className={cx('listExams')}>Ca Thi</li>
                        <li className={cx('listExams')}>Môn Thi</li>
                        <li className={cx('listExams')}>Thời Gian Thi</li>
                        <li className={cx('listExams')}></li>
                    </ul>
                    <div className={cx('border')}></div>
                    {fakeExam.map((exam, index) => (
                        <>
                            <ul className={cx('itemExam')} key={index}>
                                <li
                                    onClick={() => {
                                        handleItemExam();
                                    }}
                                    disabled={isPopupVisible1}
                                    className={cx('listExam')}
                                >
                                    {exam.id}
                                </li>
                                <li
                                    onClick={() => {
                                        handleItemExam();
                                    }}
                                    disabled={isPopupVisible1}
                                    className={cx('listExam')}
                                >
                                    {exam.name}
                                </li>
                                <li
                                    onClick={() => {
                                        handleItemExam();
                                    }}
                                    disabled={isPopupVisible1}
                                    className={cx('listExam')}
                                >
                                    {exam.code}
                                </li>
                                <li
                                    onClick={() => {
                                        handleItemExam();
                                    }}
                                    disabled={isPopupVisible1}
                                    className={cx('listExam')}
                                >
                                    {exam.poetry}
                                </li>
                                <li
                                    onClick={() => {
                                        handleItemExam();
                                    }}
                                    disabled={isPopupVisible1}
                                    className={cx('listExam')}
                                >
                                    {exam.subject}
                                </li>
                                <li className={cx('listExam')}>{exam.time}</li>
                                <li className={cx('listExam')}>
                                    <div className={cx('toolBtn')}>
                                        {/* <Link to="/admin/quan-ly-ki-thi/de-thi/sua" className={cx('btnList')}>
                                            Sửa
                                        </Link> */}
                                        <Link className={cx('btnList')}>Xóa</Link>
                                    </div>
                                </li>
                            </ul>
                            <div className={cx('border')}></div>{' '}
                        </>
                    ))}

                    {/* {fakeListUser.map((user, index) => (
                        <>
                        </>
                    ))} */}
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
                        <CreateTopic onClose={closePopup} />
                    </div>
                )}
            </Popup>

            <Popup
                open={isPopupVisible2}
                onClose={closePopupThuCong}
                modal
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1500,
                }}
            >
                {isPopupVisible2 && (
                    <div>
                        <CauHinhDe onClose={closePopupThuCong} />
                    </div>
                )}
            </Popup>

            {/* Sửa */}
            <Popup
                open={isPopupVisible1}
                onClose={closePopupItemExam}
                modal
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1500,
                }}
            >
                {isPopupVisible1 && (
                    <div>
                        <ItemExam onClose={closePopupItemExam} />
                    </div>
                )}
            </Popup>
        </div>
    );
}

export default Exam;
