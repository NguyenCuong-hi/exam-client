import React from 'react';
import classNames from 'classnames/bind';
import style from './Matrix.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(style);

function AddFile() {
    return (
        <div className={cx('Matrix')}>
            <h3 className={cx('heading')}>Ma Trận Đề</h3>
            <div className={cx('flexBox')}>
                <div className={cx('sideBar')}>
                    <div className={cx('select')}>
                        <select className={cx('choose')} name="subject" id="subject">
                            <option className={cx('option')} value="Math">
                                Toán
                            </option>
                            <option className={cx('option')} value="physical">
                                Vậy Lý
                            </option>
                        </select>
                    </div>
                </div>
                <div className={cx('border')}></div>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('contentHeader')}>
                            <span className={cx('lable')}> Số Đề : </span>
                            <input type="text" className={cx('numbers')} />
                        </div>
                        <div className={cx('contentHeader')}>
                            <span className={cx('lable')}> Đợt Thi :</span>
                            <select className={cx('selects')} name="subject" id="subject">
                                <option className={cx('options')} value="Toán">
                                    Toán
                                </option>
                                <option className={cx('options')} value="physical">
                                    Vậy Lý
                                </option>
                            </select>
                        </div>
                        <div className={cx('contentHeader', 'btn')}>
                            <button className={cx('btnTool')}>Hủy</button>
                            <button className={cx('btnTool')}>Tạo Đề</button>
                        </div>
                    </div>
                    <div className={cx('infor')}>
                        <table className={cx('Table')}>
                            <tr className={cx('row')}>
                                <th className={cx('heading_title')}>Chương</th>
                                <th className={cx('heading_title')}>Số Câu Dễ </th>
                                <th className={cx('heading_title')}>Số Câu khó</th>
                                <th className={cx('heading_title')}>Số Câu Rất Khó</th>
                            </tr>
                            <tr className={cx('row')}>
                                <th className={cx('heading_title')}>Chương 1</th>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                            </tr>
                            <tr className={cx('row')}>
                                <th className={cx('heading_title')}>Chương 2</th>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                            </tr>
                            <tr className={cx('row')}>
                                <th className={cx('heading_title')}>Chương 3</th>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                            </tr>
                            <tr className={cx('row')}>
                                <th className={cx('heading_title')}>Chương 4</th>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                            </tr>
                            <tr className={cx('row')}>
                                <th className={cx('heading_title')}> Tổng</th>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                                <td className={cx('title')}>
                                    <input className={cx('input-num')} type="text" />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFile;
