import React from 'react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import AddGroupQuestion from './AddGroupQuestion';
import style from './DisplayQuestion.module.scss';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const cx = classNames.bind(style);

function DisplayQuestion() {
    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleDetailQuestion = (id) => {
        console.log('đã ấn vào đây ', id);
        const url = `/admin/ngan-hang-cau-hoi/detail?id=${id}`;
        window.location.href = url;
        // Navigate(`/admin/question/detail?id=${id}`);
    };

    const createListQuestHandle = () => {
        if (!isPopupVisible) {
            setPopupVisibility(true);
        }

        console.log(isPopupVisible);
    };
    const closePopup = () => {
        setPopupVisibility(false);
    };

    const listQuests = [
        {
            id: 1,
            nameListQuestion: 'Danh sách thi đánh giá năng lực Draytek',
            updateTime: '29/12/2023 12:45',
        },
        {
            id: 2,
            nameListQuestion: 'Danh sách thi đánh giá năng lực Draytek',
            updateTime: '03/12/2023 12:45',
        },
        {
            id: 3,
            nameListQuestion: 'Danh sách thi đánh giá năng lực Draytek',
            updateTime: '20/12/2023 12:45',
        },
        {
            id: 4,
            nameListQuestion: 'Danh sách thi đánh giá năng lực Draytek',
            updateTime: '29/12/2023 12:45',
        },
        {
            id: 5,
            nameListQuestion: 'Danh sách thi đánh giá năng lực Draytek',
            updateTime: '29/12/2023 12:45',
        },
        {
            id: 6,
            nameListQuestion: 'Danh sách thi đánh giá năng lực Draytek',
            updateTime: '29/12/2023 12:45',
        },
    ];

    return (
        <div className={cx('manager')}>
            <h3 className={cx('heading')}>Ngân hàng câu hỏi</h3>

            <div className={cx('manager-btn')}>
                <button
                    className={cx('btn-add')}
                    onClick={() => {
                        createListQuestHandle();
                    }}
                    disabled={isPopupVisible}
                >
                    <i className={cx('fa-solid fa-plus', 'icon')}></i>
                    Thêm
                </button>
            </div>
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
                        <AddGroupQuestion onClose={closePopup} />
                    </div>
                )}
            </Popup>

            <div className={cx('table')}>
                <ul className={cx('item')}>
                    <li className={cx('list')}>
                        <span className={cx('lable')}>Tên</span>
                    </li>
                    <li className={cx('list')}>
                        <span className={cx('lable')}>Cập Nhật Lần Cuối</span>
                    </li>
                </ul>
                <div className={cx('border-style')}></div>

                {listQuests.map((quest, index) => (
                    <div>
                        <ul
                            className={cx('item')}
                            key={index}
                            onClick={() => {
                                handleDetailQuestion(quest.id);
                            }}
                        >
                            <li className={cx('list')}>
                                <span className={cx('lable')}>{quest.nameListQuestion}</span>
                            </li>
                            <li className={cx('list')}>
                                <span className={cx('lable')}>{quest.updateTime}</span>
                            </li>
                        </ul>
                        <div className={cx('border-styles')}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayQuestion;
