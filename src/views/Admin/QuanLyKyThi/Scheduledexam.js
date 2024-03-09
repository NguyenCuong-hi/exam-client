import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Scheduledexam.module.scss';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Createroomsubject from './Createroomsubject';
import UpdateRoomSubject from './UpdateRoomSubject';
import '@fortawesome/fontawesome-free/css/all.min.css';
const cx = classNames.bind(styles);

function Scheduledexam() {
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('2023-12-21');
    const createListQuestHandle = () => {
        if (!isPopupVisible) {
            setPopupVisibility(true);
        }
    };

    const closePopup = () => {
        setPopupVisibility(false);
    };
    const [isPopupVisible2, setPopupVisibility2] = useState(false);

    const UpdateQuestHandle2 = () => {
        if (!isPopupVisible2) {
            setPopupVisibility2(true);
        }
    };
    const closePopup2 = () => {
        setPopupVisibility2(false);
    };
    const fakeData = [
        {
            examName: 'Kỳ thi đánh giá kk',
            subjectName: 'Drayteck',
            examDay: '2023-12-18',
            examSlot: 29,
            startTime: '07:00',
            endTime: '09:00',
            room: {
                nameRoom: 'Phòng 552',
                slots: 30,
            },
        },

        {
            examName: 'Kỳ thi đánh giá',
            subjectName: 'Drayteck',
            examDay: '2023-12-21',
            examSlot: 29,
            startTime: '07:00',
            endTime: '09:00',
            room: {
                nameRoom: 'Phòng 552',
                slots: 30,
            },
        },
        {
            examName: 'Kỳ thi đánh giá drayteck',
            subjectName: 'Drayteck',
            examDay: '2023-12-21',
            examSlot: 29,
            startTime: '09:00',
            endTime: '11:00',
            room: {
                nameRoom: 'Phòng 552',
                slots: 30,
            },
        },

        {
            examName: 'Kỳ thi thử',
            subjectName: 'CSDL',
            examDay: '2023-12-22',
            examSlot: 29,
            startTime: '13:00',
            endTime: '15:00',
            room: {
                nameRoom: 'Phòng 553',
                slots: 30,
            },
        },
        {
            examName: 'Kỳ thi trắc nghiệm',
            subjectName: 'CSDL',
            examDay: '2023-12-22',
            examSlot: 29,
            startTime: '15:00',
            endTime: '18:00',
            room: {
                nameRoom: 'Phòng 553',
                slots: 30,
            },
        },
        // ... (thêm data nếu cần)
    ];

    const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];

    const timeSlots = [
        { start: '07:00', end: '12:00', label: 'Sáng' },
        { start: '12:00', end: '18:00', label: 'Chiều' },
    ];

    const getDayOfWeek = (date) => {
        const dayOfWeek = new Date(date).getDay();
        return daysOfWeek[dayOfWeek === 0 ? 6 : dayOfWeek - 1];
    };

    const getFormattedDate = (date, dayDifference) => {
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + dayDifference);
        return currentDate.toISOString().split('T')[0];
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    const handlePrevious = () => {
        const previousDate = new Date(selectedDate);
        previousDate.setDate(previousDate.getDate() - 7);
        setSelectedDate(previousDate.toISOString().split('T')[0]);
    };

    const handleNext = () => {
        const nextDate = new Date(selectedDate);
        nextDate.setDate(nextDate.getDate() + 7);
        setSelectedDate(nextDate.toISOString().split('T')[0]);
    };
    return (
        <div className={cx('manager1')}>
            <input type="date" value={selectedDate} className={cx('Headerinput1')} onChange={handleDateChange} />

            <div className={cx('toolBtn1')}>
                <Link className={cx('btns1')} onClick={handlePrevious}>
                    Trước
                </Link>
                <Link className={cx('btns1')} onClick={handleNext}>
                    Tiếp
                </Link>
            </div>

            <div className={cx('infor1')}>
                <table className={cx('Table1')}>
                    <thead>
                        <tr className={cx('row1')}>
                            <th className={cx('heading_title1')}></th>
                            {daysOfWeek.map((day, index) => (
                                <th key={index} className={cx('heading_title1')}>
                                    <h4>{getDayOfWeek(getFormattedDate(selectedDate, index))}</h4>
                                    <p>{getFormattedDate(selectedDate, index)}</p>
                                    <Link onClick={createListQuestHandle} disabled={isPopupVisible}>
                                        <i className={cx('fa-solid fa-plus', 'icon')}></i>
                                    </Link>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeSlots.map((timeSlot, timeIndex) => (
                            <tr key={timeIndex} className={cx('row1')}>
                                <th className={cx('heading_title1')}>{timeSlot.label}</th>
                                {daysOfWeek.map((day, dayIndex) => {
                                    const currentDate = getFormattedDate(selectedDate, dayIndex);
                                    const currentTimeSlot = fakeData.filter(
                                        (data) =>
                                            data.examDay === currentDate &&
                                            data.startTime >= timeSlot.start &&
                                            data.endTime <= timeSlot.end,
                                    );

                                    return (
                                        <td key={dayIndex} className={cx('title1')}>
                                            {currentTimeSlot.map((slot, index) => (
                                                <div key={index} className={cx('divsing1')}>
                                                    <div className={cx('flexsing1')}>
                                                        <p className={cx('psing1')}>{slot.examName}</p>
                                                    </div>
                                                    <div className={cx('flexsing1')}>
                                                        <p>Phòng:</p>
                                                        <p className={cx('leftsing1')}>{slot.room.nameRoom}</p>
                                                    </div>
                                                    <div className={cx('flexsing1')}>
                                                        <p>Giờ:</p>
                                                        <p className={cx('leftsing1')}>
                                                            {slot.startTime}-{slot.endTime}
                                                        </p>
                                                    </div>
                                                    <div className={cx('flexsing1')}>
                                                        <p>Tên môn: </p>
                                                        <p className={cx('leftsing1')}>{slot.subjectName}</p>
                                                    </div>
                                                    <div className={cx('select1')}>
                                                        <ul className={cx('selectitem1')}>
                                                            <li className={cx('selectlist1')}>
                                                                <Link className={cx('selectlink1')}>
                                                                    {' '}
                                                                    <i className={cx('fa-solid', 'fa-trash')}></i>
                                                                </Link>
                                                            </li>
                                                            <li className={cx('selectlist1')}>
                                                                <Link
                                                                    onClick={UpdateQuestHandle2}
                                                                    disabled={isPopupVisible2}
                                                                    className={cx('selectlink1')}
                                                                >
                                                                    <i
                                                                        className={cx(
                                                                            'fa-regular1',
                                                                            'fa-pen-to-square',
                                                                        )}
                                                                    ></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                        <Createroomsubject onClose={closePopup} />
                    </div>
                )}
            </Popup>

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
                        <UpdateRoomSubject onClose={closePopup2} />
                    </div>
                )}
            </Popup>
        </div>
    );
}

export default Scheduledexam;
