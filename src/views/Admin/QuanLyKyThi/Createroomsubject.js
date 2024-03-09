import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Createroomsubject.module.scss'; // Đảm bảo import CSS cho form

const cx = classNames.bind(styles);

function Createroomsubject({ onClose }) {
    const [examDate, setExamDate] = useState('');
    const [examRound, setExamRound] = useState('');
    const [fromHour, startTime] = useState(''); // Thay đổi tên biến thành fromHour
    const [toHour, endtime] = useState(''); // Thay đổi tên biến thành toHour
    const [subject, setSubject] = useState('');
    const [examRoom, setExamRoom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Đã gửi:', { examDate, examRound, fromHour, toHour, subject, examRoom });

        // Thực hiện các hành động khác ở đây, chẳng hạn như gửi dữ liệu lên server

        // Reset trạng thái của form sau khi submit
        setExamDate('');
        setExamRound('');
        startTime('');
        endtime('');
        setSubject('');
        setExamRoom('');
    };

    return (
        <div className={cx('create-exam-form')}>
            <form onSubmit={handleSubmit} className={cx('exam-form')}>
                <div className={cx('form-group')}>
                    <label htmlFor="examDate" className={cx('label')}>
                        Ngày Thi:
                    </label>
                    <input
                        type="date"
                        id="examDate"
                        value={examDate}
                        onChange={(e) => setExamDate(e.target.value)}
                        className={cx('input')}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="examRound" className={cx('label')}>
                        Đợt Thi:
                    </label>
                    <select
                        id="examRound"
                        value={examRound}
                        onChange={(e) => setExamRound(e.target.value)}
                        className={cx('input')}
                        required
                    >
                        <option value="round1">Đợt 1</option>
                        <option value="round2">Đợt 2</option>
                    </select>
                </div>

                <div className={cx('giophi')}>
                    <p>Giờ thi</p>
                    <div className={cx('form-group')}>
                        <label htmlFor="fromHour" className={cx('label')}>
                            Từ Giờ:
                        </label>
                        <input
                            type="time"
                            id="fromHour"
                            value={fromHour}
                            onChange={(e) => startTime(e.target.value)}
                            className={cx('input')}
                            required
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="toHour" className={cx('label')}>
                            Đến
                        </label>
                        <input
                            type="time"
                            id="toHour"
                            value={toHour}
                            onChange={(e) => endtime(e.target.value)}
                            className={cx('input')}
                            required
                        />
                    </div>
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="subject" className={cx('label')}>
                        Môn Thi:
                    </label>
                    <select
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={cx('input')}
                        required
                    >
                        <option value="subject1">Môn 1</option>
                        <option value="subject2">Môn 2</option>
                    </select>
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="examRoom" className={cx('label')}>
                        Phòng Thi:
                    </label>
                    <select
                        id="examRoom"
                        value={examRoom}
                        onChange={(e) => setExamRoom(e.target.value)}
                        className={cx('input')}
                        required
                    >
                        <option value="room1">Phòng 1</option>
                        <option value="room2">Phòng 2</option>
                    </select>
                </div>

                <div className={cx('exam-button')}>
                    <button type="button" className={cx('btn-cancel')} onClick={onClose}>
                        Hủy
                    </button>

                    <button type="submit" className={cx('btn-create')}>
                        Xác nhận
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Createroomsubject;
