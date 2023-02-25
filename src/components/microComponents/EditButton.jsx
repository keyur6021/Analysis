import React from 'react'
import { Button } from 'react-bootstrap'
import {MdOutlineEdit} from 'react-icons/md';

const EditButton = ({handleClick}) => {
  return (
    <>
        <Button className='edit-btn' onClick={handleClick}>
        <MdOutlineEdit />
        </Button>
    </>
  )
}

export default EditButton