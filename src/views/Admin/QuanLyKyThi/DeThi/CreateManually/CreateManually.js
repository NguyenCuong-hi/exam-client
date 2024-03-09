import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// import Popup from 'reactjs-popup';
// import CreatExam from './CreateExam';
import styles from './CreateManually.module.scss'; // Đảm bảo import CSS cho form
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function CreateManually() {
    return (
        <div className={cx('CraeteManually')}>
            <div className={cx('navHeader')}>
                <Link to="/admin/quan-ly-ki-thi/de-thi" className={cx('btnBack')}>
                    <i className={cx('fa-solid fa-chevron-left', 'backIcon')}></i>
                    <span className={cx('backLable')}>Quay Lại</span>
                </Link>
                <h3 className={cx('nameSubject')}>Mạng Máy Tính</h3>
                <div className={cx('btnSearch')}>
                    <input type="text" placeholder="Search...." className={cx('inputSearch')} />
                    <i className={cx('fa-solid fa-magnifying-glass', 'searchIcon')}></i>
                </div>
                <div className={cx('btnNumber')}>
                    <span className={cx('labelNum')}>Số Câu Đã Chọn : </span>
                    <span className={cx('labelNum')}>6</span>
                </div>
                <div className={cx('btnSubmit')}>
                    <span className={cx('subLable')}>Hoàn Tất</span>
                </div>
            </div>
            <div className={cx('Border')}></div>
            <div className={cx('main')}>
                <div className={cx('Main-ex')}>
                    <div className={cx('quetion')}>
                        <span className={cx('lable')}>Câu 1</span>
                        <input type="text" className={cx('inforText')} placeholder="Nhập Câu Hỏi" />
                    </div>
                    <div className={cx('Answer')}>
                        <div className={cx('btn')}>
                            <input className={cx('btnAnswer')} id="A" type="radio" name="btnAnswer" value={'A'} />
                            <span className={cx('chooseAnswer')}>A</span>
                            <input type="text" htmlFor="A" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                        </div>
                        <div className={cx('btn')}>
                            <input className={cx('btnAnswer')} id="B" type="radio" name="btnAnswer" value={'A'} />
                            <span className={cx('chooseAnswer')}>B</span>
                            <input type="text" htmlFor="B" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                        </div>
                        <div className={cx('btn')}>
                            <input className={cx('btnAnswer')} id="C" type="radio" name="btnAnswer" value={'A'} />
                            <span className={cx('chooseAnswer')}>C</span>
                            <input type="text" htmlFor="C" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                        </div>
                        <div className={cx('btn')}>
                            <input className={cx('btnAnswer')} id="D" type="radio" name="btnAnswer" value={'A'} />
                            <span className={cx('chooseAnswer')}>D</span>
                            <input type="text" htmlFor="D" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                        </div>
                    </div>
                    <div className={cx('select')}>
                        <span className={cx('AnswerLabel')}> Đáp Án : </span>
                        <span className={cx('AnswerTrue')}> B </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateManually;
