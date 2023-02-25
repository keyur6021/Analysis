import React from 'react'
import { Button } from 'react-bootstrap'
import {IoMdCheckmark} from 'react-icons/io';

const SaveButton = ({handleClick}) => {
  return (
    <>
        <Button className='save-btn' onClick={handleClick}>
        <IoMdCheckmark />
        </Button>
    </>
  )
}

export default SaveButton;