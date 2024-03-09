import classNames from 'classnames/bind';
import styles from './Side.module.scss';
import sideBar_img from '../../../../assets/image/home.svg';
import sideBar_exercise from '../../../../assets/image/exercise.svg';
import sideBar_exam from '../../../../assets/image/exam.svg';
import sideBar_manage from '../../../../assets/image/manage.svg';
import sideBar_setting from '../../../../assets/image/seting.svg';
import CheckRole from '../../../../Authorization/CheckRole';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Sidebar() {
    const [Role, setRole] = useState('ROLE_ADMIN');
    CheckRole().then((data) => setRole(data));
    const handleHome = () => {
        const url = `/`;
        window.location.href = url;
    };
    const handleDotthi = () => {
        const url = `/admin/quan-ly-ki-thi`;
        window.location.href = url;
    };
    const handleBankEx = () => {
        const url = `/admin/ngan-hang-cau-hoi`;
        window.location.href = url;
    };

    const handleManageUser = () => {
        const url = `/Admin/quan-ly-nguoi-dung/Teacher`;
        window.location.href = url;
    };

    const handleNguoiDung = () => {
        const url = `/admin/quan-ly-nguoi-dung`;
        window.location.href = url;
    };

    const handleNganHangCauHoi = () => {
        const url = `/admin/ngan-hang-cau-hoi`;
        window.location.href = url;
    };

    return (
        <div className={cx('wrapper')}>
            <aside>
                {Role === 'ROLE_ADMIN' ? (
                    <nav>
                        <span className={cx('boder-style')}></span>
                        <div className={cx('sideBar')}>
                            <ul className={cx('sideBar-item')}>
                                <li className={cx('sideBar-list')} onClick={() => handleHome()}>
                                    <img className={cx('sideBar-img')} src={sideBar_img}></img>
                                </li>
                                <li className={cx('sideBar-list')} onClick={() => handleDotthi()}>
                                    <img className={cx('sideBar-img')} src={sideBar_exercise}></img>
                                </li>
                                <li className={cx('sideBar-list')} onClick={() => handleBankEx()}>
                                    <img className={cx('sideBar-img')} src={sideBar_exam}></img>
                                </li>
                                {/* //{' '}
                            <li className={cx('sideBar-list')} onClick={() => handleManageUser()}>
                                //{' '}
                            </li> */}
                                <li className={cx('sideBar-list')} onClick={() => handleManageUser()}>
                                    <img className={cx('sideBar-img')} src={sideBar_exam}></img>
                                </li>
                                <li className={cx('sideBar-list')} onClick={() => handleNganHangCauHoi()}>
                                    <img className={cx('sideBar-img')} src={sideBar_manage}></img>
                                </li>
                            </ul>
                            <ul className={cx('sideBar-item', 'setting')}>
                                <li className={cx('sideBar-list')}>
                                    <img className={cx('sideBar-img')} src={sideBar_setting}></img>
                                </li>
                            </ul>
                        </div>
                    </nav>
                ) : (
                    <nav>
                        <span className={cx('boder-style')}></span>
                        <div className={cx('sideBar')}>
                            <ul className={cx('sideBar-item')}>
                                <li className={cx('sideBar-list')} onClick={() => handleHome()}>
                                    <img className={cx('sideBar-img')} src={sideBar_img}></img>
                                </li>
                                <li className={cx('sideBar-list')} onClick={() => handleDotthi()}>
                                    <img className={cx('sideBar-img')} src={sideBar_exercise}></img>
                                </li>
                                <li className={cx('sideBar-list')} onClick={() => handleBankEx()}>
                                    <img className={cx('sideBar-img')} src={sideBar_exam}></img>
                                </li>
                                {/* //{' '}
                            <li className={cx('sideBar-list')} onClick={() => handleManageUser()}>
                                //{' '}
                            </li> */}
                            </ul>
                            <ul className={cx('sideBar-item', 'setting')}>
                                <li className={cx('sideBar-list')}>
                                    <img className={cx('sideBar-img')} src={sideBar_setting}></img>
                                </li>
                            </ul>
                        </div>
                    </nav>
                )}
            </aside>
        </div>
    );
}

export default Sidebar;
