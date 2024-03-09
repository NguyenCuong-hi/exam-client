import React from 'react';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Highcharts from 'highcharts';

import styles from './Home.module.scss'; // Đảm bảo import CSS cho form
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        // Tạo dữ liệu cho biểu đồ 1
        const data1 = [
            {
                name: 'Admin',
                y: 2, // Giá trị phần trăm của mục 1
            },
            {
                name: 'Giáo Viên',
                y: 20, // Giá trị phần trăm của mục 2
            },
            {
                name: 'Sinh Viên',
                y: 450, // Giá trị phần trăm của mục 3
            },
        ];

        // Tạo dữ liệu cho biểu đồ 2
        const data2 = [
            {
                name: 'A',
                y: 40, // Giá trị phần trăm của A
            },
            {
                name: 'B',
                y: 60, // Giá trị phần trăm của B
            },
        ];

        // Tạo cấu hình cho biểu đồ 1
        const options1 = {
            chart: {
                type: 'pie',
            },
            title: {
                text: 'Thống kê số lượng tài khoản',
            },
            plotOptions: {
                pie: {
                    innerSize: '30%', // Đặt kích thước phần trung tâm để tạo hình quạt tròn
                },
            },
            series: [
                {
                    name: 'số lượng',
                    colorByPoint: true,
                    data: data1,
                },
            ],
        };

        const options2 = {
            chart: {
                type: 'pie',
            },
            title: {
                text: 'Thống kê số lượng sinh viên',
            },
            plotOptions: {
                pie: {
                    innerSize: '50%', // Đặt kích thước phần trung tâm để tạo hình quạt tròn
                },
            },
            series: [
                {
                    name: 'số lượng',
                    colorByPoint: true,
                    data: data2,
                },
            ],
        };
        //Biểu đồ 3
        const dataColumn = [
            {
                name: 'Đợt 1',
                y: 230, // Giá trị dữ liệu A
            },
            {
                name: 'Đợt 2',
                y: 260, // Giá trị dữ liệu B
            },
            {
                name: 'Đợt 3',
                y: 280, // Giá trị dữ liệu C
            },
            {
                name: 'Đợt 4',
                y: 340, // Giá trị dữ liệu C
            },
        ];

        // Tạo cấu hình cho biểu đồ cột
        const optionsColumn = {
            chart: {
                type: 'column', // Chọn loại biểu đồ là cột
            },
            title: {
                text: 'Biểu đồ cột',
            },
            xAxis: {
                categories: dataColumn.map((item) => item.name), // Tên các cột ở dưới
            },
            yAxis: {
                title: {
                    text: 'Số lượng', // Tiêu đề trục y
                },
            },
            series: [
                {
                    name: 'Số lượng', // Tên của loạt dữ liệu
                    data: dataColumn.map((item) => item.y), // Giá trị của các cột
                },
            ],
        };

        Highcharts.chart('chart1', options1);
        Highcharts.chart('chart2', options2);
        Highcharts.chart('chart3', optionsColumn);
    }, []);

    return (
        <div>
            <table className={cx('Table')}>
                <tr className={cx('Table-col')}>
                    <td>
                        <div className={cx('row')}>
                            <div className={cx('row-btn')}>
                                <button className={cx('type_btn')}>6</button>
                                <span className={cx('labels')}>Số lượng kì thi đã tạo</span>
                            </div>
                            <div className={cx('row-btn')}>
                                <button className={cx('type_btn')}>2</button>
                                <span className={cx('labels')}>Số lượng kì thi đang thi</span>
                            </div>
                            <div className={cx('row-btn')}>
                                <button className={cx('type_btn')}>3</button>
                                <span className={cx('labels')}>Số lượng kì thi chưa thi</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <select name="batchs" id="batch">
                            <option value="1">Đợt 1</option>
                            <option value="2">Đợt 2</option>
                            <option value="3">Đợt 3</option>
                            <option value="4">Đợt 4</option>
                        </select>
                        <div className={cx('pain')} id="chart2"></div>
                    </td>
                    <td>
                        <div className={cx('pain')} id="chart3"></div>
                    </td>
                </tr>
                <tr className={cx('Table-col')}>
                    <td>
                        <div className={cx('box')}>
                            <select name="batchs" id="batch">
                                <option value="1">Đợt 1</option>
                                <option value="2">Đợt 2</option>
                                <option value="3">Đợt 3</option>
                                <option value="4">Đợt 4</option>
                            </select>
                            <span className={cx('label')}>Số sinh viên đã thi</span>
                            <button className={cx('btn')}>196 / 200</button>
                        </div>
                    </td>
                    <td>
                        <div className={cx('pain')} id="chart1"></div>
                    </td>
                    <td></td>
                </tr>
            </table>
            {/* Thẻ div để chứa biểu đồ 1 */}

            {/* Thẻ div để chứa biểu đồ 2 */}

            {/* Thẻ div để chứa biểu đồ 3 */}
        </div>
    );
}

export default Home;
