import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../CreateExam.module.scss';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'; // cài thêm thư viện 'date-fns'

const cx = classNames.bind(styles);

function CauHinhDe({ onClose }) {
    const [selectedCa, setSelectedCa] = useState('1');
    const [soLuongDe, setSoLuongDe] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // const newExam = {
        //     caThi: selectedCa,
        //     soLuongDe: soLuongDe !== '' ? parseInt(soLuongDe, 10) : null,
        // };

        // onExamCreate(newExam);

        setSelectedCa('1');
        setSoLuongDe('');
        setError('');
        onClose();

        const url = `/admin/quan-ly-ki-thi/de-thi/tao-thu-cong`;
        window.location.href = url;
    };

    return (
        <div className={cx('create-exam')}>
            <h3 className={cx('heading')}>Tạo Đợt Thi</h3>

            <form onSubmit={handleSubmit} className={cx('exam-form')}>
                <div className={cx('form-group')}>
                    <label htmlFor="caThi" className={cx('label')}>
                        Chọn ca thi:
                    </label>
                    <select
                        id="caThi"
                        value={selectedCa}
                        onChange={(e) => setSelectedCa(e.target.value)}
                        className={cx('input')}
                        required
                    >
                        <option value="1">Ca 1</option>
                        <option value="2">Ca 2</option>
                        <option value="3">Ca 3</option>
                        <option value="3">Ca 4</option>
                        <option value="3">Ca 5</option>
                        <option value="3">Ca 6</option>
                    </select>
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="soLuongDe" className={cx('label')}>
                        Số lượng đề:
                    </label>
                    <input
                        type="text"
                        id="soLuongDe"
                        value={soLuongDe}
                        onChange={(e) => setSoLuongDe(e.target.value)}
                        className={cx('input')}
                        required
                    />
                </div>

                <div className={cx('error-message')} style={{ color: 'red', marginTop: '5px' }}>
                    {error}
                </div>

                <div className={cx('exam-button')}>
                    <button type="submit" className={cx('btn-create')}>
                        Xác nhận
                    </button>

                    <button type="button" className={cx('btn-cancel')} onClick={onClose}>
                        Hủy
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CauHinhDe;
