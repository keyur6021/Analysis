import React, { useState } from 'react'
import Chart from './Chart';
import Header from './Header';
import Table from './Table';

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);
    return (
        <React.Fragment>
            <div className='w-50 shadow-lg p-3 mb-5 bg-white rounded'>
                <Header chartData={chartData} />
                {/* <Chart /> */}
                <Table updateChartData={setChartData}/>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;