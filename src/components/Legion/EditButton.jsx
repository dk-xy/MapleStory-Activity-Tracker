// EditButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { IconPencil } from '@tabler/icons-react';


// const EditButton = ({ id }) => {
//   return (
//     <Link to={`/legion/${id}/edit`} className='editButton'>
//       <IconPencil size={24} />
//       EDIT
//     </Link>
//   );
// };
function EditButton({ id }) {
  return (
    <Link to={`/legion/${id}/edit`} className='editButton'>
      <IconPencil size={24} />
      EDIT
    </Link>
  );
}

export default EditButton;