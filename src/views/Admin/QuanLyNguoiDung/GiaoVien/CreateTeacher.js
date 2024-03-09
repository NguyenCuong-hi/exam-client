import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateTeacher.module.scss';
import image from '../../../../assets/image/img_download2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function CreateTeacher() {
    const openModal = () => {
        document.getElementById('modalOverlay').style.display = 'flex';
    };

    const closeModal = () => {
        document.getElementById('modalOverlay').style.display = 'none';
    };

    return (
        <div>
            <button onClick={openModal}>Hiển thị</button>
            <div id="modalOverlay" className={cx('modal-overlay')}>
                <div className={cx('modal-container')}>
                    <form>
                        <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '20px' }}>
                            Thêm danh sách thí sinh{' '}
                        </h2>

                        <div style={{ display: 'flex', marginTop: '40px' }}>
                            <div className={cx('item-upload')} id="fileUpload">
                                <img
                                    src={image}
                                    style={{
                                        width: '100px',
                                        height: '80px',
                                        margin: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    alt="Ảnh download"
                                />
                                <p>Chọn File hoặc kéo thả file câu hỏi vào đây</p>
                                <p>Hỗ trợ định dạng .pdf, .docx, .xlsx</p>

                                <input type="file" id="inputFile" style={{ display: 'none' }} />
                                <div id="fileInfo" style={{ textAlign: 'center' }}></div>
                            </div>
                            <div style={{ borderLeft: '1px solid #000', padding: '5px 5px 0 60px' }}>
                                <label htmlFor="newItem" style={{ fontSize: '13px' }}>
                                    Tên danh sách{' '}
                                </label>
                                <input
                                    type="text"
                                    style={{ margin: '10px 0' }}
                                    id="newItem"
                                    name="newItem"
                                    placeholder="Nhập tên danh sách"
                                />
                                <br></br>
                                <label htmlFor="newItem" style={{ fontSize: '13px' }}>
                                    Đợt thi{' '}
                                </label>
                                <select id="examRound" style={{ margin: '10px 0' }} className={cx('input')} required>
                                    <option value="round1">Đợt 1</option>
                                    <option value="round2">Đợt 2</option>
                                </select>
                            </div>
                        </div>

                        <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button type="button">Lưu</button>
                            <button
                                type="button"
                                style={{ backgroundColor: '#E1E6EC', color: '#A2ACBB', border: 'solid #E1E6EC' }}
                                onClick={closeModal}
                            >
                                Đóng
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateTeacher;
