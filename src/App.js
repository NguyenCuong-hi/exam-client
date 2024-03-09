import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; //localhost:3000/trang-chu
import { DefaultLayout } from './components1/Layout1';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './views/pages/Home/Home';
import Content from './views/pages/Content/Content';
import TestView from './views/pages/Test/TestView';
import DisplayAccount from './views/User/TaiKhoan/DisplayAccount';
import DisplayDoExam from './views/User/LamBaiThi/DisplayDoExam';

import Quanlykithi from './views/Admin/QuanLyKyThi/DisplayExam';
import Examlist from './views/Admin/QuanLyKyThi/DanhSachThi/ExamList';
// test
import CreateManually from './views/Admin/QuanLyKyThi/DeThi/CreateManually/CreateManually';
import Update from './views/Admin/QuanLyKyThi/DeThi/UpdateExam/UpdateExam';
import CreateAutomatic from './views/Admin/QuanLyKyThi/DeThi/CreateAutomatic/CreateAutomatic';

import ScheduledexamQuanLyKiThi from './views/Admin/QuanLyKyThi/Scheduledexam';
import General from './views/Admin/QuanLyKyThi/QuanLyChung/Genaral';
import Exam from './views/Admin/QuanLyKyThi/DeThi/Exam';
// import CauHinhDe from './views/Admin/QuanLyKyThi/DeThi/CauHinhDe';

import DisplayExam from './views/Admin/QuanLyDeThi/DisplayExam';
import CreatExam from './views/Admin/QuanLyDeThi/createExam/CreatExam';
import AddFile from './views/Admin/QuanLyDeThi/AddFile/Addfile';
import Matrix from './views/Admin/QuanLyDeThi/Matrix/Matrix';
import Config from './views/Admin/QuanLyDeThi/Config/Config';
import Themgiaovien from './views/Admin/QuanLyNguoiDung/GiaoVien/CreateTeacher';

// thông kê
import Fillter from './views/Admin/ThongKe/Start';

// import DisplayUser from './views/Admin/QuanLyNguoiDung/DisplayUser';
// import OverlayTeacher from './views/Admin/QuanLyNguoiDung/OverlayTeacher';
// import ExamStudent from './views/Admin/QuanLyNguoiDung/ExamStudent';
// import DisplayStudent from './views/Admin/QuanLyNguoiDung/QuanLyStudent/DisplayStudent';

// import Display from './views/Admin/QuanLyNguoiDung/DisplayUser';
// import Overlay from './views/Admin/QuanLyNguoiDung/OverlayTeacher';
// import ExamStudent from './views/Admin/QuanLyNguoiDung/ExamStudent';
// import DisplayStudent from './views/Admin/QuanLyNguoiDung/DisplayStudent';

// import DisplayStudentTeacher from './views/Admin/QuanLyNguoiDung/DisplayUserTeacher';
import ExamStudent from './views/Admin/QuanLyNguoiDung/QuanLyDSSinhVien/ExamStudent';
import DisplayTeacher from './views/Admin/QuanLyNguoiDung/QuanLyGiaoVien/DisplayTeacher';
//Câu hỏi thi
import DisplayQuestion from './views/Admin/QuanLyCauHoi/DisplayQuestion';
import ListQuestion from './views/Admin/QuanLyCauHoi/ListQuestion';
import Addgroup from './views/Admin/QuanLyCauHoi/AddGroupQuestion';
import CauHinhDe from './views/Admin/QuanLyKyThi/DeThi/CauHinhDe';
import DanhSachDeThi from './views/Admin/QuanLyKyThi/DeThi/DanhSachDeThi';
import DanhSachKetQuaThi from './views/Admin/QuanLyKyThi/KetQuaThi/DanhSachKetQuaThi';

import Stat from './views/Admin/QuanLyKyThi/ThongKe/Stat';
import Test from './views/Admin/QuanLyNguoiDung/QuanLyDSSinhVien/DisplayStudent';
import Login from './components1/Login/Login';
import CheckJwt from './Authentication/CheckJwt';
import CheckRole from './Authorization/CheckRole';

