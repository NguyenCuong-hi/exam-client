import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateExam.module.scss';
import { format } from 'date-fns'; // cài thêm thư viện 'date-fns'
import { CreateExams } from '../../../actions/AdminActions/QuanLyKyThi';
const cx = classNames.bind(styles);
function CreateExam({ onClose, onExamCreate, sendataInput }) {
    const [examName, setExamName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [error, setError] = useState('');
    const [newExam, setNewExam] = useState('');

    const pushDataInput = () => {
        sendataInput({ examName, startTime, endTime });
    };

    const CreateNewExam = async (newdata) => {
        const apiExam = CreateExams(newdata);
        const DataExam = await apiExam(newdata);
        console.log(DataExam);
        setNewExam(DataExam);
        onClose();
        window.location.reload();
    };
    const NewDataExam = {
        examName,
        startDate: startTime,
        endDate: endTime,
    };
    console.log(newExam);

    const handleSubmit = (e) => {
        e.preventDefault();

        const startDate = new Date(startTime);
        const endDate = new Date(endTime);

        if (startDate >= endDate) {
            setError('Ngày kết thúc không hợp lệ');
            return;
        }

        console.log('startDate:', startDate);
        console.log('endDate:', endDate);
        const formattedStartDate = format(startDate, 'yyyy-MM-dd');
        const formattedEndDate = format(endDate, 'yyyy-MM-dd');
        const newExam = { examName, startDate: formattedStartDate, endDate: formattedEndDate };
        console.log(newExam);

        onExamCreate(newExam);

        setExamName('');
        setStartTime('');
        setEndTime('');
        setError('');
        onClose();
    };

    return (
        <div className={cx('create-exam')}>
            <h3 className={cx('heading')}>Tạo Đợt Thi</h3>

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
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
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
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className={cx('input')}
                        required
                    />
                </div>
                {/* Display the error message here */}
                <div className={cx('error-message')} style={{ color: 'red', marginTop: '5px' }}>
                    {error}
                </div>
                <div className={cx('exam-button')}>
                    <button
                        type="button"
                        className={cx('btn-create')}
                        onClick={() => {
                            CreateNewExam(NewDataExam);
                        }}
                    >
                        Tạo
                    </button>
                    <button type="button" className={cx('btn-cancel')} onClick={onClose}>
                        Hủy
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateExam;
