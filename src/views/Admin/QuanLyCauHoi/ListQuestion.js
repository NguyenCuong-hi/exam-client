import React from 'react';
import classNames from 'classnames/bind';
import Popup from 'reactjs-popup';
import { Fragment } from 'react';
import { useState } from 'react';
import AddQuestion from './AddQuestion';
import style from './ListQuestion.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, Navigate } from 'react-router-dom';

const cx = classNames.bind(style);

function ListQuestion() {
    // [useAnswerA, setAnswerA] = useState('');
    // [useAnswerB, setAnswerB] = useState('');
    // [useAnswerC, setAnswerC] = useState('');
    // [useAnswerD, setAnswerD] = useState('');

    const [isPopupVisible, setPopupVisibility] = useState(false);
    const closePopup = () => {
        setPopupVisibility(false);
    };

    const createQuestHandle = () => {
        if (!isPopupVisible) {
            setPopupVisibility(true);
        }
    };

    function kiemTraCorrectAnswer(question) {
        const { correctAnswer, answerA, answerB, answerC, answerD } = question;
        if (correctAnswer === answerA) {
            return 'A';
        } else if (correctAnswer === answerB) {
            return 'B';
        } else if (correctAnswer === answerC) {
            return 'C';
        } else if (correctAnswer === answerD) {
            return 'D';
        } else {
            return 'Không trùng khớp với bất kỳ đáp án nào';
        }
    }

    const deleteQuestion = (id) => {
        // gọi API
    };

    const listQuests = [
        {
            id: 1,
            examCode: '123',
            level: 1,
            questionContent: 'Câu 2: 1 + 2 = ',
            answerA: '2',
            answerB: '3',
            answerC: '4',
            answerD: '5',
            correctAnswer: '2',
            status: {
                code: 1,
                name: 'Disabled',
            },
            subject: {
                id: '0123123-2312312',
            },
            suggest: 'Khong',
        },
        {
            id: 2,
            examCode: '123',
            level: 1,
            questionContent: 'Câu 2: 1 + 3 = ',
            answerA: '6',
            answerB: '7',
            answerC: '8',
            answerD: '5',
            correctAnswer: '8',
            status: {
                code: 1,
                name: 'Disabled',
            },
            subject: {
                id: '0123123-2312312',
            },
            suggest: 'Khong',
        },
        {
            id: 3,
            examCode: '123',
            level: 1,
            questionContent: 'Câu 2: 1 + 4 = ',
            answerA: '11',
            answerB: '22',
            answerC: '34',
            answerD: '65',
            correctAnswer: '65',
            status: {
                code: 1,
                name: 'Disabled',
            },
            subject: {
                id: '0123123-2312312',
            },
            suggest: 'Khong',
        },
    ];
    // console.log(listQuests);
    return (
        <div className={cx('Addfile')}>
            <Link to="/admin/ngan-hang-cau-hoi" className={cx('Back')}>
                {' '}
                Quay Lại
            </Link>

            <h3 className={cx('heading')}>Ngân hàng câu hỏi</h3>
            <div className={cx('flexBox')}>
                {/* <div className={cx('border')}></div> */}
                <div className={cx('container')}>
                    <div className={cx('tools')}>
                        <button className={cx('btnTool')}>Hủy</button>
                        <button
                            className={cx('btnTool')}
                            onClick={() => {
                                createQuestHandle();
                            }}
                            disabled={isPopupVisible}
                        >
                            Thêm
                        </button>
                        <button className={cx('btnTool')}>Import</button>
                        <button className={cx('btnTool')}>Lưu</button>
                    </div>
                    {/* ----------------- */}
                    <div className={cx('main')}>
                        {listQuests.map((question, index) => (
                            <div className={cx('Main-ex')} key={index}>
                                <ul className={cx('list')}>
                                    <li className={cx('item')}> Thêm Audio</li>
                                    <li className={cx('item')}>Thêm Ảnh</li>
                                    <li className={cx('item')}>Sửa</li>
                                    <li className={cx('item')} onClick={() => deleteQuestion(question.id)}>
                                        Xóa
                                    </li>
                                </ul>
                                <div className={cx('infor')}>
                                    <span className={cx('quetion')}>
                                        Câu 1 : Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?hông thường nằm
                                        ở tầng nào của mô hình OSI?hông thường nằm ở tầng nào của mô hình OSI?
                                    </span>
                                    <div className={cx('answers')}>
                                        <div className={cx('answer')}>
                                            <span className={cx('choose')}> A .</span>
                                            <span className={cx('choose')}> Tâng 1 </span>
                                        </div>
                                        <div className={cx('answer')}>
                                            <span className={cx('choose')}> B .</span>
                                            <span className={cx('choose')}> Tâng 2 </span>
                                        </div>
                                        <div className={cx('answer')}>
                                            <span className={cx('choose')}> C .</span>
                                            <span className={cx('choose')}> Tâng 3 </span>
                                        </div>
                                        <div className={cx('answer')}>
                                            <span className={cx('choose')}> D .</span>
                                            <span className={cx('choose')}> Tất Cả Đề Sai </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('true')}>
                                    <span className={cx('true_choose')}>Đáp Án : </span>
                                    <span className={cx('true_choose')}> A </span>
                                </div>
                            </div>
                        ))}

                        <Popup
                            open={isPopupVisible}
                            onClose={closePopup}
                            modal
                            overlayStyle={{
                                background: 'rgba(0, 0, 0, 0.5)', // Màu nền xung quanh
                                zIndex: 1500, // Z-index để đảm bảo nó hiển thị trên tất cả các phần khác
                            }}
                        >
                            {isPopupVisible && (
                                <div>
                                    <AddQuestion onClose={closePopup} />
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListQuestion;
