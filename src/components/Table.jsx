import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import CategoryTable from './microComponents/CategoryTable';
import EditButton from './microComponents/EditButton';

const CustomTable = ({updateChartData}) => {
    const [analysisData, setAnalysisData] = useState([]);
    // const testData = { id: 'random', category: 'abc', rows: [{ entity: 'xyz', expense: { monthly: 100, yearly: 1200, biWeekly: 50, weekly: 25 } }] };
    const initialCategory = { id: new Date().getTime(), category: '', rows: [], totalExpense: { monthly: 0, yearly: 0, biWeekly: 0, weekly: 0 } };
    const initialRow = { id: new Date().getTime(), entity: '', expense: { monthly: 0, yearly: 0, biWeekly: 0, weekly: 0 }};

    const currentAnalysisData = JSON.stringify(analysisData);
    useEffect(() => {
      updateChartData(analysisData);
    
    }, [currentAnalysisData])
    
    return (
        <div>
            <div className='d-flex justify-content-end'>
                <Button variant="success" style={{ marginRight: '10px' }}
                    onClick={() => {
                        setAnalysisData((p) => [...p, initialCategory])
                    }}
                ><AiOutlinePlusCircle /> Category</Button>
            </div>
            {
                analysisData?.length > 0 && analysisData.map((category, ind) => {
                    return (
                        <React.Fragment key={ind}>
                            <CategoryTable tableData={analysisData} setTableData={setAnalysisData} id={category.id} />
                            <div className='d-flex justify-content-end'>
                                <Button variant="success" onClick={() => {
                                    const currentCategory = analysisData?.find((data) => data.id === category.id);
                                    currentCategory?.rows.push(initialRow);
                                    const result = analysisData?.map((currCategory) => {
                                        if (currCategory.id !== currentCategory.id) {
                                            return currCategory
                                        }
                                        return currentCategory
                                    })
                                    setAnalysisData(result);
                                }}><AiOutlinePlusCircle /> Row123</Button>
                            </div>
                        </React.Fragment>
                    )
                })
            }

        </div>
    )
}

export default CustomTable;