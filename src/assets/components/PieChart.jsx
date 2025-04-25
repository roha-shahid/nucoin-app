import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
const PieChart = () => {


    const colors = [
        '#882DCF',
        '#CD6CE7',
        '#7C75FF',
        '#EE4492',
        '#AEE7FF',
        '#6998FF',
        '#2864FF',
        '#C23AFF',
    ]
    const [state, setState] = useState({
        series: [34, 10, 30, 26],
        options: {
            chart: {
                type: 'donut',
            },
            colors: colors,
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%',
                        background: '#fff', // Simulate `innerCircle.fill`
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '14px',
                                fontWeight: 700,
                                fontFamily: 'Roboto',
                                offsetY: -10,
                                formatter: () => 'Total supply',
                            },
                            value: {
                                show: true,
                                showAlways: true,
                                fontSize: '20px',
                                fontWeight: 500,
                                fontFamily: 'Roboto',
                                offsetY: 10,
                                color: 'black',
                                formatter: () => '100,000',
                            },
                            total: {
                                show: false
                            },
                        },
                    },
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 400,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        },
    });

    // const data = [
    //     { asset: 'Strategic Partners & Advisors', amount: 34 },
    //     { asset: 'Strategic Partners & Advisors', amount: 20 },
    //     { asset: 'Strategic Partners & Advisors', amount: 12.5 },
    //     { asset: 'Strategic Partners & Advisors', amount: 56 },
    // ];

    // const [options] = useState({
    //     background: {
    //         fill: 'transparent',
    //       },
    //     data,
    //     series: [
    //         {
    //             type: 'donut',
    //             angleKey: 'amount',
    //             calloutLabelKey: 'asset',
    //             width: 800,
    //             innerRadiusRatio: 0.7,
    //             fills: colors,
    //             strokeWidth: 0,
    //             innerLabels: [
    //                 {
    //                     text: 'Total supply',
    //                     fontWeight: 'bold',
    //                     fontFamily: 'Roboto',
    //                 },
    //                 {
    //                     text: '100,000',
    //                     spacing: 4,
    //                     fontSize: 20,
    //                     color: 'black',
    //                     fontFamily: 'Roboto',
    //                 },
    //             ],
    //             innerCircle: {
    //                 fill: '#fff',
    //             },
    //             calloutLabel: {
    //                 enabled: true,
    //                 fontSize: 10,
    //                 fontWeight: '600',
    //                 fontFamily: 'Roboto',
    //                 color: '#333',
    //               },
    //               calloutLine: {
    //                 strokeWidth: 1,
    //                 colors: ['#ccc'],
    //               },
    //         },
    //     ],
    //     legend: {
    //         enabled: false,
    //     },
    //     theme: {
    //         fontFamily: 'Roboto',
    //       },
    // });
    return (
        <>
            <div className='container chart-section my-5'>
                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                        <h1 className='gradient-text text-capitalize'>
                            The Real Value Of NUC
                        </h1>
                        <div className='description'>
                            Lorem ipsum dolor sit amet consectetur. Purus est in sit ipsum suspendisse in amet mi.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <div id="chart">
                                <ReactApexChart
                                    options={state.options}
                                    series={state.series}
                                    type="donut"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 listing">
                        {/* Label List */}
                        <div
                            className='label-listing mt-3 d-flex flex-column gap-4'
                        >
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    className='list-item d-flex flex-column gap-1'
                                    style={{
                                        borderLeftColor: color,
                                    }}
                                >
                                    <div style={{ color: color }} className='percent-item'>
                                        10%  Team
                                    </div>
                                    <div
                                        className='percent-description'
                                    >
                                        10%  NUC, 10% each month after
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PieChart
