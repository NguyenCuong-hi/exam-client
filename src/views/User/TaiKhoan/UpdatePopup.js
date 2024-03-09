import React from 'react';
import classNames from 'classnames/bind';
import styles from './DisplayAccount.module.scss';

const cx = classNames.bind(styles);

function UpdatePopup({ tempFormData, isEditing, handleCancel, handleConfirm, setTempFormData }) {
    return (
        <>
            <div className={cx('popup')}>
                <div className={cx('information-form')}>
                    <div className={cx('div-avatar')}>
                        <div className={cx('avatar')}>
                            <img src={tempFormData.avatar} alt="Ảnh" className={cx('img-avatar')} />
                        </div>
                    </div>
                    <div className={cx('information')}>
                    <div  className={cx('flex-information')}>
                        <div className={cx('user-information')}>
                            <div className={cx('div-label')}>
                                <label htmlFor="">Họ và tên</label>
                            </div>
                            <div className={cx('div-information')}>
                                <input
                                    type="text"
                                    id="full-name"
                                    className={cx('input-information')}
                                    value={tempFormData.fullName}
                                    readOnly={!isEditing} // Nếu isEditing là false, readOnly sẽ là true
                                    onChange={(e) => setTempFormData({ ...tempFormData, fullName: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className={cx('user-information')}>
                            <div className={cx('div-label')}>
                                <label htmlFor="">Ngày sinh</label>
                            </div>
                            <div className={cx('div-information')}>
                                <input
                                    type="text"
                                    id="date"
                                    className={cx('input-information')}
                                    value={tempFormData.birthDate}
                                    readOnly={!isEditing} // Nếu isEditing là false, readOnly sẽ là true
                                    onChange={(e) => setTempFormData({ ...tempFormData, birthDate: e.target.value })}
                                />
                            </div>
                        </div>
                        {/* <div className={cx('user-information')}>
                            <div className={cx('div-label')}>
                                <label htmlFor="">Giới tính</label>
                            </div>
                            <div className={cx('div-information')}>
                                <input
                                    type="text"
                                    id="gender"
                                    className={cx('input-information')}
                                    value={tempFormData.gender}
                                    readOnly={!isEditing} // Nếu isEditing là false, readOnly sẽ là true
                                    onChange={(e) => setTempFormData({ ...tempFormData, gender: e.target.value })}
                                />
                            </div>
                        </div> */}
                        <div className={cx('user-information')}>
                            <div className={cx('div-label')}>
                                <label htmlFor="">Email</label>
                            </div>
                            <div className={cx('div-information')}>
                                <input
                                    type="text"
                                    id="email"
                                    className={cx('input-information')}
                                    value={tempFormData.email}
                                    readOnly={!isEditing} // Nếu isEditing là false, readOnly sẽ là true
                                    onChange={(e) => setTempFormData({ ...tempFormData, email: e.target.value })}
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
                                    id="sex"
                                    className={cx('input-information')}
                                    value={tempFormData.sex}
                                    readOnly={!isEditing}
                                    onChange={(e) => setTempFormData({ ...tempFormData, sex: e.target.value })}
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
                                    value={tempFormData.classRoom}
                                    readOnly={!isEditing}
                                    onChange={(e) => setTempFormData({ ...tempFormData, classRoom: e.target.value })}
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
                                    value={tempFormData.majors}
                                    readOnly={!isEditing}
                                    onChange={(e) => setTempFormData({ ...tempFormData, majors: e.target.value })}
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
                                    value={tempFormData.school}
                                    readOnly={!isEditing}
                                    onChange={(e) => setTempFormData({ ...tempFormData, school: e.target.value })}
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
                                    value={tempFormData.departments}
                                    readOnly={!isEditing}
                                    onChange={(e) => setTempFormData({ ...tempFormData, departments: e.target.value })}
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
                                    value={tempFormData.birthplace}
                                    readOnly={!isEditing}
                                    onChange={(e) => setTempFormData({ ...tempFormData, birthplace: e.target.value })}
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
                                    value={tempFormData.educationLevel}
                                    readOnly={!isEditing}
                                    onChange={(e) => setTempFormData({ ...tempFormData, educationLevel: e.target.value })}
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
                                    value={tempFormData.phoneNumber}
                                    readOnly={!isEditing}
                                    onChange={(e) => setTempFormData({ ...tempFormData, phoneNumber: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={cx('operation')}>
                <button className={cx('button-operation', 'save-button')} onClick={handleConfirm}>
                        Xác nhận
                    </button>
                    <button className={cx('button-operation', 'cancel-button')} onClick={handleCancel}>
                        Hủy
                    </button>
             
                </div>
            </div>
        </>
    );
}

export default UpdatePopup;
