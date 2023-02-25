import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { MdModeEdit } from 'react-icons/md'
import { AiFillPrinter } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdDownload } from 'react-icons/md'
import UpdateModel from './UpdateModel';
import * as _ from 'lodash';
import Donutchart from './Chart';

const Header = ({chartData}) => {

    const [show, setShow] = useState(false);
    const [budgetName, setBudgetName] = useState('');
    const [chartTitle, setChartTitle] = useState('');

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    return (
        <React.Fragment>
            <div className='main-header'>
                <div className='header' style={{ background: '#006400', color: '#fff', padding: '18px', display: 'flex', }} >
                    <div className='header-title' style={{ fontSize: '24px', fontWeight: '700', textAlign: 'center', width: '80%' }}>
                        {!budgetName ? 'Please Fill-Up the details' : budgetName}
                    </div>
                    <div className='buttons'>
                        <Button className='header-buttons' onClick={handleShow} ><MdModeEdit fontSize='20px' /></Button>
                        <Button className='header-buttons' ><AiFillPrinter fontSize='20px' /></Button>
                        <Button className='header-add-button' ><AiOutlinePlusCircle fontSize='20px' /></Button>
                        <Button className='header-buttons' ><MdDownload fontSize='20px' /></Button>
                    </div>
                </div>
                <div className='model'>
                    <UpdateModel
                        show={show}
                        handleClose={handleClose}
                        setBudgetName={setBudgetName}
                        setChartTitle={setChartTitle}
                    />
                </div>
                <div>
                    <Donutchart chartData={chartData} title='Summary of Monthly Budgetd Expenses' chartTitle={chartTitle} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header