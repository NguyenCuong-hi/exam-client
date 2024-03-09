import React from 'react';
import classNames from 'classnames/bind';
import style from './Config.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(style);

function Config() {
    return (
        <div className={cx('Config')}>
            <h3 className={cx('heading')}>Cấu Hình</h3>
            <div className={cx('flexBox')}>
                <div className={cx('left')}>
                    <div className={cx('import')}>
                        <span className={cx('lable')}>Tên : </span>
                        <input type="text" className={cx('input')} placeholder="eg : Đề thi đánh giá Draytest..." />
                    </div>
                    <div className={cx('import')}>
                        <span className={cx('lable')}>Chủ Đề Thi : </span>
                        <input type="text" className={cx('input')} placeholder="eg : Thi Draytest..." />
                    </div>
                    <div className={cx('import')}>
                        <span className={cx('lable')}>Đợt Thi : </span>
                        <select className={cx('input')} name="subject" id="subject">
                            <option className={cx('options')} value="Evaluate">
                                Thi Đánh Giá Đánh Lực
                            </option>
                            <option className={cx('options')} value="science">
                                Thi CHủ Nghĩa Xã Hội Khoa Học
                            </option>
                        </select>
                    </div>
                </div>
                <div className={cx('left')}>
                    <div className={cx('import')}>
                        <span className={cx('lable')}>Thời gian làm : </span>
                        <input type="text" className={cx('input')} placeholder="" />
                    </div>
                    <div className={cx('import')}>
                        <span className={cx('lable')}>Thời gian mở đề : </span>
                        <input type="text" className={cx('input')} placeholder="" />
                    </div>
                    <div className={cx('import')}>
                        <span className={cx('lable')}>Đảo đề : </span>
                        <input type="text" className={cx('input')} placeholder="" />
                    </div>
                </div>
            </div>
            <div className={cx('Border')}></div>
            <div className={cx('btn')}>
                <button className={cx('btnTool')}>Hủy</button>
                <button className={cx('btnTool')}>Tạo Đề</button>
            </div>
        </div>
    );
}

export default Config;
