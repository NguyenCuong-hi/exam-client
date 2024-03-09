import React from 'react';
import classNames from 'classnames/bind';
import style from './CreateAutomatic.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(style);

function Config({ onClose }) {
    return (
        <div className={cx('Config')}>
            <div className={cx('Automatic')}>
                <h3 className={cx('heading')}>Cài Đặt Thông Tin Đề Thi</h3>
                <div className={cx('flexBox')}>
                    <div className={cx('left')}>
                        <div className={cx('import')}>
                            <span className={cx('lable')}>Tên Đề : </span>
                            <input type="text" className={cx('input')} placeholder="eg : Đề thi đánh giá Draytest..." />
                        </div>
                        <div className={cx('import')}>
                            <span className={cx('lable')}>Ngày Thi : </span>
                            <input type="date" className={cx('input')} placeholder="eg : Thi Draytest..." />
                        </div>
                        <div className={cx('import')}>
                            <span className={cx('lable')}>Môn Thi : </span>
                            <select className={cx('input')} name="subject" id="subject">
                                <option className={cx('options')} value="">
                                    --------------Môn Thi ----------------
                                </option>
                                <option className={cx('options')} value="Evaluate">
                                    Thi Đánh Giá Đánh Lực
                                </option>
                                <option className={cx('options')} value="science">
                                    Thi CHủ Nghĩa Xã Hội Khoa Học
                                </option>
                            </select>
                        </div>
                        <div className={cx('import')}>
                            <div className={cx('typeImport')}>
                                <span className={cx('lablebot')}>Thời Gian : </span>
                                <input type="text" className={cx('inputbot')} placeholder="eg : 60 phút" />
                            </div>
                            <div className={cx('typeImport')}>
                                <span className={cx('lablebot')}>Số Đề : </span>
                                <input type="text" className={cx('inputbot')} placeholder="eg : 3..." />
                            </div>
                        </div>
                    </div>
                    <div className={cx('left')}>
                        <div className={cx('import')}>
                            <span className={cx('lable')}>Số Câu Khó : </span>
                            <input type="text" className={cx('input')} placeholder="" />
                        </div>
                        <div className={cx('import')}>
                            <span className={cx('lable')}>Số Câu Trung Bình : </span>
                            <input type="text" className={cx('input')} placeholder="" />
                        </div>
                        <div className={cx('import')}>
                            <span className={cx('lable')}>Số Câu Dễ : </span>
                            <input type="text" className={cx('input')} placeholder="" />
                        </div>
                        <div className={cx('import')}>
                            <span className={cx('lable')}>Số Lượng Câu Hỏi : </span>
                            <input type="text" className={cx('input')} placeholder="" />
                        </div>
                    </div>
                </div>
                <div className={cx('btn')}>
                    <button onClick={onClose} className={cx('btnTool')}>
                        Hủy
                    </button>
                    <button className={cx('btnTool')}>Hoàn Tất </button>
                </div>
            </div>
        </div>
    );
}

export default Config;
