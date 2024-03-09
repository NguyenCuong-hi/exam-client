import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../../../logo.svg';
import image_user from '../../../../assets/image/user.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Header() {
    const [isActive, setActive] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        const token = localStorage.getItem('assetToken');
        console.log(token);
        if (token) {
            localStorage.removeItem('assetToken');
            navigate('/login');
        } else {
            navigate('/login');
        }
    };

    return (
        <header className={cx('header')}>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-header')}>
                    <div className={cx('logo')}>
                        <img className={cx('logo-img')} src={logo} alt="Hình ảnh" />
                    </div>

                    <div className={cx('navigation')}>
                        <div className={cx('nav-header')}>
                            <ul className={cx('nav-item')}>
                                <li className={cx('nav-item-list', 'language')}>
                                    <a href="#" className={cx('nav-item-link')}>
                                        <img
                                            className={cx('nav-item-img')}
                                            src={
                                                'https://239114911.e.cdneverest.net/cdnazota/storage_public/azota_assets/flag/vi.svg'
                                            }
                                        />
                                    </a>

                                    <ul className={cx('languege-item')}>
                                        <li className={cx('language-list')}>
                                            <a className={cx('language-link')}>
                                                <img
                                                    className={cx('language-link-img')}
                                                    src={
                                                        'https://239114911.e.cdneverest.net/cdnazota/storage_public/azota_assets/flag/vi.svg'
                                                    }
                                                />
                                                <span>Tiếng Việt</span>
                                            </a>
                                        </li>
                                        <li className={cx('language-list')}>
                                            <a className={cx('language-link')}>
                                                <img
                                                    className={cx('language-link-img')}
                                                    src={
                                                        'https://239114911.e.cdneverest.net/cdnazota/storage_public/azota_assets/flag/en.svg'
                                                    }
                                                />
                                                <span>Tiếng Anh</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className={cx('nav-item-list', 'bell')}>
                                    <a href="#" className={cx('nav-item-link')}>
                                        <i className={cx(' fa-regular fa-bell', 'nav-noti-icon')}></i>
                                    </a>
                                    <div className={cx('notication')}>
                                        <h4 className={cx('notication-heading')}>Thông Báo</h4>
                                        <span className={cx('notication-infor')}> Chưa Có Thông Báo Nào</span>
                                    </div>
                                </li>
                                <li className={cx('nav-item-list', 'user')}>
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActive(!isActive);
                                        }}
                                        href="#"
                                        className={cx('nav-item-link')}
                                    >
                                        <img className={cx('nav-user-img')} src={image_user}></img>
                                    </a>
                                    <div className={cx('user-select', `${isActive ? 'active' : ''}`)}>
                                        <h4 className={cx('uesr-name')}>Trung Hiếu</h4>
                                        <span className={cx('user-roll')}>Giáo Viên</span>
                                        <span className={cx('border-style')}></span>

                                        <ul className={cx('user-item')}>
                                            <li className={cx('user-list')}>
                                                <a className={cx('user-link')}>
                                                    <i className={cx('fa-regular fa-user', 'user-icon')}></i>
                                                    <span className={cx('user-infor ')}>Tài Khoản</span>
                                                </a>
                                            </li>
                                            <li className={cx('user-list')}>
                                                <a className={cx('user-link')}>
                                                    <i className={cx('fa-solid fa-right-left', 'user-icon')}></i>
                                                    <span className={cx('user-infor')}>Vào Màn Học Sinh</span>
                                                </a>
                                            </li>
                                            <li className={cx('user-list')}>
                                                <a className={cx('user-link')}>
                                                    <i className={cx('fa-solid fa-moon', 'user-icon')}></i>
                                                    <span className={cx('user-infor')}>Chế Độ Tối</span>
                                                </a>
                                            </li>
                                            <li className={cx('user-list')}>
                                                <a className={cx('user-link')}>
                                                    <i className={cx('fa-solid fa-arrows-rotate', 'user-icon')}></i>
                                                    <span className={cx('user-infor')}>Refrech</span>
                                                </a>
                                            </li>
                                            <li onClick={handleLogout} className={cx('user-list')}>
                                                <a className={cx('user-link')}>
                                                    <i
                                                        className={cx(
                                                            'fa-solid fa-arrow-right-from-bracket',
                                                            'user-icon',
                                                        )}
                                                    ></i>
                                                    <span className={cx('user-infor')}>Đăng Xuất</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
