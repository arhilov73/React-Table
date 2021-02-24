import React from 'react';

const TableHead = ({ sortData }) => {
  return (
    <thead className='list-group mb-0'>
        <tr>
            <th className='list-group-item' onClick={() => {sortData('id')}}>
                ID
            </th>
            <th className='list-group-item' onClick={() => {sortData('firstName')}}>
                FULL NAME
            </th>
            <th className='list-group-item' onClick={() => {sortData('email')}}>
                EMAIL
            </th>
            <th className='list-group-item' onClick={() => {sortData('phone')}}>
                PHONE
            </th>
        </tr>
    </thead>
  );
};

export default TableHead;