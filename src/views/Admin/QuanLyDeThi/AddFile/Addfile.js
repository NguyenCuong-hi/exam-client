import React from 'react';
import classNames from 'classnames/bind';
import style from './AddFile.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(style);

function AddFile() {
    return (
        <div className={cx('Addfile')}>
            <h3 className={cx('heading')}>Sinh Đề Thi</h3>
            <div className={cx('flexBox')}>
                <div className={cx('sideBar')}>
                    <div className={cx('topic')}>
                        <button className={cx('btnTopic')}>Đề 1</button>
                        <button className={cx('btnTopic')}>Đề 2</button>
                        <button className={cx('btnTopic')}>Đề 3</button>
                    </div>
                </div>
                <div className={cx('border')}></div>
                <div className={cx('container')}>
                    <div className={cx('tools')}>
                        <button className={cx('btnTool')}>Hủy</button>
                        <button className={cx('btnTool')}>Xóa</button>
                    </div>
                    <div className={cx('main')}>
                        <div className={cx('Main-ex')}>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>Thêm Audio</li>
                                <li className={cx('item')}>Thêm Ảnh</li>
                                <li className={cx('item')}>Xóa</li>
                            </ul>
                            <div className={cx('borders')}></div>
                            <div className={cx('quetion')}>
                                <span className={cx('lable')}>Câu 1</span>
                                <input type="text" className={cx('inforText')} placeholder="Nhập Câu Hỏi" />
                            </div>
                            <div className={cx('Answer')}>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="A"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>A</span>
                                    <input type="text" for="A" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="B"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>B</span>
                                    <input type="text" for="B" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="C"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>C</span>
                                    <input type="text" for="C" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="D"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>D</span>
                                    <input type="text" for="D" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                            </div>
                            <div className={cx('select')}>
                                <span className={cx('AnswerLabel')}> Đáp Án : </span>
                                <span className={cx('AnswerTrue')}> B </span>
                            </div>
                        </div>
                        <div className={cx('Main-ex')}>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>Thêm Audio</li>
                                <li className={cx('item')}>Thêm Ảnh</li>
                                <li className={cx('item')}>Xóa</li>
                            </ul>
                            <div className={cx('borders')}></div>
                            <div className={cx('quetion')}>
                                <span className={cx('lable')}>Câu 1</span>
                                <input type="text" className={cx('inforText')} placeholder="Nhập Câu Hỏi" />
                            </div>
                            <div className={cx('Answer')}>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="A"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>A</span>
                                    <input type="text" for="A" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="B"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>B</span>
                                    <input type="text" for="B" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="C"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>C</span>
                                    <input type="text" for="C" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="D"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>D</span>
                                    <input type="text" for="D" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                            </div>
                            <div className={cx('select')}>
                                <span className={cx('AnswerLabel')}> Đáp Án : </span>
                                <span className={cx('AnswerTrue')}> B </span>
                            </div>
                        </div>
                        <div className={cx('Main-ex')}>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>Thêm Audio</li>
                                <li className={cx('item')}>Thêm Ảnh</li>
                                <li className={cx('item')}>Xóa</li>
                            </ul>
                            <div className={cx('borders')}></div>
                            <div className={cx('quetion')}>
                                <span className={cx('lable')}>Câu 1</span>
                                <input type="text" className={cx('inforText')} placeholder="Nhập Câu Hỏi" />
                            </div>
                            <div className={cx('Answer')}>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="A"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>A</span>
                                    <input type="text" for="A" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="B"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>B</span>
                                    <input type="text" for="B" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="C"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>C</span>
                                    <input type="text" for="C" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                                <div className={cx('btn')}>
                                    <input
                                        className={cx('btnAnswer')}
                                        id="D"
                                        type="radio"
                                        name="btnAnswer"
                                        value={'A'}
                                    />
                                    <span className={cx('chooseAnswer')}>D</span>
                                    <input type="text" for="D" className={cx('infor')} placeholder="Nhập Câu Trả Lời" />
                                </div>
                            </div>
                            <div className={cx('select')}>
                                <span className={cx('AnswerLabel')}> Đáp Án : </span>
                                <span className={cx('AnswerTrue')}> B </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFile;
