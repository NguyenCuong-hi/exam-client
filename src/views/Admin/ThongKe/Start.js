import React, { useEffect } from 'react';
import Popup from 'reactjs-popup';
import Highcharts from 'highcharts';
import classNames from 'classnames/bind';
import styles from './Start.module.scss'; // Đảm bảo import CSS cho form
import '@fortawesome/fontawesome-free/css/all.min.css';

const cx = classNames.bind(styles);

function Stat() {
    useEffect(() => {
        // Tạo dữ liệu cho biểu đồ 1
        const data1 = [
            {
                name: 'Xuất sắc',
                y: 50, // Giá trị phần trăm của mục 1
            },
            {
                name: 'Trung Bình',
                y: 50, // Giá trị phần trăm của mục 2
            },
            {
                name: 'Khá',
                y: 200, // Giá trị phần trăm của mục 3
            },
            {
                name: 'Yếu',
                y: 450, // Giá trị phần trăm của mục 4
            },
        ];

        // Tạo cấu hình cho biểu đồ 1
        const options1 = {
            chart: {
                type: 'pie',
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
                    data: data1,
                },
            ],
            title: {
                text: 'Điểm thi',
            },
        };

        // Biểu đồ cột
        const dataColumn = [
            {
                name: 'Dễ',
                y: 85, // Giá trị dữ liệu A
            },
            {
                name: 'Trung Bình',
                y: 65, // Giá trị dữ liệu B
            },
            {
                name: 'Khó',
                y: 20, // Giá trị dữ liệu C
            },
        ];

        // Tính lại giá trị của các cột sao cho giá trị lớn nhất là 100
        // const maxVal = Math.max(...dataColumn.map(item => item.y));
        // const scaledDataColumn = dataColumn.map(item => ({
        //     name: item.name,
        //     y: (item.y / maxVal) * 100 // Tính lại giá trị tương ứng
        // }));

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
                    text: '', // Tiêu đề trục y
                },
                max: 100, // Giá trị lớn nhất của trục y
            },
            series: [
                {
                    name: '%', // Tên của loạt dữ liệu
                    data: dataColumn.map((item) => item.y), // Giá trị của các cột
                },
            ],
        };

        Highcharts.chart('chart1', options1);
        Highcharts.chart('chart2', optionsColumn);
    }, []);

    return (
        <div className={cx('Filter')}>
            {/* Thẻ div để chứa biểu đồ 1 */}

            <div className={cx('box')}>
                <span className={cx('label')}>Số sinh viên đã thi</span>
                <button className={cx('btn')}>196 / 200</button>
            </div>
            <div className={cx('box')}>
                <div id="chart1"></div>
            </div>
            {/* Thẻ div để chứa biểu đồ 2*/}
            <div className={cx('box')}>
                <div id="chart2"></div>
            </div>
        </div>
    );
}

export default Stat;
