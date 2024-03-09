import React from 'react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import style from './AddQuestion.module.scss';
import { addQuestService } from '../../../services/Admin/QLNganHangCauHoi';
const cx = classNames.bind(style);

function AddQuestion({ onClose }) {
    const [useContent, setContent] = useState('');
    const [useAnswerA, setAnswerA] = useState('');
    const [useAnswerB, setAnswerB] = useState('');
    const [useAnswerC, setAnswerC] = useState('');
    const [useAnswerD, setAnswerD] = useState('');
    const createProductSubmitHandler = (e) => {
        e.preventDefault();
        let answer = {
            useContent: useContent,
            useAnswerA: useAnswerA,
            useAnswerB: useAnswerB,
            useAnswerC: useAnswerC,
            useAnswerD: useAnswerD,
        };
        // addQuestService(answer).then((res) => {
        //     // this.props.navigatate('/admin/category');
        // });
        onClose();

        console.log(answer);
    };

    return (
        <div className={cx('Main-ex')}>
            <form className="createProductForm" encType="multipart/form-data" onSubmit={createProductSubmitHandler}>
                <ul className={cx('list')}>
                    <li className={cx('item')} onClick={onClose}>
                        Hủy
                    </li>
                    <li className={cx('item')}>
                        <button type="submit"> Thêm </button>
                    </li>
                </ul>
                <div className={cx('borders')}></div>

                <div className={cx('quetion')}>
                    {/* <span className={cx('lable')}>Câu {index + 1}</span> */}
                    <span className={cx('lable')}>Nội dung</span>
                    <input
                        type="text"
                        className={cx('inforText')}
                        value={useContent}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className={cx('Answer')}>
                    <div className={cx('btn')}>
                        <input className={cx('btnAnswer')} id="A" type="radio" name="btnAnswer" value={'A'} />
                        <span className={cx('chooseAnswer')}>A</span>
                        <input
                            type="text"
                            htmlFor="A"
                            className={cx('infor')}
                            value={useAnswerA}
                            onChange={(e) => setAnswerA(e.target.value)}
                        />
                    </div>
                    <div className={cx('btn')}>
                        <input className={cx('btnAnswer')} id="B" type="radio" name="btnAnswer" value={'A'} />
                        <span className={cx('chooseAnswer')}>B</span>
                        <input
                            type="text"
                            htmlFor="B"
                            className={cx('infor')}
                            value={useAnswerB}
                            onChange={(e) => setAnswerB(e.target.value)}
                        />
                    </div>
                    <div className={cx('btn')}>
                        <input className={cx('btnAnswer')} id="C" type="radio" name="btnAnswer" value={'A'} />
                        <span className={cx('chooseAnswer')}>C</span>
                        <input
                            type="text"
                            htmlFor="C"
                            className={cx('infor')}
                            value={useAnswerC}
                            onChange={(e) => setAnswerC(e.target.value)}
                        />
                    </div>
                    <div className={cx('btn')}>
                        <input className={cx('btnAnswer')} id="D" type="radio" name="btnAnswer" value={'A'} />
                        <span className={cx('chooseAnswer')}>D</span>
                        <input
                            type="text"
                            htmlFor="D"
                            className={cx('infor')}
                            value={useAnswerD}
                            onChange={(e) => setAnswerD(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddQuestion;
