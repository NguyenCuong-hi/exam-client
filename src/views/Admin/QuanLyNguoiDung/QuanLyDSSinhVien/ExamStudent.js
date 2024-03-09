import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ExamStudent.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ExamStudent() {
    const [danhsach, setdanhsach] = useState([
        { phongthi: 'Danh Sách Thi Draytek' },
        { phongthi: 'Danh Sách Thi Lab' },
        // Thêm dữ liệu người dùng khác nếu cần
    ]);

    const [studentList, setStudentList] = useState([]);
    const [selectedRoomForEdit, setSelectedRoomForEdit] = useState(null);
    const [newListName, setNewListName] = useState('');

    const handleRoomClick = async (roomName) => {
        try {
            // TODO: Thay thế đoạn này bằng logic cụ thể của bạn để lấy danh sách sinh viên từ phòng thi
            const response = await fetch(`API_URL/${roomName}/students`);
            const data = await response.json();
            setStudentList(data);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sinh viên:', error);
        }
    };

    const handleEditRoomClick = (roomName) => {
        setSelectedRoomForEdit(roomName);
    };

    const handleSaveRoomClick = () => {
        setdanhsach((prevList) =>
            prevList.map((phong) =>
                phong.phongthi === selectedRoomForEdit ? { phongthi: selectedRoomForEdit } : phong,
            ),
        );
        setSelectedRoomForEdit(null);
    };
    const handCloseRoomClick = () => {
        setSelectedRoomForEdit(null);
    };

    const handleEditRoomChange = (value) => {
        setSelectedRoomForEdit(value);
    };

    const handleListNameChange = (event) => {
        setNewListName(event.target.value);
    };

    const handleAddListClick = () => {
        if (newListName.trim() !== '') {
            setdanhsach((prevList) => [...prevList, { phongthi: newListName }]);
            setNewListName('');
            handleAddListClose();
        } else {
            alert('Vui lòng nhập tên danh sách');
        }
    };

    const [isAddListOpen, setIsAddListOpen] = useState(false);

    const handleAddListOpen = () => {
        setIsAddListOpen(true);
    };

    const handleAddListClose = () => {
        setIsAddListOpen(false);
        setNewListName(''); // Reset giá trị của input sau khi đóng cửa sổ
    };

    return (
        <div className={cx('Addfile')}>
            <div className={cx('flexBox')}>
                <div className={cx('sideBar')}>
                    <div className={cx('topic')}>
                        <Link className={cx('link')} to="/Admin/quan-ly-nguoi-dung/Teacher">
                            <button className={cx('btnTopic')}>Giáo Viên</button>
                        </Link>
                        <button className={cx('btnTopic', 'active')}>
                            <Link className={cx('link')} to="/Admin/quan-ly-nguoi-dung/danhsachphongthi">
                                Thí Sinh
                            </Link>
                        </button>
                    </div>
                </div>
                {/* <div className={cx('border')}></div> */}
                <div className={cx('container')}>
                    <div className={cx('tools')}>
                        {/* <input
                            type="text"
                            value={newListName}
                            onChange={handleListNameChange}
                            className={cx('inputName')}
                        /> */}
                        <input type="text" className={cx('inputName')} />
                        <button className={cx('btnTool')} onClick={handleAddListOpen}>
                            Thêm Danh Sách
                        </button>
                    </div>
                    <div className={cx('main')}>
                        <div className={cx('table')}>
                            <ul className={cx('item')}>
                                <li className={cx('list')}>
                                    <span className={cx('lable')}>Danh Sách Người Dùng</span>
                                </li>
                            </ul>
                            <div className={cx('border-style')}></div>
                            {danhsach.map((phong, index) => (
                                <ul className={cx('item')}>
                                    <li className={cx('list')}>
                                        <Link
                                            className={cx('link')}
                                            to={`/Admin/quan-ly-nguoi-dung/danhsachphongthi/student`}
                                        >
                                            <span className={cx('lables')}>{phong.phongthi}</span>
                                        </Link>
                                    </li>
                                    <button
                                        className={cx('btnEdit')}
                                        onClick={() => handleEditRoomClick(phong.phongthi)}
                                    >
                                        Sửa
                                    </button>
                                </ul>
                            ))}
                            {/* <div className={cx('border-styles')}></div> */}
                        </div>
                    </div>

                    {/* Sửa danh sách*/}
                    {selectedRoomForEdit && (
                        <div className={cx('overlay', (onclick = { handleAddListClose }))}>
                            <div className={cx('editList')}>
                                <>
                                    <h2>Sửa Thông Tin Phòng Thi</h2>
                                    {/* Hiển thị form sửa thông tin, có thể sử dụng các trường input */}
                                    {/* <div className= {cx('inputCenter')}> */}
                                    <input
                                        type="text"
                                        value={selectedRoomForEdit}
                                        onChange={(e) => handleEditRoomChange(e.target.value)}
                                        className={cx('inputName')}
                                    />
                                    {/* </div> */}
                                    {/* Các trường input khác */}
                                    <div className={cx('button-group')}>
                                        <button className={cx('btnSave')} onClick={handleSaveRoomClick}>
                                            Lưu
                                        </button>
                                        <button className={cx('btnCancel')} onClick={handCloseRoomClick}>
                                            Hủy
                                        </button>
                                    </div>
                                </>
                            </div>
                        </div>
                    )}
                    {/* Popup "Thêm Danh Sách" */}
                    {isAddListOpen && (
                        <div className={cx('overlay', (onclick = { handleAddListClose }))}>
                            <div className={cx('addList')}>
                                <h2>Thêm Danh Sách Người Dùng Mới</h2>
                                Tên danh sách người dùng
                                <input
                                    type="text"
                                    value={newListName}
                                    onChange={handleListNameChange}
                                    className={cx('inputName')}
                                />
                                <div className={cx('button-group')}>
                                    <button className={cx('btnSave')} onClick={handleAddListClick}>
                                        Thêm
                                    </button>
                                    <button className={cx('btnCancel')} onClick={handleAddListClose}>
                                        Hủy
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Overlay */}
                {/* {isAddListOpen && <div className={cx('overlay')} onClick={handleAddListClose}></div>} */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default ExamStudent;
