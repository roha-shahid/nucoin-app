import React from 'react'
import Chart from 'react-google-charts'
const PieChart = () => {

    const data = [
        ['Label', 'Value'],
        ['Strategic Partners & Advisors', 12.5],
        ['Strategic Partners & Advisors', 12.5],
        ['Strategic Partners & Advisors', 12.5],
        ['Strategic Partners & Advisors', 12.5],
        ['Strategic Partners & Advisors', 12.5],
        ['Strategic Partners & Advisors', 12.5],
        ['Strategic Partners & Advisors', 12.5],
        ['Strategic Partners & Advisors', 12.5],
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
    const options = {
        pieHole: 0.9,
        pieSliceText: 'none', // hide % inside slices
        legend: 'none', // hide default legend
        backgroundColor: 'transparent',
        chartArea: {
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
        },
        colors,
    };
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
            <div className='container chart-section my-5' style={{ position: 'relative', margin: '0 auto' }}>
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
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            className="labels"
                            height="500px"
                            data={data}
                            options={options}
                        />
                        <div className="chart-border">
                            <div className='pie-head'>
                                <div style={{ fontSize: '18px', fontWeight: 600 }}>Total supply</div>
                                <div style={{ fontSize: '12px' }}>
                                    100,000,000,000 tokens
                                </div>
                            </div>
                        </div>
                        {/* Side Labels */}
                        {labels.map((label, index) => (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: label.top,
                                    left: label.left,
                                    transform: 'translate(-50%, -50%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    color: '#333',
                                    backgroundColor: '#fff',
                                    padding: '4px 8px',
                                    borderRadius: '6px',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <span>
                                    12%
                                </span>
                                Strategic Partners & Advisors
                            </div>
                        ))}
                    </div>
                    <div className="col-md-6 px-5">
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