function App() {
    console.log(CheckRole().then((data) => console.log(data)));
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<DefaultLayout children={<Home />} />} />
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route
                        exact
                        path="/content"
                        element={
                            CheckJwt() ? <Navigate to={'/login'} replace /> : <DefaultLayout children={<Content />} />
                        }
                    />
                    <Route
                        exact
                        path="/test-view"
                        element={
                            CheckJwt() ? <Navigate to={'/login'} replace /> : <DefaultLayout children={<TestView />} />
                        }
                    />
                    <Route exact path="/user-account" element={<DefaultLayout children={<DisplayAccount />} />} />
                    <Route exact path="/user-exam" element={<DefaultLayout children={<DisplayDoExam />} />} />
                    <Route exact path="/admin/hone" element={<DefaultLayout children={<Home />} />} />
                    {/* -------------------------- đồ thị   --------------------------*/}
                    <Route exact path="/dothi" element={<DefaultLayout children={<Stat />} />} />

                    {/* -------------------------- Kỳ thi  --------------------------*/}
                    <Route exact path="/admin/quan-ly-ki-thi" element={<DefaultLayout children={<Quanlykithi />} />} />
                    {/* <Route
                        exact
                        path="/Quanlykithi/Taokithi"
                        element={<DefaultLayout children={<CreateQuanLyKiThi />} />}
                    /> */}
                    {/* ky thi / ca thi*/}
                    <Route
                        exact
                        path="/admin/quan-ly-ki-thi/danh-sach-ca-thi"
                        element={<DefaultLayout children={<General children={<ScheduledexamQuanLyKiThi />} />} />}
                    />
                    {/* ky thi / danh sách thi*/}
                    <Route
                        exact
                        path="/admin/quan-ly-ki-thi/danh-sach-thi"
                        element={<DefaultLayout children={<General children={<Examlist />} />} />}
                    />
                    {/* ky thi / đề thi*/}
                    <Route
                        exact
                        path="/admin/quan-ly-ki-thi/de-thi"
                        element={<DefaultLayout children={<General children={<Exam />} />} />}
                    />
                    <Route
                        exact
                        path="/admin/quan-ly-ki-thi/de-thi/tao-thu-cong"
                        element={<DefaultLayout children={<General children={<CreateManually />} />} />}
                    />
                    <Route
                        exact
                        path="/admin/quan-ly-ki-thi/de-thi/sua"
                        element={<DefaultLayout children={<General children={<Update />} />} />}
                    />
                    <Route
                        exact
                        path="/admin/quan-ly-ki-thi/de-thi/danh-sach-de-thi"
                        element={<DefaultLayout children={<General children={<DanhSachDeThi />} />} />}
                    />
                    {/* Kì thi/Kết quả thi */}
                    <Route
                        exact
                        path="/admin/quan-ly-ki-thi/ket-qua"
                        //path="/KetQuaThi/DanhSachKetQuaThi"
                        element={<DefaultLayout children={<General children={<DanhSachKetQuaThi />} />} />}
                    />
                    {/*  -------------------------- Quản lý người dùng  -------------------------- */}
                    <Route
                        exact
                        path="/Admin/quan-ly-nguoi-dung/Teacher"
                        element={<DefaultLayout children={<DisplayTeacher />} />}
                    />
                    <Route
                        exact
                        path="/Admin/quan-ly-nguoi-dung/danhsachphongthi"
                        element={<DefaultLayout children={<ExamStudent />} />}
                    />
                    <Route
                        exact
                        path="/Admin/quan-ly-nguoi-dung/danhsachphongthi/student"
                        element={<DefaultLayout children={<Test />} />}
                    />

                    {/*  -------------------------- Ngân hàng câu hỏi   --------------------------*/}
                    <Route
                        exact
                        path="admin/ngan-hang-cau-hoi"
                        element={<DefaultLayout children={<DisplayQuestion />} />}
                    />
                    <Route
                        exact
                        path="admin/ngan-hang-cau-hoi/detail"
                        element={<DefaultLayout children={<ListQuestion />} />}
                    />
                    {/* thống kê  */}
                    <Route
                        exact
                        path="/admin/quan-ly-ki-thi/thong-ke"
                        //path="/KetQuaThi/DanhSachKetQuaThi"
                        element={<DefaultLayout children={<General children={<Fillter />} />} />}
                    />
                    <Route
                        exact
                        path="admin/ngan-hang-cau-hoi/Themcauhoi"
                        element={<DefaultLayout children={<Addgroup />} />}
                    />
                    {/* Quản lý đề thi */}
                    <Route exact path="/displayExam" element={<DefaultLayout children={<DisplayExam />} />} />
                    <Route exact path="/displayExam/CreatExam" element={<DefaultLayout children={<CreatExam />} />} />
                    <Route
                        exact
                        path="/displayExam/CreatExam/Addfile"
                        element={<DefaultLayout children={<AddFile />} />}
                    />
                    <Route
                        exact
                        path="/displayExam/CreatExam/Addfile/matrix"
                        element={<DefaultLayout children={<Matrix />} />}
                    />
                    <Route
                        exact
                        path="/displayExam/CreatExam/Addfile/matrix/config"
                        element={<DefaultLayout children={<Config />} />}
                    />
                    <Route
                        exact
                        path="/DeThi/CauHinhDe"
                        element={<DefaultLayout children={<General children={<CauHinhDe />} />} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
