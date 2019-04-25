import React from 'react'
import ProjectComponent from './projectComponent';
import RolesComponent from './rolesComponent';
import Table from './tableComponent/table.js';

export default function ComponentIndexFile() {
  return (
    <div className='compDiv'>
      <ProjectComponent />
      {/* <RolesComponent /> */}
      <Table/>
    </div>
  )
}
