import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './DisplayDoExam.module.scss';
import Popup from 'reactjs-popup';
import SubmitPopup from './SubmitPopup';
import { enterFullscreen, exitFullscreen, toggleFullscreen } from './fullScreen';
import Pagination from '../../../components1/Pagination/Pagination';
// import image from '../../../images/background.jpg'
const cx = classNames.bind(styles);

const questions = [
    {
        questionNumber: 1,
        questionContent: "Trong nền kinh tế hiện đại, thuật ngữ 'GDP' viết tắt của điều gì?",
        image: '/images/background.jpg',
        answers: {
            A: 'Gross Domestic Product',
            B: 'Global Development Plan',
            C: 'General Data Protection',
            D: 'Government Distribution Program',
        },
        correctAnswer: 'A',
    },
    {
        questionNumber: 2,
        questionContent: 'Ai là người sáng lập công ty Tesla Motors?',
        answers: {
            A: 'Jeff Bezos',
            B: 'Elon Musk',
            C: 'Mark Zuckerberg',
            D: 'Bill Gates',
        },
        correctAnswer: 'B',
    },
    {
        questionNumber: 4,
        questionContent: 'Loại nước nào chiếm diện tích lớn nhất trên Trái Đất?',
        answers: {
            A: 'Nước ngọt',
            B: 'Nước biển',
            C: 'Nước ngầm',
            D: 'Nước đá',
        },
        correctAnswer: 'B',
    },
    {
        questionNumber: 5,
        questionContent: "Thành phố nào được biết đến là 'Thủ đô của thế giới doanh nghiệp'?",
        answers: {
            A: 'New York',
            B: 'London',
            C: 'Tokyo',
            D: 'Singapore',
        },
        correctAnswer: 'D',
    },
    {
        questionNumber: 6,
        questionContent: 'Loài cây nào được sử dụng làm biểu tượng của sự hòa bình?',
        answers: {
            A: 'Cây dừa',
            B: 'Cây thông',
            C: 'Cây gõ đỏ',
            D: 'Cây ô liu',
        },
        correctAnswer: 'D',
    },
    {
        questionNumber: 7,
        questionContent: 'Ai là người sáng lập Microsoft?',
        answers: {
            A: 'Steve Jobs',
            B: 'Bill Gates',
            C: 'Mark Zuckerberg',
            D: 'Jeff Bezos',
        },
        correctAnswer: 'B',
    },
    {
        questionNumber: 8,
        questionContent: 'Đội tuyển bóng đá nước nào đã giành World Cup nhiều nhất?',
        answers: {
            A: 'Brazil',
            B: 'Germany',
            C: 'Argentina',
            D: 'Italy',
        },
        correctAnswer: 'A',
    },
    {
        questionNumber: 9,
        questionContent: 'Loại phương tiện giao thông nào là phổ biến nhất trên thế giới?',
        answers: {
            A: 'Ô tô',
            B: 'Xe máy',
            C: 'Đạp xe',
            D: 'Tàu điện ngầm',
        },
        correctAnswer: 'C',
    },
    // Bắt đầu thêm 35 câu hỏi mới
    {
        questionNumber: 10,
        questionContent: 'Ai là tác giả của tác phẩm "Bản đồ thần kỳ"?',
        answers: {
            A: 'J.K. Rowling',
            B: 'George R.R. Martin',
            C: 'J.R.R. Tolkien',
            D: 'C.S. Lewis',
        },
        correctAnswer: 'C',
    },
    {
        questionNumber: 11,
        questionContent: 'Quốc gia nào nổi tiếng với đảo quốc Kiwi?',
        answers: {
            A: 'Australia',
            B: 'New Zealand',
            C: 'Ireland',
            D: 'Canada',
        },
        correctAnswer: 'B',
    },
    {
        questionNumber: 12,
        questionContent: 'Hòa Thượng Thích Quảng Đức tự thiêu vào năm nào?',
        answers: {
            A: '1963',
            B: '1965',
            C: '1967',
            D: '1969',
        },
        correctAnswer: 'A',
    },
    {
        questionNumber: 12,
        questionContent: 'Ngày nào được coi là Ngày Quốc tế Phụ nữ?',
        answers: {
            A: '8/3',
            B: '20/10',
            C: '22/12',
            D: '1/5',
        },
        correctAnswer: 'A',
    },
    {
        questionNumber: 13,
        questionContent: 'Cuộc Cách mạng Công nghiệp bắt đầu vào thế kỷ nào?',
        answers: {
            A: '16',
            B: '17',
            C: '18',
            D: '19',
        },
        correctAnswer: 'D',
    },
    {
        questionNumber: 14,
        questionContent: 'Bảo tàng Louvre nằm ở thành phố nào?',
        answers: {
            A: 'London',
            B: 'Paris',
            C: 'Berlin',
            D: 'Rome',
        },
        correctAnswer: 'B',
    },
    {
        questionNumber: 15,
        questionContent: 'Châu lục nào có diện tích lớn nhất?',
        answers: {
            A: 'Asia',
            B: 'Africa',
            C: 'North America',
            D: 'South America',
        },
        correctAnswer: 'A',
    },
    {
        questionNumber: 16,
        questionContent: 'Dãy núi nào là dãy núi cao nhất thế giới?',
        answers: {
            A: 'Andes',
            B: 'Himalayas',
            C: 'Alps',
            D: 'Rockies',
        },
        correctAnswer: 'B',
    },
    {
        questionNumber: 17,
        questionContent: 'Ngôn ngữ nào được sử dụng nhiều nhất trên thế giới?',
        answers: {
            A: 'Spanish',
            B: 'English',
            C: 'Mandarin Chinese',
            D: 'Hindi',
        },
        correctAnswer: 'C',
    },
    {
        questionNumber: 18,
        questionContent: 'Bảo tàng Vatican nằm trong quốc gia nào?',
        answers: {
            A: 'Italy',
            B: 'Spain',
            C: 'Greece',
            D: 'Portugal',
        },
        correctAnswer: 'A',
    },
];

