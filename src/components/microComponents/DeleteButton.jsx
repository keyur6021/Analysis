import { Button } from 'react-bootstrap';
import {MdDelete}  from 'react-icons/md';

const DeleteButton = ({handleClick}) => {
    return (
      <>
          <Button className='delete-btn' onClick={handleClick}>
          <MdDelete />
          </Button>
      </>
    )
  }
  
  export default DeleteButton
  