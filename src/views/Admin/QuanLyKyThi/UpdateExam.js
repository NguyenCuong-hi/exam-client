import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateExam.module.scss';
import { format } from 'date-fns';
const cx = classNames.bind(styles);
const UpdateExam = ({ onClose, onUpdate, updateValues }) => {
    const [examName, setExamName] = useState(updateValues.examName);
    const [startTime, setStartTime] = useState(new Date(updateValues.startDate));
    const [endTime, setEndTime] = useState(new Date(updateValues.endDate));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Đã gửi:', { examName, startTime, endTime });

        // Thực hiện các hành động khác ở đây, chẳng hạn như gửi dữ liệu lên server
        const updatedExam = { examName, startDate: startTime, endDate: endTime };
        onUpdate(updateValues.id, updatedExam);

        // Reset trạng thái của form sau khi submit
        setExamName(updateValues.examName);
        setStartTime(new Date(updateValues.startDate));
        setEndTime(new Date(updateValues.endDate));
    };

    return (
        <div className={cx('create-exam')}>
            {/* ... */}
            <form onSubmit={handleSubmit} className={cx('exam-form')}>
                <div className={cx('form-group')}>
                    <label htmlFor="examName" className={cx('label')}>
                        Tên đợt thi:
                    </label>
                    <input
                        type="text"
                        id="examName"
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                        className={cx('input')}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="startTime" className={cx('label')}>
                        Ngày bắt đầu:
                    </label>
                    <input
                        type="date"
                        id="startTime"
                        value={isValidDate(startTime) ? format(startTime, 'yyyy-MM-dd') : ''}
                        onChange={(e) => setStartTime(new Date(e.target.value))}
                        className={cx('input')}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="endTime" className={cx('label')}>
                        Ngày kết thúc:
                    </label>
                    <input
                        type="date"
                        id="endTime"
                        value={isValidDate(endTime) ? format(endTime, 'yyyy-MM-dd') : ''}
                        onChange={(e) => setEndTime(new Date(e.target.value))}
                        className={cx('input')}
                        required
                    />
                </div>
                <div className={cx('exam-button')}>
                    <button type="submit" className={cx('btn-create')}>
                        Lưu
                    </button>
                    <button type="button" className={cx('btn-cancel')} onClick={onClose}>
                        Hủy
                    </button>
                </div>
            </form>
        </div>
    );
};

// Hàm kiểm tra xem giá trị thời gian có hợp lệ không
const isValidDate = (date) => date instanceof Date && !isNaN(date.getTime());

export default UpdateExam;
