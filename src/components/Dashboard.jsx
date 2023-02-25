import React from 'react'
import Chart from './Chart';
import Header from './Header';
import Table from './Table';

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className='w-50 shadow-lg p-3 mb-5 bg-white rounded'>
                <Header />
                {/* <Chart /> */}
                {/* <Table /> */}
            </div>
        </React.Fragment>
    )
}

export default Dashboard;