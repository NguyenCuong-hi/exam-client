import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ItemExam.module.scss'; // Đảm bảo import CSS cho form
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function ItemExam() {
    return (
        <div className={cx('itemExam')}>
            <div className={cx('lists')}>
                <div className={cx('btn-tool')}>
                    <Link to="/admin/quan-ly-ki-thi/de-thi/sua" className={cx('btnList')}>
                        Sửa
                    </Link>
                    <Link className={cx('btnList')}>Duyệt Đề </Link>
                </div>
                <div className={cx('heading')}>
                    <span className={cx('NameHead')}>Đề Thi Đánh Giá Năng Lực Draytek</span>
                    <span className={cx('minute')}>Thời Gian : 60 Phút</span>
                </div>
                <div className={cx('list')}>
                    <span className={cx('quetion')}>
                        Câu 1 : Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?hông thường nằm ở tầng nào của
                        mô hình OSI?hông thường nằm ở tầng nào của mô hình OSI?
                    </span>
                    <div className={cx('answers')}>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> A .</span>
                            <span className={cx('choose')}> Tâng 1 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> B .</span>
                            <span className={cx('choose')}> Tâng 2 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> C .</span>
                            <span className={cx('choose')}> Tâng 3 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> D .</span>
                            <span className={cx('choose')}> Tất Cả Đề Sai </span>
                        </div>
                    </div>
                </div>
                <div className={cx('list')}>
                    <span className={cx('quetion')}>
                        Câu 1 : Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?hông thường nằm ở tầng nào của
                        mô hình OSI?hông thường nằm ở tầng nào của mô hình OSI?
                    </span>
                    <div className={cx('answers')}>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> A .</span>
                            <span className={cx('choose')}> Tâng 1 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> B .</span>
                            <span className={cx('choose')}> Tâng 2 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> C .</span>
                            <span className={cx('choose')}> Tâng 3 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> D .</span>
                            <span className={cx('choose')}> Tất Cả Đề Sai </span>
                        </div>
                    </div>
                </div>
                <div className={cx('list')}>
                    <span className={cx('quetion')}>
                        Câu 1 : Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?hông thường nằm ở tầng nào của
                        mô hình OSI?hông thường nằm ở tầng nào của mô hình OSI?
                    </span>
                    <div className={cx('answers')}>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> A .</span>
                            <span className={cx('choose')}> Tâng 1 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> B .</span>
                            <span className={cx('choose')}> Tâng 2 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> C .</span>
                            <span className={cx('choose')}> Tâng 3 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> D .</span>
                            <span className={cx('choose')}> Tất Cả Đề Sai </span>
                        </div>
                    </div>
                </div>
                <div className={cx('list')}>
                    <span className={cx('quetion')}>
                        Câu 1 : Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?hông thường nằm ở tầng nào của
                        mô hình OSI?hông thường nằm ở tầng nào của mô hình OSI?
                    </span>
                    <div className={cx('answers')}>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> A .</span>
                            <span className={cx('choose')}> Tâng 1 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> B .</span>
                            <span className={cx('choose')}> Tâng 2 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> C .</span>
                            <span className={cx('choose')}> Tâng 3 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> D .</span>
                            <span className={cx('choose')}> Tất Cả Đề Sai </span>
                        </div>
                    </div>
                </div>
                <div className={cx('list')}>
                    <span className={cx('quetion')}>
                        Câu 1 : Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?hông thường nằm ở tầng nào của
                        mô hình OSI?hông thường nằm ở tầng nào của mô hình OSI?
                    </span>
                    <div className={cx('answers')}>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> A .</span>
                            <span className={cx('choose')}> Tâng 1 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> B .</span>
                            <span className={cx('choose')}> Tâng 2 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> C .</span>
                            <span className={cx('choose')}> Tâng 3 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> D .</span>
                            <span className={cx('choose')}> Tất Cả Đề Sai </span>
                        </div>
                    </div>
                </div>
                <div className={cx('list')}>
                    <span className={cx('quetion')}>
                        Câu 1 : Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?hông thường nằm ở tầng nào của
                        mô hình OSI?hông thường nằm ở tầng nào của mô hình OSI?
                    </span>
                    <div className={cx('answers')}>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> A .</span>
                            <span className={cx('choose')}> Tâng 1 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> B .</span>
                            <span className={cx('choose')}> Tâng 2 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> C .</span>
                            <span className={cx('choose')}> Tâng 3 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> D .</span>
                            <span className={cx('choose')}> Tất Cả Đề Sai </span>
                        </div>
                    </div>
                </div>
                <div className={cx('list')}>
                    <span className={cx('quetion')}>
                        Câu 1 : Thiết bị hub thông thường nằm ở tầng nào của mô hình OSI?hông thường nằm ở tầng nào của
                        mô hình OSI?hông thường nằm ở tầng nào của mô hình OSI?
                    </span>
                    <div className={cx('answers')}>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> A .</span>
                            <span className={cx('choose')}> Tâng 1 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> B .</span>
                            <span className={cx('choose')}> Tâng 2 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> C .</span>
                            <span className={cx('choose')}> Tâng 3 </span>
                        </div>
                        <div className={cx('answer')}>
                            <span className={cx('choose')}> D .</span>
                            <span className={cx('choose')}> Tất Cả Đề Sai </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemExam;
