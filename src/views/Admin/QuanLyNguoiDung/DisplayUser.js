import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DisplayUser.module.scss';
import * as XLSX from 'xlsx';

const cx = classNames.bind(styles);

function DisplayUser() {
     //Hàm format birthday
     const formatBirthday = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        // Định dạng ngày và tháng thành chuỗi có hai chữ số
        const formattedDay = day < 10 ? `0${day}` : `${day}`;
        const formattedMonth = month < 10 ? `0${month}` : `${month}`;

        return `${formattedDay}/${formattedMonth}/${year}`;
    };
    const [users, setUsers] = useState([
        { name: 'Nguyễn Trung Hiếu', account: 'Trunghieu72', email: 'nguyentrunghieu@gmail.com', birthday: '2003/11/26' },
        { name: 'Nguyễn Đức Tùng', account: 'ductung123', email: 'ductung123@gmail.com', birthday: '2003/11/26' },
        // Thêm dữ liệu người dùng khác nếu cần
    ]);

    //Thêm dữ liệu
    const [newUser, setNewUser] = useState({ name: '', account: '', email: '', birthday: '' });
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    const handleAddUserClick = () => {
        setIsAddUserModalOpen(true);
        if (currentModal === null) {
            setCurrentModal('addUser');
        }
    };

    const handleModalClose = () => {
        setIsAddUserModalOpen(false);
        setCurrentModal(null);
        // Đặt lại thông tin người dùng mới khi đóng cửa sổ nhập
        setNewUser({ name: '', account: '', email: '', birthday: '' });
    };

    const handleSaveUser = () => {
        // Kiểm tra xem các trường thông tin của người dùng mới có đầy đủ không
        if (newUser.name && newUser.account && newUser.email && newUser.birthday) {
            // Thêm người dùng mới vào mảng users
            setUsers([...users, newUser]);
            // Đóng cửa sổ nhập
            handleModalClose();
        } else {
            // Hiển thị thông báo hoặc xử lý tùy thuộc vào yêu cầu của bạn khi thông tin không đầy đủ
            console.error('Vui lòng nhập đầy đủ thông tin người dùng.');
        }
    };

    //XÓa user
    // Thêm state mới
    const [confirmDeleteUser, setConfirmDeleteUser] = useState(null);

    // Hàm mở cửa sổ xác nhận xóa
    const handleOpenConfirmDelete = (user) => {
        setConfirmDeleteUser(user);
        if (currentModal === null) {
            setCurrentModal('confirmDelete');
        }
    };

    // Hàm đóng cửa sổ xác nhận xóa
    const handleCloseConfirmDelete = () => {
        setCurrentModal(null);
        setConfirmDeleteUser(null);
    };

    // Thêm state mới cho thông tin người dùng đang được sửa
    const [editingUser, setEditingUser] = useState(null);

    // Hàm mở cửa sổ sửa thông tin
    const handleOpenEditUser = (user) => {
        setEditingUser(user);
        if (currentModal === null) {
            setCurrentModal('editUser');
        }
    };

    // Hàm đóng cửa sổ sửa thông tin
    const handleCloseEditUser = () => {
        setCurrentModal(null);
        setEditingUser(null);
    };


    // Hàm lưu thông tin người dùng sau khi sửa
    const handleSaveEditUser = () => {
        if (editingUser) {
            // Tìm vị trí của người dùng trong mảng
            const index = users.findIndex((user) => user === editingUser);

            // Tạo mảng mới với thông tin người dùng đã được sửa
            const updatedUsers = [...users];
            updatedUsers[index] = editingUser;

            // Cập nhật state và đóng cửa sổ sửa thông tin
            setUsers(updatedUsers);
            handleCloseEditUser();
        }
    };
    // Hàm xác nhận xóa người dùng
    const handleConfirmDelete = () => {
        if (confirmDeleteUser) {
            const updatedUsers = users.filter((user) => user !== confirmDeleteUser);
            setUsers(updatedUsers);
            handleCloseConfirmDelete();
        }
    };
    //Hiển thị thông tin người dùng
    // Thêm state mới để lưu thông tin chi tiết người dùng
    const [selectedUserDetail, setSelectedUserDetail] = useState(null);

    // Hàm mở cửa sổ hiển thị thông tin chi tiết
    const handleOpenUserDetail = (user) => {
        setSelectedUserDetail(user);
    };

    // Hàm đóng cửa sổ hiển thị thông tin chi tiết
    const handleCloseUserDetail = () => {
        setSelectedUserDetail(null);
    };
    //Khi click vào button 'Thêm' thì các button khác không click được
    const [currentModal, setCurrentModal] = useState(null);

    //Import danh sách
    // Hàm xử lý sự kiện import
    const [importedUsers, setImportedUsers] = useState([]);
    const handleImport = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const importedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                // Chuyển đổi dữ liệu từ Excel thành định dạng người dùng và thêm vào importedUsers
                const importedUsersData = importedData.slice(1).map((row) => ({
                    name: row[0],
                    account: row[1],
                    email: row[2],
                    birthday: row[3],
                }));
                setImportedUsers(importedUsersData);
            };
            reader.readAsArrayBuffer(file);
        }
    };
    // State để kiểm soát việc hiển thị popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Hàm mở popup
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    // Hàm đóng popup
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className={cx('Addfile')}>
            <div className={cx('flexBox')}>
                <div className={cx('sideBar')}>
                    <div className={cx('topic')}>
                        <button className={cx('btnTopic', 'active')}>Giáo Viên </button>
                        <button className={cx('btnTopic')}>Thí Sinh</button>
                    </div>
                </div>
                <div className={cx('border')}></div>
                <div className={cx('container')}>
                    <div className={cx('tools')}>
                        <input type="text" className={cx('inputName')} />
                        {/* import đầu vào */}
                        <input type="file" className={cx('fileInput')} onChange={handleImport} />
                        {/* <button className={cx('btnTool')} >Import</button> */}
                        <button className={cx('btnTool')} onClick={handleImport}>
                            Import
                        </button>
                        <button className={cx('btnTool')}>Export</button>
                        {/* <input type="file" className={cx('fileInput')} onChange={handleImport} /> */}
                        <button className={cx('btnTool')} onClick={handleAddUserClick}>
                            Thêm
                        </button>
                    </div>

                    <div className={cx('main')}>
                        <div className={cx('table')}>
                            <ul className={cx('item')}>
                                <li className={cx('list')}>
                                    <span className={cx('lable', 'center')}>Tên</span>
                                </li>
                                <li className={cx('list')}>
                                    <span className={cx('lable', 'center')}> Tài Khoản </span>
                                </li>
                                <li className={cx('list')}>
                                    <span className={cx('lable', 'center')}>Gmail</span>
                                </li>
                                <li className={cx('list')}>
                                    <span className={cx('lable', 'center')}>Ngày Sinh</span>
                                </li>
                                <li className={cx('list')}>
                                    <span className={cx('lable', 'center')}></span>
                                </li>
                            </ul>
                            <div className={cx('border-style')}></div>

                            {users.map((user, index) => (
                                <ul className={cx('item')} key={index}>
                                    <li className={cx('list')} onClick={() => handleOpenUserDetail(user)}>
                                        <span className={cx('lable', 'hoverchuot')}>{user.name}</span>
                                    </li>

                                    {/* Tài khoản */}
                                    <li className={cx('list')} onClick={() => handleOpenUserDetail(user)}>
                                        <span className={cx('lable', 'hoverchuot')}>{user.account}</span>
                                    </li>

                                    {/* Gmail */}
                                    <li className={cx('list')} onClick={() => handleOpenUserDetail(user)}>
                                        <span className={cx('lable', 'hoverchuot')}>{user.email}</span>
                                    </li>

                                    {/* Ngày sinh */}
                                    <li className={cx('list')} onClick={() => handleOpenUserDetail(user)}>
                                        <span className={cx('lable', 'hoverchuot')}>{formatBirthday(user.birthday)}</span>
                                    </li>
                                    <button className={cx('listbtn', 'listbtn-edit')} onClick={() => handleOpenEditUser(user)}>Sửa</button>

                                    <button className={cx('listbtn', 'listbtn-delete')} onClick={() => handleOpenConfirmDelete(user)}>Xóa</button>

                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hiển thị cửa sổ nhập khi nút "Thêm" được nhấp */}
            {currentModal === 'addUser' && isAddUserModalOpen && (
        <div>
          {/* Lớp overlay */}
          <div className={cx('overlay')} onClick={handleModalClose}></div>

          {/* Nội dung cửa sổ nhập */}
          <div className={cx('addUserModal')}>
            <h2>Nhập thông tin người dùng mới</h2>
            <label>Tên người dùng: </label>
            <input
              type="text"
              placeholder="Tên người dùng"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <label>Tài khoản: </label>
            <input
              type="text"
              placeholder="Tài khoản"
              value={newUser.account}
              onChange={(e) => setNewUser({ ...newUser, account: e.target.value })}
            />
            <label>Email: </label>
            <input
              type="text"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <label>Ngày sinh: </label>
            <input
              type="date"
              placeholder="Ngày sinh"
              value={newUser.birthday}
              onChange={(e) => setNewUser({ ...newUser, birthday: e.target.value })}
            />

            {/* Nút lưu thông tin người dùng mới */}
            <button onClick={handleSaveUser}>Lưu</button>

            {/* Nút đóng cửa sổ nhập */}
            <button onClick={handleModalClose}>Đóng</button>
          </div>
        </div>
      )}

            {/* Hiển thị cửa sổ xác nhận xóa */}

            {currentModal === 'confirmDelete' && confirmDeleteUser && (
                <div>
                {/* Lớp overlay */}
                <div className={cx('overlay')} onClick={handleModalClose}></div>
                <div className={cx('confirmDeleteModal')}>
                    <h2>Xác nhận xóa người dùng</h2>
                    <p>Bạn có chắc chắn muốn xóa người dùng "{confirmDeleteUser.name}" không?</p>
                    <button onClick={handleConfirmDelete}>Xác nhận</button>
                    <button onClick={handleCloseConfirmDelete}>Hủy</button>
                </div>
                </div>
            )}
            {/* Hiển thị cửa sổ xác nhận sửa */}
            {currentModal === 'editUser' && editingUser && (
                <div>
                {/* Lớp overlay */}
                <div className={cx('overlay')} onClick={handleModalClose}></div>
                <div className={cx('editUserModal')}>
                    {/* Nội dung cửa sổ sửa thông tin */}
                    <h2>Sửa thông tin người dùng</h2>
                    <label>Tên người dùng: </label>
                    <input
                        type="text"
                        placeholder="Tên người dùng"
                        value={editingUser.name}
                        onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                    <label>Tài khoản: </label>
                    <input
                        type="text"
                        placeholder="Tài khoản"
                        value={editingUser.account}
                        onChange={(e) => setEditingUser({ ...editingUser, account: e.target.value })}
                    />
                    <label>Email: </label>
                    <input
                        type="text"
                        placeholder="Email"
                        value={editingUser.email}
                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                    <label>Ngày sinh: </label>
                    <input
                        type="date"
                        placeholder="Ngày sinh"
                        value={editingUser.birthday}
                        onChange={(e) => setEditingUser({ ...editingUser, birthday: e.target.value })}
                    />

                    {/* Nút lưu thông tin người dùng sau khi sửa */}
                    <button onClick={handleSaveEditUser}>Lưu</button>

                    {/* Nút đóng cửa sổ sửa thông tin */}
                    <button onClick={handleCloseEditUser}>Đóng</button>
                </div>
                </div>
            )}
            {/* Hiển thị cửa sổ hiển thị thông tin chi tiết */}
            {selectedUserDetail && (
                <div>
                {/* Lớp overlay */}
                <div className={cx('overlay')} onClick={handleModalClose}></div>
                <div className={cx('userDetailModal')}>
                    <h2>Thông tin chi tiết người dùng</h2>
                    <p><strong>Tên người dùng:</strong> {selectedUserDetail.name}</p>
                    <p><strong>Tài khoản:</strong> {selectedUserDetail.account}</p>
                    <p><strong>Email:</strong> {selectedUserDetail.email}</p>
                    <p><strong>Ngày sinh:</strong> {formatBirthday(selectedUserDetail.birthday)}</p>
                    <button onClick={handleCloseUserDetail}>Đóng</button>
                </div>
                </div>
            )}

        </div>
    );
}
export default DisplayUser;