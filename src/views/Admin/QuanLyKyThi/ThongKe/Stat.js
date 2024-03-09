import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

function Stat() {
    useEffect(() => {
        // Tạo dữ liệu cho biểu đồ 1
        const data1 = [{
            name: 'Xuất sắc',
            y: 50 // Giá trị phần trăm của mục 1
        }, {
            name: 'Trung Bình',
            y: 50 // Giá trị phần trăm của mục 2
        }, {
            name: 'Khá',
            y: 200 // Giá trị phần trăm của mục 3
        }, {
            name: 'Yếu',
            y: 450 // Giá trị phần trăm của mục 4
        }];

        // Tạo cấu hình cho biểu đồ 1
        const options1 = {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Điểm thi'
            },
            plotOptions: {
                pie: {
                    innerSize: '50%' // Đặt kích thước phần trung tâm để tạo hình quạt tròn
                }
            },
            series: [{
                name: 'số lượng',
                colorByPoint: true,
                data: data1
            }]
        };

        // Biểu đồ cột
        const dataColumn = [{
            name: 'Dễ',
            y: 85 // Giá trị dữ liệu A
        }, {
            name: 'Trung Bình',
            y: 65 // Giá trị dữ liệu B
        }, {
            name: 'Khó',
            y: 20 // Giá trị dữ liệu C
        }];

        // Tính lại giá trị của các cột sao cho giá trị lớn nhất là 100
        // const maxVal = Math.max(...dataColumn.map(item => item.y));
        // const scaledDataColumn = dataColumn.map(item => ({
        //     name: item.name,
        //     y: (item.y / maxVal) * 100 // Tính lại giá trị tương ứng
        // }));

        // Tạo cấu hình cho biểu đồ cột
        const optionsColumn = {
            chart: {
                type: 'column' // Chọn loại biểu đồ là cột
            },
            title: {
                text: 'Biểu đồ cột'
            },
            xAxis: {
                categories: dataColumn.map(item => item.name) // Tên các cột ở dưới
            },
            yAxis: {
                title: {
                    text: '' // Tiêu đề trục y
                },
                max: 100 // Giá trị lớn nhất của trục y
            },
            series: [{
                name: '%', // Tên của loạt dữ liệu
                data: dataColumn.map(item => item.y) // Giá trị của các cột
            }]
        };

        Highcharts.chart('chart1', options1);
        Highcharts.chart('chart2', optionsColumn);
    }, []);

    return (
        <div>
            {/* Thẻ div để chứa biểu đồ 1 */}
            <div id="chart1"></div>
             {/* Thẻ div để chứa biểu đồ 2*/}
            <div id="chart2"></div>
        </div>
    );
}

export default Stat;
