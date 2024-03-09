import React from 'react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns'; // cài thêm thư viện 'date-fns'
import Popup from 'reactjs-popup';
import classNames from 'classnames/bind';
import ItemExam from './PopupItemExam/ItemExam.';
import styles from '../DeThi/DanhSachDeThi.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { loadDSDeThi } from '../../../../actions/AdminActions/QuanLyDanhSachDe';
import { Link, Navigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function DanhSachDeThi() {
    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleItemExam = () => {
        if (!isPopupVisible) {
            setPopupVisibility(true);
        }
    };
    const closePopupItemExam = () => {
        setPopupVisibility(false);
    };

    const [fakeExamData, setFakeExamData] = useState([]);

    const hanhdleDetail = (id) => {
        // Navigate(`/admin/exam/detail?id=${id}`);
        const url = `/Quanlykithi/Xeplichcathi?id=${id}`;
        window.location.href = url;
        console.log(url);
        console.log('ID: ', id);
    };

    const [examData, setExamData] = useState(null); // Sử dụng null là giá trị ban đầu của state

    useEffect(() => {
        const Data = async () => {
            const data = loadDSDeThi();
            const datas = await data();
            setFakeExamData(datas.data.data);
            console.log(datas);
        };
        console.log(Data());
    }, []); // Tham số thứ hai là một mảng rỗng, đảm bảo useEffect chỉ được gọi một lần sau khi component được tạo

    return (
        <div className={cx('manager')}>
            <Link to="/admin/quan-ly-ki-thi/de-thi" className={cx('btn-add')}>
                Quay lại
            </Link>
            <h3 className={cx('heading')}>Danh Sách Đề Thi</h3>

            <div
                className={cx('manager-btn')}
                onClick={() => {
                    // Handle the button click to navigate back
                }}
            >
                <input type="text" className={cx('inputName')} />
            </div>
            {/* <Popup
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
                        <CreatExam onClose={closePopup} onExamCreate={handleExamCreate} />
                    </div>
                )}
            </Popup> */}
            <div className={cx('table')}>
                <ul className={cx('items')}>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>ID</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Tên đề</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Mã đề </span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Ca thi</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Môn thi</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Thời gian làm </span>
                    </li>
                </ul>
                <div className={cx('border-style')}></div>
                {examData ? (
                    <div>
                        <ul className={cx('item')}>
                            <li
                                onClick={() => {
                                    handleItemExam();
                                }}
                                disabled={isPopupVisible}
                                className={cx('list')}
                            >
                                <span className={cx('lable')}>{examData.id}</span>
                            </li>
                            <li
                                onClick={() => {
                                    handleItemExam();
                                }}
                                disabled={isPopupVisible}
                                className={cx('list')}
                            >
                                <span className={cx('lable')}>{examData.testName}</span>
                            </li>
                            <li
                                onClick={() => {
                                    handleItemExam();
                                }}
                                disabled={isPopupVisible}
                                className={cx('list')}
                            >
                                <span className={cx('lable')}>{examData.password}</span>
                            </li>
                            <li
                                onClick={() => {
                                    handleItemExam();
                                }}
                                disabled={isPopupVisible}
                                className={cx('list')}
                            >
                                <span className={cx('lable')}>{examData.level} </span>
                            </li>
                            <li
                                onClick={() => {
                                    handleItemExam();
                                }}
                                disabled={isPopupVisible}
                                className={cx('list')}
                            >
                                <span className={cx('lable')}>{examData.totalQuestion}</span>
                            </li>
                            <li
                                onClick={() => {
                                    handleItemExam();
                                }}
                                disabled={isPopupVisible}
                                className={cx('list')}
                            >
                                <span className={cx('lable')}>{examData.totalToDo}</span>
                            </li>
                        </ul>
                        <div className={cx('border-styles')}></div>
                    </div>
                ) : (
                    <p>....</p>
                )}
            </div>
            {/* <Popup
                open={isPopupVisible2}
                onClose={closePopup2}
                modal
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1500,
                }}
            >
                {isPopupVisible2 && (
                    <div>
                        <UpdateExam onClose={closePopup2} onUpdate={handleExamUpdate} updateValues={updateValues} />
                    </div>
                )}
            </Popup> */}
            <Popup
                open={isPopupVisible}
                onClose={closePopupItemExam}
                modal
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1500,
                }}
            >
                {isPopupVisible && (
                    <div>
                        <ItemExam onClose={closePopupItemExam} />
                    </div>
                )}
            </Popup>
        </div>
    );
}

export default DanhSachDeThi;
