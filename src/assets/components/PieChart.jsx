import { AgCharts } from 'ag-charts-react';
import React, { useState } from 'react'
const PieChart = () => {

    const data = [
        { asset: 'Strategic Partners & Advisors', amount: 34 },
        { asset: 'Strategic Partners & Advisors', amount: 20 },
        { asset: 'Strategic Partners & Advisors', amount: 12.5 },
        { asset: 'Strategic Partners & Advisors', amount: 56 },
        { asset: 'Strategic Partners & Advisors', amount: 12.5 },
        { asset: 'Strategic Partners & Advisors', amount: 12.5 },
        { asset: 'Strategic Partners & Advisors', amount: 11 },
        { asset: 'Strategic Partners & Advisors', amount: 10 },
    ];

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

    const [options] = useState({
        background: {
            fill: 'transparent',
          },
        data,
        series: [
            {
                type: 'donut',
                angleKey: 'amount',
                calloutLabelKey: 'asset',
                innerRadiusRatio: 0.6,
                fills: colors,
                strokeWidth: 0,
                innerLabels: [
                    {
                        text: 'Total supply',
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                    },
                    {
                        text: '100,000',
                        spacing: 4,
                        fontSize: 20,
                        color: 'black',
                        fontFamily: 'Roboto',
                    },
                ],
                innerCircle: {
                    fill: '#fff',
                },
                calloutLabel: {
                    enabled: true,
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'Roboto',
                    color: '#333',
                  },
                  calloutLine: {
                    strokeWidth: 1,
                    colors: ['#ccc'],
                  },
            },
        ],
        legend: {
            enabled: false,
        },
        theme: {
            fontFamily: 'Roboto',
          },
    });
    const labels = [
        { top: '0', left: '38%', color: '#882DCF' },
        { top: '25%', left: '50%', color: '#CD6CE7' },
        { top: '35%', left: '90%', color: '#7C75FF' },
        { top: '60%', left: '85%', color: '#EE4492' },
        { top: '75%', left: '65%', color: '#AEE7FF' },
        { top: '82%', left: '35%', color: '#6998FF' },
        { top: '68%', left: '10%', color: '#2864FF' },
        { top: '30%', left: '5%', color: '#C23AFF' },
    ];
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
                        <div className='chart'>
                            <AgCharts options={options} />
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
