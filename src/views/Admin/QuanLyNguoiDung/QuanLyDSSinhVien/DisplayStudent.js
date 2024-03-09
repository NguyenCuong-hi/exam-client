import React, { useState } from 'react';
import classNames from 'classnames/bind';
import * as XLSX from 'xlsx';
import styles from './DisplayStudent.module.scss';
import Popup from 'reactjs-popup';
import AddUserModal from './AddStudentModal';  // Import component của cửa sổ thêm người dùng
import EditUserModal from './EditStudentModal';  // Import component của cửa sổ sửa người dùng
import UserDetailModal from './StudentDetailModal';  // Import component của cửa sổ hiển thị chi tiết người dùng
import ConfirmDeleteModal from './ConfirmDeleteModal';  // Import component của cửa sổ xác nhận xóa
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function DisplayStudent() {
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
         {image: 'ductung.jpg', name: 'Nguyễn Trung Hiếu', account: 'Trunghieu72', email: 'nguyentrunghieu@gmail.com', birthday: '2002/11/26',gioitinh :'Nam', password: '123456'  },
         {image: 'ductung.jpg', name: 'Nguyễn Đức Tùng', account: 'ductung123', email: 'ductung123@gmail.com', birthday: '2002/11/26',gioitinh :'Nam', password: '123456'},
         {image: 'ductung.jpg', name: 'Nguyễn Đức Tùng', account: 'ductung123', email: 'ductung123@gmail.com', birthday: '2002/11/26',gioitinh :'Nam', password: '123456' },
         // Thêm dữ liệu người dùng khác nếu cần
     ]);
 
     //Thêm dữ liệu
     const [newUser, setNewUser] = useState({ image:'' , name: '', account: '', email: '', birthday: '', gioitinh: '', password:''});
     const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
 
     const handleAddUserClick = () => {
         setIsAddUserModalOpen(true);
         // if (currentModal === null) {
         //     setCurrentModal('addUser');
         // }
     };
 
     const handleModalClose = () => {
         setIsAddUserModalOpen(false);
         setCurrentModal(null);
         // Đặt lại thông tin người dùng mới khi đóng cửa sổ nhập
         setNewUser({ image:'' , name: '', account: '', email: '', birthday: '', gioitinh: '', password:''  });
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
     //Khi click vào button 'Thêm' thì các button khác không click được
     const [currentModal, setCurrentModal] = useState(null);
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
                         <button className={cx('btnTopic')} >
                         <Link className={cx('link')} to="/Admin/quan-ly-nguoi-dung/Teacher">Giáo Viên</Link>
                            </button>
                         <button className={cx('btnTopic', 'active')}>
                         <Link className={cx('link')} to="/Admin/quan-ly-nguoi-dung/danhsachphongthi">Thí Sinh</Link>
                         </button>
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
                             <ul className={cx('items')}>
                                 <li className={cx('lists')}>
                                     <span className={cx('lable')}>Tên</span>
                                 </li>
                                 <li className={cx('lists')}>
                                     <span className={cx('lable')}> Tài Khoản </span>
                                 </li>
                                 <li className={cx('lists')}>
                                     <span className={cx('lable')}>Gmail</span>
                                 </li>
                                 <li className={cx('lists')}>
                                     <span className={cx('lable')}>Ngày Sinh</span>
                                 </li>
                                 <li className={cx('lists')}>
                                     <span className={cx('lable')}></span>
                                 </li>
                             </ul>
                             <div className={cx('border-style')}></div>
 
                             {users.map((user, index) => (
                                 <ul className={cx('item')} key={index}>
                                     <li className={cx('list')} onClick={() => handleOpenEditUser(user)}>
                                         <span className={cx('lable', 'hoverchuot')}>{user.name}</span>
                                     </li>
 
                                     {/* Tài khoản */}
                                     <li className={cx('list')} onClick={() =>  handleOpenEditUser(user)}>
                                         <span className={cx('lable', 'hoverchuot')}>{user.account}</span>
                                     </li>
 
                                     {/* Gmail */}
                                     <li className={cx('list')} onClick={() =>  handleOpenEditUser(user)}>
                                         <span className={cx('lable', 'hoverchuot')}>{user.email}</span>
                                     </li>
 
                                     {/* Ngày sinh */}
                                     <li className={cx('list')} onClick={() => handleOpenEditUser(user)}>
                                         <span className={cx('lable', 'hoverchuot')}>{formatBirthday(user.birthday)}</span>
                                     </li>
                                     <li className={cx('list')} >
 
                                         {/* <button className={cx('listbtn', 'listbtn-edit')} onClick={() => handleOpenEditUser(user)}>Sửa</button> */}
 
                                         <button className={cx('listbtn', 'listbtn-delete')} onClick={() => handleOpenConfirmDelete(user)}>Xóa</button>
                                     </li>
 
                                 </ul>
                             ))}
                         </div>
                     </div>
                 </div>
             </div>
 
             {/* Hiển thị cửa sổ nhập khi nút "Thêm" được nhấp */}
 
             {isAddUserModalOpen && (
 
                 <AddUserModal
                     newUser={newUser}
                     setNewUser={setNewUser}
                     handleSaveUser={handleSaveUser}
                     handleModalClose={handleModalClose}
                 />
 
             )}
 
             {/* Hiển thị cửa sổ xác nhận xóa */}
 
             {currentModal === 'confirmDelete' && confirmDeleteUser && (
                 <ConfirmDeleteModal
                     confirmDeleteUser={confirmDeleteUser}
                     handleConfirmDelete={handleConfirmDelete}
                     handleCloseConfirmDelete={handleCloseConfirmDelete}
                 />
             )}
             {/* Hiển thị cửa sổ xác nhận sửa */}
             {currentModal === 'editUser' && editingUser && (
                 <EditUserModal
                     editingUser={editingUser}
                     setEditingUser={setEditingUser}
                     handleSaveEditUser={handleSaveEditUser}
                     handleCloseEditUser={handleCloseEditUser}
                 />
             )}
             {/* Hiển thị cửa sổ hiển thị thông tin chi tiết */}
             {selectedUserDetail && (
                 <UserDetailModal
                     selectedUserDetail={selectedUserDetail}
                     formatBirthday={formatBirthday}
                     handleCloseUserDetail={handleCloseUserDetail}
                 />
             )}
 
         </div>
     );
 }
 
 export default DisplayStudent;
 