function DisplayDoExam() {
    const [countdown, setCountdown] = useState({ minutes: 90, seconds: 0 });
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));

    // Thêm state để lưu trữ số câu đã làm
    const [answeredQuestions, setAnsweredQuestions] = useState(0);

    // phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const [submitData, setSubmitData] = useState([]);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const nPages = Math.ceil(questions.length / recordsPerPage);

    // Records to be displayed on the current page
    const currentRecords = questions.slice(indexOfFirstRecord, indexOfLastRecord);
    const arr = [];
    useEffect(() => {
        const countdownFunction = setInterval(() => {
            setCountdown((prevCountdown) => {
                const newCountdown = { ...prevCountdown };
                if (newCountdown.seconds > 0) {
                    newCountdown.seconds -= 1;
                } else if (newCountdown.minutes > 0) {
                    newCountdown.minutes -= 1;
                    newCountdown.seconds = 59;
                }

                // Kiểm tra nếu thời gian đếm ngược đã hết
                if (newCountdown.minutes === 0 && newCountdown.seconds === 0) {
                    clearInterval(countdownFunction);
                }

                return newCountdown;
            });
        }, 1000);

        return () => {
            clearInterval(countdownFunction);
        };
    }, []);

    const handleAnswerChange = (questionIndex, selectedAnswer) => {
        // Kiểm tra xem câu hỏi đã được trả lời chưa
        if (selectedAnswers[questionIndex] === '') {
            // Cập nhật vị trí câu hỏi đã chọn
            setSelectedAnswers((prevSelectedAnswers) => {
                const newSelectedAnswers = [...prevSelectedAnswers];
                newSelectedAnswers[questionIndex] = selectedAnswer;
                return newSelectedAnswers;
            });
            // Cập nhật logic xử lý khi người dùng chọn đáp án
            console.log(`Câu hỏi ${questionIndex} - Đáp án đã chọn: ${selectedAnswer}`);
            setSubmitData((pre) => arr.push({ pre }, { selectedAnswers }, { answeredQuestions }));
            // Tăng số câu đã làm
            setAnsweredQuestions((prevAnsweredQuestions) => prevAnsweredQuestions + 1);
        }
    };

    const [submitPopup, setSubmitPopup] = useState(false);
    const openPopup = () => {
        if (!submitPopup) {
            setSubmitPopup(true);
        }
        console.log(arr);
    };

    const closePopup = () => {
        setSubmitPopup(false);
    };

    const handleConfirm = () => {
        setSubmitPopup(false);
    };

    return (
        <div className={cx('wrap')}>
            <div className={cx('exam-form')}>
                <div className={cx('exam-header')}>
                    <div>
                        <button onClick={toggleFullscreen}>Làm bài</button>
                    </div>
                    {/* Phần thông tin */}
                    <div className={cx('exam-infomartion')}>
                        <div className={cx('information-header')}>
                            <div className={cx('exam-title')}>Bài thi đánh giá năng lực</div>
                            <div id="countdown">
                                {`${countdown.minutes}:${countdown.seconds.toString().padStart(2, '0')}`}
                            </div>
                        </div>
                    </div>
                    <div className={cx('user-infomartion')}>
                        <div className={cx('information-header')}>
                            <div className={cx('info-user')}>Thông tin người thi</div>
                            <div className={cx('user')}>
                                {/* {examFormData && (
                                    <>
                                        <div>Họ và tên: {examFormData.fullName}</div>
                                        <div>Ngày sinh: {examFormData.birthDate}</div>
                                        <div>Giới tính: {examFormData.gender}</div>
                                        <div>Email: {examFormData.email}</div>
                                    </>
                                )} */}
                            </div>
                        </div>
                    </div>
                    <div className={cx('selected-question')}>
                        <div className={cx('information-header')}>
                            <div className={cx('')}>Số câu đã làm</div>
                            <div className={cx('')}>
                                {answeredQuestions}/{questions.length}
                            </div>
                        </div>
                    </div>
                    <div className={cx('exam-submit')}>
                        <div className={cx('button-exam-submit')}>
                            <button
                                className={cx('submit-button')}
                                onClick={() => {
                                    openPopup();
                                }}
                                disabled={submitPopup}
                            >
                                Nộp bài
                            </button>
                        </div>
                        <Popup
                            open={submitPopup}
                            onClose={closePopup}
                            modal
                            overlayStyle={{
                                background: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 1500,
                            }}
                        >
                            {submitPopup && <SubmitPopup closePopup={closePopup} handleConfirm={handleConfirm} />}
                        </Popup>
                    </div>
                </div>
                <div className={cx('exam')}>
                    <div className={cx('question-section')}>
                        {/* Phần viết đề thi */}
                        {currentRecords.map((question, index) => {
                            return (
                                <div key={questions.questionNumber} className={cx('question')}>
                                    <div
                                        className={cx('question-content')}
                                    >{`Câu ${question.questionNumber}. ${question.questionContent}`}</div>
                                    {question.image && <img src={question.image} />}
                                    <div className={cx('answers-select')}>
                                        {Object.keys(question.answers).map((option) => (
                                            <div key={questions.questionNumber} className={cx('answer')}>
                                                <input
                                                    type="radio"
                                                    name={`question${question.questionNumber}`}
                                                    value={option}
                                                    onChange={() => handleAnswerChange(question.questionNumber, option)}
                                                />
                                                <label>{`${question.answers[option]}`}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>

                    <div className={cx('answers-section')}>
                        <div className={cx('answers')}>
                            {/* Phần chứa câu trả lời tổng hợp */}
                            {selectedAnswers.map((answer, index) => (
                                <div key={questions.questionNumber} className={cx('div-answer')}>
                                    <div className={cx('question-number')}>{index}</div>
                                    <div className={cx('question-answer')}>{answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayDoExam;
