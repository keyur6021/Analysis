import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";
import * as _ from "lodash";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

const CategoryTable = ({ tableData, id, setTableData }) => {
    const [categoryTitle, setCategoryTitle] = useState('');
    const [rowTitle, setRowTitle] = useState('');
    const [isCategoryEdit, setIsCategoryEdit] = useState(true);
    const currentCategory = tableData?.find((data) => data.id === id);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deleteRowModalOpen, setDeleteRowModalOpen] = useState(false);
    const [currentRowId, setCurrentRowId] = useState();
    const [categoryId, setCategoryId] = useState('');
    const [monthlyData, setMonthlyData] = useState();
    const [totalExpenses, setTotalExpenses] = useState({});

    const handleCategoryTitleSave = () => {
        const updatedCategory = { ...currentCategory, category: categoryTitle };
        setTableData((prevData) => prevData?.map((data) => {
            if (data.id === id) {
                return updatedCategory
            } else {
                return data
            }
        }))
        if (categoryTitle) {
            setIsCategoryEdit(false);
            setCategoryTitle('');
        }
    }

    const handleCategoryEntitySave = (rowId, val) => {
        const updatedRows = currentCategory.rows?.map((rowData, ind) => {
            if (rowData.id === rowId) {
                return {
                    ...rowData,
                    entity: val,
                }
            }
            else {
                return rowData
            }
        })
        const updatedCategory = { ...currentCategory, rows: updatedRows }
        setTableData((prevData) => prevData?.map((data) => {
            if (data.id === id) {
                return updatedCategory
            } else {
                return data
            }
        }))
        console.log('updatedRows===>', updatedRows);
    }

    const calculateExpenses = (monthlyExp, rowIndex) => {
        console.log('monthlyExp ====>', monthlyExp, rowIndex);
        // To handle expense
        const monthlyExpense = parseInt(monthlyExp);
        const weeklyExpense = monthlyExpense / 4;
        const biWeeklyExpense = monthlyExpense / 2;
        const yearlyExpense = monthlyExpense * 12;
        const updatedExpense =
            { monthly: monthlyExpense, yearly: yearlyExpense, biWeekly: biWeeklyExpense, weekly: weeklyExpense }
        console.log('updatedExpense ====>', updatedExpense);

        const updatedRows = currentCategory.rows?.map((rowData, ind) => {
            if (ind === rowIndex) {
                return {
                    ...rowData,
                    expense: updatedExpense
                }
            }
            else {
                return rowData
            }
        })
        const updatedCategory = { ...currentCategory, rows: updatedRows };
        setTableData((prevData) => prevData?.map((data) => {
            if (data.id === id) {
                return updatedCategory
            } else {
                return data
            }
        }))
    }

    useEffect(() => {
        setTimeout(() => {
            const totalWeeklyExpense = _.sumBy(currentCategory.rows, (row) => row.expense.weekly);
            const totalbiWeeklyExpense = _.sumBy(currentCategory.rows, (row) => row.expense.biWeekly);
            const totalyearlyExpense = _.sumBy(currentCategory.rows, (row) => row.expense.yearly);
            const totalMonthlyExpense = _.sumBy(currentCategory.rows, (row) => row.expense.monthly);
            const totalExp =
            {
                monthly: totalMonthlyExpense, yearly: totalyearlyExpense, biWeekly: totalbiWeeklyExpense,
                weekly: totalWeeklyExpense
            }
            setTotalExpenses(totalExp);
            const updatedCategory = { ...currentCategory, totalExpense: totalExp }
            setTableData((prevData) => prevData?.map((data) => {
                if (data.id === id) {
                    return updatedCategory
                } else {
                    return data
                }
            }))
        }, 2000);
    }, [monthlyData])


    const handleClearExpenses = (rowIndex) => {
        const updatedRows = currentCategory.rows?.map((rowData, ind) => {
            if (ind === rowIndex) {
                return {
                    ...rowData,
                    expense: { monthly: 0, yearly: 0, BiWeekly: 0, weekly: 0 }
                }
            }
            else {
                return rowData
            }
        })
        const updatedCategory = { ...currentCategory, rows: updatedRows };
        setTableData((prevData) => prevData?.map((data) => {
            if (data.id === id) {
                return updatedCategory
            } else {
                return data
            }
        }))
    }
    return (
        <div>
            <Table bordered className='mt-2'>
                <thead style={{ backgroundColor: 'blue', color: 'white' }}>
                    <tr>
                        {
                            isCategoryEdit ? <td><Form.Control
                                type="text"
                                autoFocus
                                id="inputPassword5"
                                value={categoryTitle || _.get(currentCategory, 'category', '')}
                                aria-describedby="passwordHelpBlock"
                                onChange={(e) => setCategoryTitle(e.target.value)}
                            /></td> : <th>{currentCategory.category}</th>
                        }

                        <th>Weekly</th>
                        <th>Bi-Weekly</th>
                        <th>Monthly</th>
                        <th>Yearly</th>
                        <th>
                            {
                                isCategoryEdit ? <div>
                                    <SaveButton handleClick={handleCategoryTitleSave} />
                                    <DeleteButton handleClick={() => setDeleteModalOpen(true)} />
                                </div> : <EditButton handleClick={() => setIsCategoryEdit(true)} />
                            }

                        </th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: '#2a753a' }} className='text-white'>
                    {
                        currentCategory.rows?.length > 0 && currentCategory.rows?.map((row, ind) => {
                            return (
                                <tr key={ind}>
                                    <td><Form.Control
                                        type="text"
                                        autoFocus
                                        id="inputPassword5"
                                        value={row.entity}
                                        onChange={(e) => {
                                            setRowTitle(e.target.value);
                                            handleCategoryEntitySave(row.id, e.target.value);
                                        }}
                                    /></td>
                                    <td>{parseFloat(_.get(row.expense, 'weekly', 0)).toFixed(2)}</td>
                                    <td>{parseFloat(_.get(row.expense, 'biWeekly', 0)).toFixed(2)}</td>
                                    <td>
                                        <Form.Control
                                            type="number"
                                            value={row.expense.monthly}
                                            aria-describedby="passwordHelpBlock"
                                            onChange={(e) => {
                                                calculateExpenses(e.target.value, ind);
                                                setMonthlyData(parseInt(e.target.value))
                                            }}
                                        /></td>

                                    <td>{parseFloat(_.get(row.expense, 'yearly', 0)).toFixed(2)}</td>

                                    <td>
                                        <div>
                                            <Button style={{marginRight: '5px', padding: '5px'}} onClick={() => handleClearExpenses(ind)}>0</Button>
                                            <SaveButton handleClick={() => {
                                                console.log('saved===>');
                                            }} />
                                            <DeleteButton handleClick={() => {
                                                setDeleteRowModalOpen(true);
                                                setCurrentRowId(row.id);
                                                setCategoryId(currentCategory.id);
                                            }} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr style={{ backgroundColor: 'yellow' }} className='text-black'>
                        <td>Total</td>
                        <td>{parseFloat(_.get(totalExpenses, 'weekly', 0))}</td>
                        <td>{parseFloat(_.get(totalExpenses, 'biWeekly', 0))}</td>
                        <td>{parseFloat(_.get(totalExpenses, 'monthly', 0))}</td>
                        <td>{parseFloat(_.get(totalExpenses, 'yearly', 0))}</td>
                    </tr>
                </tbody>
            </Table>
            {
                deleteModalOpen && <ConfirmDeleteModal show={deleteModalOpen} handleClose={() => setDeleteModalOpen(false)} handleDelete={() => {
                    setTableData((prevData) => {
                        const filteredData = prevData.filter((data) => data.id !== id)
                        return filteredData;
                    })
                }} />
            }
            {
                deleteRowModalOpen && <ConfirmDeleteModal show={deleteRowModalOpen} handleClose={() => {
                    setDeleteRowModalOpen(false);
                    setCurrentRowId('');
                }} handleDelete={() => {
                    setTableData((prevData) => {
                        const currCategory = tableData.find((data) => data.id === categoryId);
                        const updatedRows = currCategory.rows.filter((data, ind) => data.id !== currentRowId);
                        console.log('updatedRows===>', updatedRows);
                        const updatedData = prevData.map((data) => {
                            if (data.id === id) {
                                return {
                                    ...data,
                                    rows: updatedRows
                                }
                            } else {
                                return data;
                            }
                        })
                        return updatedData;
                    })
                }} />
            }
        </div>
    )
}

export default CategoryTable;