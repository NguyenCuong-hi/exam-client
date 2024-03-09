import React from 'react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './AddGroupQuestion.module.scss';

const cx = classNames.bind(styles);

function AddGroupQuestion({ onClose }) {
    const [nameListQuestion, setNameListQuestion] = useState('');
    const [fileName, setFileName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Đã gửi:', { nameListQuestion, fileName });

        // Thực hiện các hành động khác ở đây, chẳng hạn như gửi dữ liệu lên server

        // Reset trạng thái của form sau khi submit
        setNameListQuestion('');
        setFileName('');
        onClose();
    };

    return (
        <div className={cx('create-exam-form')}>
            <h2 className={cx('headingName')}>Thêm Ngân hàng hàng câu hỏi</h2>
            <div className={cx('exam-form')}>
                <div className={cx('cathi')}>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>Tên danh sách</label>
                        <input
                            type="text"
                            id="fromPeriod"
                            onChange={(e) => setNameListQuestion(e.target.value)}
                            className={cx('input')}
                            required
                        />
                    </div>
                </div>

                <div className={cx('cathi')}>
                    <div className={cx('form-group')}>
                        <label className={cx('label')}>Chọn file Upload</label>
                        <input
                            type="file"
                            onChange={(e) => setFileName(e.target.value)}
                            className={cx('input')}
                            required
                        />
                    </div>
                </div>

                <div className={cx('exam-button')}>
                    <button type="submit" className={cx('btn', 'btn-cancel')} onClick={onClose}>
                        Hủy
                    </button>
                    <button type="submit" className={cx('btn', 'btn-create')} onClick={handleSubmit}>
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddGroupQuestion;
