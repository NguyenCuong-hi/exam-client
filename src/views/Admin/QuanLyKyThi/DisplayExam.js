import React from 'react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns'; // cài thêm thư viện 'date-fns'
import Popup from 'reactjs-popup';
import classNames from 'classnames/bind';
import styles from './DisplayExam.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CreatExam from './CreateExam';
import UpdateExam from './UpdateExam';
import { Link, Navigate } from 'react-router-dom';
import { loadExam, DeleteExams } from '../../../../src/actions/AdminActions/QuanLyKyThi';
const cx = classNames.bind(styles);
function DisplayExam() {
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [isPopupVisible2, setPopupVisibility2] = useState(false);

    /*

    const [reviceInputs, setReviceInputs] = useState({});
    const reviceInput = (data) => {
        setReviceInputs(data);
    };
    console.log(reviceInputs);
*/

    const createListQuestHandle = () => {
        if (!isPopupVisible) {
            setPopupVisibility(true);
        }
    };
    const closePopup = () => {
        setPopupVisibility(false);
    };

    const [updateValues, setUpdateValues] = useState({});
    const closePopup2 = () => {
        setPopupVisibility2(false);
        setUpdateValues({}); // Đặt lại giá trị updateValues khi đóng popup
    };

    const [fakeExamData, setFakeExamData] = useState([]);

    useEffect(() => {
        const Data = async () => {
            const data = loadExam();
debugger;
            const datas = await data();
debugger;
            setFakeExamData(datas.data.data.content);
debugger;
            console.log(datas);
        };
        console.log(Data());
    }, []);

    // const newDataExam = async () => {
    //     const senDataInput = CreateExam();
    //     const senData = await senDataInput();
    //     console.log(senData);
    // };

    const updateListQuestHandle = (id, examName, startDate, endDate) => {
        if (!isPopupVisible2) {
            setPopupVisibility2(true);
            setUpdateValues({ id, examName, startDate, endDate });
        }
    };
    const updateExamData = (id, updatedExam) => {
        // const updatedData = fakeExamData.map((exam) => (exam.id === id ? { ...exam, ...updatedExam } : exam));
        // setFakeExamData(updatedData);
    };
    const handleExamUpdate = (id, updatedExam) => {
        updateExamData(id, updatedExam);
        closePopup2();
    };
    const handleExamCreate = (newExam) => {
        setFakeExamData([...fakeExamData, newExam]);
        closePopup();
    };
    const deleteExam = async (id) => {
        console.log(id);
        const detele = DeleteExams(id);
        console.log(await detele(id));
        window.location.reload();
        // dùng set khi yêu cầu thôi
        // setFakeExamData()
    };

    const hanhdleDetail = (id) => {
        // Navigate(`/admin/exam/detail?id=${id}`);
        const url = `/admin/quan-ly-ki-thi/danh-sach-ca-thi?id=${id}`;
        window.location.href = url;
        console.log(url);
        console.log('ID: ', id);
    };
    return (
        <div className={cx('manager')}>
            <h3 className={cx('heading')}>Quản Lý Kì Thi</h3>

            <div className={cx('manager-btn')}>
                <button
                    className={cx('btn-add')}
                    onClick={() => {
                        createListQuestHandle();
                    }}
                    disabled={isPopupVisible}
                >
                    <i className={cx('fa-solid fa-plus', 'icon')}></i>
                    Tạo đợt thi
                </button>
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
                        <CreatExam onClose={closePopup} onExamCreate={handleExamCreate} />
                    </div>
                )}
            </Popup>
            <div className={cx('table')}>
                <ul className={cx('items')}>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>ID</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Tên</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Trạng Thái </span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Ngày bắt đầu</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Ngày kết thúc</span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Sửa đổi </span>
                    </li>
                    <li className={cx('lists')}>
                        <span className={cx('lables')}>Chức năng</span>
                    </li>
                </ul>
                <div className={cx('border-style')}></div>
                {fakeExamData?.map((exam, index) => {
                    const startDate = new Date(exam.startDate);
                    const endDate = new Date(exam.endDate);

                    const currentDate = new Date();

                    let status = 'Chưa diễn ra';

                    if (currentDate >= startDate && currentDate <= endDate) {
                        status = 'Đang diễn ra';
                    } else if (currentDate > endDate) {
                        status = 'Đã diễn ra';
                    }

                    return (
                        <>
                            <ul key={index} className={cx('item')}>
                                <li onClick={() => hanhdleDetail(exam.id)} className={cx('list')}>
                                    <span className={cx('lable')}>{index + 1}</span>
                                </li>
                                <li onClick={() => hanhdleDetail(exam.id)} className={cx('list')}>
                                    <span className={cx('lable')}>{exam.examName}</span>
                                </li>
                                <li onClick={() => hanhdleDetail(exam.id)} className={cx('list')}>
                                    <span className={cx('lable')}>{status} </span>
                                </li>
                                <li onClick={() => hanhdleDetail(exam.id)} className={cx('list')}>
                                    <span className={cx('lable')}>{format(startDate, 'dd/MM/yyyy')}</span>
                                </li>
                                <li onClick={() => hanhdleDetail(exam.id)} className={cx('list')}>
                                    <span className={cx('lable')}>{format(endDate, 'dd/MM/yyyy')}</span>
                                </li>
                                <li onClick={() => hanhdleDetail(exam.id)} className={cx('list')}>
                                    <span className={cx('lable')}>29/12/2023 12:45</span>
                                </li>
                                <li className={cx('list')}>
                                    <button
                                        className={cx('btn-update')}
                                        onClick={() => {
                                            updateListQuestHandle();
                                        }}
                                        disabled={isPopupVisible}
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        onClick={() => {
                                            deleteExam(exam.id);
                                        }}
                                        className={cx('btn-delete')}
                                    >
                                        Xóa
                                    </button>
                                </li>
                            </ul>
                        </>
                    );
                })}
            </div>
            <Popup
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
            </Popup>
        </div>
    );
}

export default DisplayExam;
