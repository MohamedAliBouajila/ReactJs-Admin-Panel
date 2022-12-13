import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
const Datatable = () => {
const [data,setData] = useState(userRows);

const handleDelete = (id) =>{
  setData(data.filter(item=>item.id !== id))
}

    const actionColumn = [{ field:"action", headerName:"Action",width:200,renderCell:(params)=>{
        return (
            <div className='cellAction'>
                <Link to="/users/8" className="link"><div className='viewButton'>View</div></Link>
                <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
            </div>
        )
    }   }]

  return (
    <div className='datatable'>
      <div className="dataTableTitle">
      Add New User 
      <Link to="/users/new" className='link addNewBtn' >
        Add New
      </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable