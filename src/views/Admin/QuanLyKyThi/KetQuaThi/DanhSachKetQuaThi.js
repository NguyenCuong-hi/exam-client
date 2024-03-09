import React from 'react';
import { useState } from 'react';
import { format } from 'date-fns'; // cài thêm thư viện 'date-fns'
import Popup from 'reactjs-popup';
import classNames from 'classnames/bind';
import styles from './DanhsachKetquathi.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, Navigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function DanhSachKetQuaThi() {
    const [fakeExamData, setFakeExamData] = useState([
        {
            id: 1,
            fullname: 'Nguyễn Phi Hùng',
            birthday: '2002-12-30',
            Gender: true,
            Email: '1',
            correctquantity: 50,
            Wrongquantity: 30,
            Point: 10,
        },
        {
            id: 2,
            fullname: 'Đàm Kiều Trang',
            birthday: '2002-04-30',
            Gender: false,
            Email: '1',
            correctquantity: 50,
            Wrongquantity: 30,
            Point: 10,
        },
        {
            id: 3,
            fullname: 'Lê Quỳnh',
            birthday: '2002-04-30',
            Gender: false,
            Email: '1',
            correctquantity: 50,
            Wrongquantity: 30,
            Point: 10,
        },
    ]);

    const hanhdleDetail = (id) => {
        // Navigate(`/admin/exam/detail?id=${id}`);
        const url = `/Quanlykithi/Xeplichcathi?id=${id}`;
        window.location.href = url;
        console.log(url);
        console.log('ID: ', id);
    };
    return (
        <div className={cx('manager')}>
            <h3 className={cx('heading')}>Danh Sách Kết Quả Thi</h3>
            <div
                className={cx('manager-btn')}
                onClick={() => {
                    // Handle the button click to navigate back
                }}
            >
                <input type="text" className={cx('inputName')} />
                <button className={cx('btn-add')}>Export</button>
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
                        <span className={cx('lables')}>Họ và Tên</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Năm Sinh</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Giới Tính</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Email</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Đúng</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Sai</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Điểm</span>
                    </li>
                </ul>
                <div className={cx('border-style')}></div>
                {fakeExamData.map((exam, index) => (
                    // <Link onClick={() => hanhdleDetail(exam.id)} key={index}>
                    <div>
                        <ul className={cx('item')}>
                            <li className={cx('list')}>
                                <span className={cx('lable')}>{exam.id}</span>
                            </li>
                            <li className={cx('list')}>
                                <span className={cx('lable')}>{exam.fullname}</span>
                            </li>
                            <li className={cx('list')}>
                                <span className={cx('lable')}> {format(new Date(exam.birthday), 'dd/MM/yyyy')}</span>
                            </li>
                            <li className={cx('list')}>
                                <span className={cx('lable')}> {exam.Gender ? 'Nam' : 'Nữ'}</span>
                            </li>
                            <li className={cx('list')}>
                                <span className={cx('lable')}>{exam.Email} </span>
                            </li>
                            <li className={cx('list')}>
                                <span className={cx('lable')}>{exam.correctquantity}</span>
                            </li>
                            <li className={cx('list')}>
                                <span className={cx('lable')}>{exam.Wrongquantity}</span>
                            </li>
                            <li className={cx('list')}>
                                <span className={cx('lable')}>{exam.Point}</span>
                            </li>
                        </ul>
                        <div className={cx('border-styles')}></div>
                    </div>
                    // </Link>
                ))}
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
        </div>
    );
}

export default DanhSachKetQuaThi;
