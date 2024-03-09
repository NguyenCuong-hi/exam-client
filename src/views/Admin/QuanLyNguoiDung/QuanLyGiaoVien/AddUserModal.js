import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DisplayTeacher.module.scss';
import * as FileSaver from 'file-saver';

const cx = classNames.bind(styles);

function AddUserModal({ newUser, setNewUser, handleSaveUser, handleModalClose }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // // Hàm xử lý khi người dùng chọn ảnh
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setSelectedImage(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };


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

    // Hàm xử lý lưu hình ảnh vào file
    // const handleSaveToFile = () => {
        
    //     if (selectedImage) {
    //         // Chuyển đổi base64 thành blob
    //         fetch(selectedImage)
              
    //             .then((response) => response.blob())
    //             .then((blob) => {
    //                 // Lưu blob thành file
    //                 FileSaver.saveAs(blob, 'ten_file.jpg');
    //             });
    //     }
        
    // };
    const handleSaveToFile = () => {
        if (selectedImage) {
            // Chuyển đổi base64 thành blob
            fetch(selectedImage)
                .then((response) => response.blob())
                .then((blob) => {
                    // Lấy tên file từ input (ví dụ: thuộc tính name của input)
                    const tenfile = selectedImage.name;
    
                    // Tạo tên file mới với tên đã có
                    const fileName = `${tenfile}.jpg`;
    
                    // Lưu blob thành file và đặt tên file
                    FileSaver.saveAs(blob, `../../../../../assets/image/GiaoVien/${fileName}`);
                });
        }
    };
    
    

    return (
        <div>
            {/* Lớp overlay */}
            <div className={cx('overlay')} onClick={handleModalClose}></div>

            {/* Nội dung cửa sổ nhập */}
            <div className={cx('addUserModal')}>
                <h2>Nhập thông tin người dùng mới</h2>
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
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        />
                        <label>Email: </label>
                        <input
                            type="text"
                            placeholder="Email"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        />

                    </div>
                    <div className={cx('display__flex')}>
                        <label>Ngày sinh: </label>
                        <input
                            type="date"
                            placeholder="Ngày sinh"
                            value={newUser.birthday}
                            onChange={(e) => setNewUser({ ...newUser, birthday: e.target.value })}
                        />
                        <div className={cx('Gender')}>
                            <label>Giới tính: </label>
                            <div className={cx('male')}>


                                <input
                                    className={cx('inputtype')}
                                    type="radio"
                                    value="Nam"
                                    checked={newUser.gioitinh === 'Nam'}
                                    onChange={(e) => setNewUser({ ...newUser, gioitinh: 'Nam' })}
                                />
                                <span>Nam</span>
                            </div>

                            <div className={cx('Female')}>

                                <input
                                    className={cx('inputtype')}
                                    type="radio"
                                    value="Nữ"
                                    checked={newUser.gioitinh === 'Nữ'}
                                    onChange={(e) => setNewUser({ ...newUser, gioitinh: 'Nữ' })}
                                />
                                <span>Nữ</span>

                            </div>

                        </div>

                        <label>Username: </label>
                        <input
                            type="text"
                            placeholder="Tài khoản"
                            value={newUser.account}
                            onChange={(e) => setNewUser({ ...newUser, account: e.target.value })}
                        />
                        <label>Password: </label>
                        <input
                            type="password"
                            placeholder="Tài khoản"
                            value={newUser.password}
                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        />
                    </div>
                </div>
                {/* Nút lưu thông tin người dùng mới */}
                <button onClick={handleSaveUser} >Lưu</button>

                {/* Nút đóng cửa sổ nhập */}
                <button onClick={handleModalClose}>Đóng</button>
            </div>
        </div>
    );
}

export default AddUserModal;
