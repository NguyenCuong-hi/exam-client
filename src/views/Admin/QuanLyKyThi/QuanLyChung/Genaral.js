import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Genaral.module.scss';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function General({ children }) {
    const [activeTab, setActiveTab] = useState(0); // State để theo dõi tab hiện tại được chọn

    return (
        <div className={cx('Tab')}>
            <div className={cx('TabHeader')}>
                <div className={cx('TabHItem', { active: activeTab === 0 })}>
                    <Link
                        to="/admin/quan-ly-ki-thi/danh-sach-ca-thi"
                        className={cx('btnHeader', 'btn_link')}
                        onClick={() => setActiveTab(0)}
                    >
                        <span className={cx('btnHeader')}>Thông Tin Đợt Thi</span>
                    </Link>
                </div>
                <div className={cx('TabHItem', { active: activeTab === 1 })}>
                    <Link
                        to="/admin/quan-ly-ki-thi/danh-sach-thi"
                        className={cx('btnHeader', 'btn_link')}
                        onClick={() => setActiveTab(1)}
                    >
                        <span className={cx('btnHeader')}>Danh Sách Thi</span>
                    </Link>
                </div>
                <div className={cx('TabHItem', { active: activeTab === 2 })}>
                    <Link
                        to="/admin/quan-ly-ki-thi/de-thi"
                        className={cx('btnHeader', 'btn_link')}
                        onClick={() => setActiveTab(2)}
                    >
                        <span className={cx('btnHeader')}>Đề Thi</span>
                    </Link>
                </div>
                <div className={cx('TabHItem', { active: activeTab === 4 })}>
                    <Link
                        to="/admin/quan-ly-ki-thi/thong-ke"
                        className={cx('btnHeader', 'btn_link')}
                        onClick={() => setActiveTab(4)}
                    >
                        <span className={cx('btnHeader')}>Thông Kê</span>
                    </Link>
                </div>
                <div className={cx('TabHItem', { active: activeTab === 3 })}>
                    <Link
                        to="/admin/quan-ly-ki-thi/ket-qua"
                        className={cx('btnHeader', 'btn_link')}
                        onClick={() => setActiveTab(3)}
                    >
                        <span className={cx('btnHeader')}>Kết Quả Thi</span>
                    </Link>
                </div>
            </div>

            {/* thông tin đợt Thi */}
            <div className={cx('TabContent')}>{children}</div>
        </div>
    );
}

export default General;
