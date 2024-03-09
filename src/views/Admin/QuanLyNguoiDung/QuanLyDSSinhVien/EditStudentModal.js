import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DisplayStudent.module.scss';

const cx = classNames.bind(styles);

function EditUserModal({ editingUser, setEditingUser, handleSaveEditUser, handleCloseEditUser }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // Hàm xử lý khi người dùng chọn ảnh
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            {/* Lớp overlay */}
            <div className={cx('overlay')} onClick={handleCloseEditUser}></div>

            {/* Nội dung cửa sổ sửa thông tin */}
            <div className={cx('editUserModal')}>
                <h2>Sửa thông tin người dùng</h2>
                <div className={cx('split__screen')}>
                    <div className={cx('display__flex')}>
                        {/* Chọn ảnh */}
                        <label>Hình ảnh: </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {selectedImage && (
                            <img
                                className={cx('selectedImage')}
                                src={selectedImage}
                                alt="Selected"
                            />
                        )}

                        <label>Họ tên: </label>
                        <input
                            type="text"
                            placeholder="Tên người dùng"
                            value={editingUser.name}
                            onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                        />
                        <label>Email: </label>
                        <input
                            type="text"
                            placeholder="Email"
                            value={editingUser.email}
                            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                        />
                    </div>
                    <div className={cx('display__flex')}>
                        <label>Ngày sinh: </label>
                        <input
                            type="date"
                            placeholder="Ngày sinh"
                            value={editingUser.birthday}
                            onChange={(e) => setEditingUser({ ...editingUser, birthday: e.target.value })}
                        />
                        <div className={cx('Gender')}>
                            <label>Giới tính: </label>
                            <div className={cx('male')}>
                                <input
                                    className={cx('inputtype')}
                                    type="radio"
                                    value="Nam"
                                    checked={editingUser.gioitinh === 'Nam'}
                                    onChange={(e) => setEditingUser({ ...editingUser, gioitinh: 'Nam' })}
                                />
                                <span>Nam</span>
                            </div>

                            <div className={cx('Female')}>
                                <input
                                    className={cx('inputtype')}
                                    type="radio"
                                    value="Nữ"
                                    checked={editingUser.gioitinh === 'Nữ'}
                                    onChange={(e) => setEditingUser({ ...editingUser, gioitinh: 'Nữ' })}
                                />
                                <span>Nữ</span>
                            </div>
                        </div>
                        <label>Username: </label>
                        <input
                            type="text"
                            placeholder="Tài khoản"
                            value={editingUser.account}
                            onChange={(e) => setEditingUser({ ...editingUser, account: e.target.value })}
                        />
                        <label>Password: </label>
                        <input
                            type="password"
                            placeholder="Tài khoản"
                            value={editingUser.password}
                            onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })}
                        />
                    </div>
                </div>
                {/* Nút lưu thông tin người dùng sau khi sửa */}
                <button onClick={handleSaveEditUser}>Lưu</button>

                {/* Nút đóng cửa sổ sửa thông tin */}
                <button onClick={handleCloseEditUser}>Đóng</button>
            </div>
        </div>

    );

}

export default EditUserModal;
