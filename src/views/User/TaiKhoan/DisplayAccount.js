import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './DisplayAccount.module.scss';
import Popup from 'reactjs-popup';
import UpdatePopup from './UpdatePopup';

const cx = classNames.bind(styles);

function DisplayAccount() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatePopup, setUpdatePopup] = useState(false);

    const [userList, setUserList] = useState([
        {
            id: 1,
            username: 'nguyenvanaanh',
            password: 'password123',
            fullName: 'Nguyễn Văn Anh',
            birthDate: '01/01/1990',
            // gender: 'Nam',
            email: 'nvanh@gmail.com',
            avatar: 'https://banner2.cleanpng.com/20180408/tvw/kisspng-user-computer-icons-gravatar-blog-happy-woman-5aca6d03e6c3f5.6041125615232156199452.jpg',
            sex: 'Nam',
            classRoom: '12A',
            majors: 'Công nghệ thông tin',
            school: 'Đại học Bách Khoa',
            departments: 'Khoa CNTT',
            birthplace: 'Hà Nội',
            educationLevel: 'Đại học',
            phoneNumber: '0987654321',
            fileName: 'hung.png',
            fileId: '12389',
        },
        {
            id: 2,
            username: 'tranthibinh',
            password: 'password123',
            fullName: 'Trần Thị Bình',
            birthDate: '02/02/1995',
            // gender: 'Nữ',
            email: 'ttbinh@gmail.com',
            avatar: 'https://banner2.cleanpng.com/20180408/tvw/kisspng-user-computer-icons-gravatar-blog-happy-woman-5aca6d03e6c3f5.6041125615232156199452.jpg',
            sex: 'Nữ',
            classRoom: '11B',
            majors: 'Kinh doanh quốc tế',
            school: 'Đại học Kinh tế',
            departments: 'Khoa Quản trị kinh doanh',
            birthplace: 'Hồ Chí Minh',
            educationLevel: 'Đại học',
            phoneNumber: '0123456789',
            fileName: 'cuong.png',
            fileId: '9871',
        },
    ]);
    

    const [formData, setFormData] = useState({
        fullName: '',
        birthDate: '',
        // gender: '',
        email: '',
        avatar: '', // Thêm trường avatar vào formData
        sex: '',
        classRoom: '',
        majors: '',
        school: '',
        departments: '',
        birthplace: '',
        educationLevel: '',
        phoneNumber: '',
    });

    const [tempFormData, setTempFormData] = useState({
        fullName: '',
        birthDate: '',
        // gender: '',
        email: '',
        avatar: '', // Thêm trường avatar vào tempFormData
        sex: '',
        classRoom: '',
        majors: '',
        school: '',
        departments: '',
        birthplace: '',
        educationLevel: '',
        phoneNumber: '',
    });

    useEffect(() => {
        /* eslint-disable react-hooks/exhaustive-deps */
        // Gọi hàm handleLogin khi component được render với giá trị mặc định
        const handleLogin = (username, password) => {
            const loggedInUser = userList.find((user) => user.username === username && user.password === password);
    
            if (loggedInUser) {
                setSelectedUser(loggedInUser);
                setFormData({
                    fullName: loggedInUser.fullName,
                    birthDate: loggedInUser.birthDate,
                    // gender: loggedInUser.gender,
                    email: loggedInUser.email,
                    avatar: loggedInUser.avatar,
                    sex: loggedInUser.sex,
                    classRoom: loggedInUser.classRoom,
                    majors: loggedInUser.majors,
                    school: loggedInUser.school,
                    departments: loggedInUser.departments,
                    birthplace: loggedInUser.birthplace,
                    educationLevel: loggedInUser.educationLevel,
                    phoneNumber: loggedInUser.phoneNumber,
                    // fileName: loggedInUser.fileName,
                    // fileId: loggedInUser.fileId,
                });
                setTempFormData({
                    fullName: loggedInUser.fullName,
                    birthDate: loggedInUser.birthDate,
                    // gender: loggedInUser.gender,
                    email: loggedInUser.email,
                    avatar: loggedInUser.avatar,
                    sex: loggedInUser.sex,
                    classRoom: loggedInUser.classRoom,
                    majors: loggedInUser.majors,
                    school: loggedInUser.school,
                    departments: loggedInUser.departments,
                    birthplace: loggedInUser.birthplace,
                    educationLevel: loggedInUser.educationLevel,
                    phoneNumber: loggedInUser.phoneNumber,
                    // fileName: loggedInUser.fileName,
                    // fileId: loggedInUser.fileId,
                });
            } else {
                alert('Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
            }
        };
    
        // Gọi hàm handleLogin với giá trị mặc định
        handleLogin('nguyenvanaanh', 'password123');
        /* eslint-enable react-hooks/exhaustive-deps */
    }, [userList]); // Rỗng để đảm bảo chỉ gọi một lần sau khi component được render
    
    const openPopup = () => {
        if (!updatePopup) {
            setUpdatePopup(true);
        }
        setTempFormData({ ...formData });
    };

    const closePopup = () => {
        setUpdatePopup(false);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        closePopup();
    };

    const handleConfirm = () => {
        setFormData({ ...tempFormData });
        setIsEditing(false);
        closePopup();
        // Xử lý logic lưu thông tin khi nhấn nút "Xác nhận"
    };

    return (
        <div className={cx('wrap')}>
            <div className={cx('user-form')}>
                <div className={cx('information-form')}>
                    <div className={cx('div-avatar')}>
                        <div className={cx('avatar')}>
                            <img src={formData.avatar} alt="Ảnh" className={cx('img-avatar')} />
                        </div>
                    </div>
                    <div className={cx('information')}>
                        <div  className={cx('flex-information')}>
                              <div className={cx('user-information')}>
                            <div className={cx('div-label')}>
                                <label for="">Họ và tên</label>
                            </div>
                            <div className={cx('div-information')}>
                                <input
                                    type="text"
                                    id="full-name"
                                    className={cx('input-information')}
                                    value={formData.fullName}
                                    readOnly
                                />
                            </div>
                        </div>
                       
                      
                        <div className={cx('user-information')}>
                            <div className={cx('div-label')}>
                                <label for="">Ngày sinh</label>
                            </div>
                            <div className={cx('div-information')}>
                                <input
                                    type="text"
                                    id="date"
                                    className={cx('input-information')}
                                    value={formData.birthDate}
                                    readOnly
                                />
                            </div>
                        </div>
                        {/* <div className={cx('user-information')}>
                            <div className={cx('div-label')}>
                                <label for="">Giới tính</label>
                            </div>
                            <div className={cx('div-information')}>
                                <input
                                    type="text"
                                    id="gender"
                                    className={cx('input-information')}
                                    value={formData.gender}
                                    readOnly
                                />
                            </div>
                        </div> */}
                        <div className={cx('user-information')}>
                            <div className={cx('div-label')}>
                                <label for="">Email</label>
                            </div>
                            <div className={cx('div-information')}>
                                <input
                                    type="text"
                                    id="email"
                                    className={cx('input-information')}
                                    value={formData.email}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className={cx('user-information')}>
    <div className={cx('div-label')}>
        <label htmlFor="">Giới tính</label>
    </div>
    <div className={cx('div-information')}>
        <input
            type="text"
            id="gender"
            className={cx('input-information')}
            value={formData.sex}
            readOnly
        />
    </div>
</div>

<div className={cx('user-information')}>
    <div className={cx('div-label')}>
        <label htmlFor="">Lớp học</label>
    </div>
    <div className={cx('div-information')}>
        <input
            type="text"
            id="classRoom"
            className={cx('input-information')}
            value={formData.classRoom}
            readOnly
        />
    </div>
</div>
<div className={cx('user-information')}>
    <div className={cx('div-label')}>
        <label htmlFor="">Chuyên ngành</label>
    </div>
    <div className={cx('div-information')}>
        <input
            type="text"
            id="majors"
            className={cx('input-information')}
            value={formData.majors}
            readOnly
        />
    </div>
</div>
</div>
<div  className={cx('flex-information')}>
<div className={cx('user-information')}>
    <div className={cx('div-label')}>
        <label htmlFor="">Trường học</label>
    </div>
    <div className={cx('div-information')}>
        <input
            type="text"
            id="school"
            className={cx('input-information')}
            value={formData.school}
            readOnly
        />
    </div>
</div>
<div className={cx('user-information')}>
    <div className={cx('div-label')}>
        <label htmlFor="">Phòng ban</label>
    </div>
    <div className={cx('div-information')}>
        <input
            type="text"
            id="departments"
            className={cx('input-information')}
            value={formData.departments}
            readOnly
        />
    </div>
</div>

<div className={cx('user-information')}>
    <div className={cx('div-label')}>
        <label htmlFor="">Nơi sinh</label>
    </div>
    <div className={cx('div-information')}>
        <input
            type="text"
            id="birthplace"
            className={cx('input-information')}
            value={formData.birthplace}
            readOnly
        />
    </div>
</div>
<div className={cx('user-information')}>
    <div className={cx('div-label')}>
        <label htmlFor="">Trình độ học vấn</label>
    </div>
    <div className={cx('div-information')}>
        <input
            type="text"
            id="educationLevel"
            className={cx('input-information')}
            value={formData.educationLevel}
            readOnly
        />
    </div>
</div>
<div className={cx('user-information')}>
    <div className={cx('div-label')}>
        <label htmlFor="">Số điện thoại</label>
    </div>
    <div className={cx('div-information')}>
        <input
            type="text"
            id="phoneNumber"
            className={cx('input-information')}
            value={formData.phoneNumber}
            readOnly
        />
    </div>
</div>
</div>
                    </div>
                </div>
                <div className={cx('operation')}>
                    <button
                        className={cx('button-operation', 'edit-button')}
                        onClick={() => {
                            openPopup();
                            setIsEditing(true);
                        }}
                    >
                        Sửa
                    </button>
                </div>
            </div>

            <Popup
                open={isEditing}
                onClose={closePopup}
                modal
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1500,
                }}
            >
                {updatePopup && (
                    <UpdatePopup
                        tempFormData={tempFormData}
                        isEditing={isEditing}
                        handleCancel={handleCancel}
                        handleConfirm={handleConfirm}
                        setTempFormData={setTempFormData}
                    />
                )}
            </Popup>
        </div>
    );
}

export default DisplayAccount;
