import {  GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from "../../Components/DataTable/DataTable"
import "./Users.scss"
import Add from '../../Components/add/Add';
import { useState } from 'react';
import { useQuery } from 'react-query';

const columns: GridColDef [] = [
  
  { field: 'id', headerName: 'ID', width: 90 },

//for the image column
  {
field:'img', headerName:'Avatar', width: 100, 
renderCell: (params)=>{

  return <img src={params.row.img || "/noavatar.png"} alt="" />
}
 },

 
 
 
 {
   field: 'firstName',
   headerName: 'First name',
   width: 120,
   editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>// valueGetter is a function that returns the value of a cell or combination of cells
    `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 150,
    editable: true,
  },
  
   //for the status column
   {
    field:'status', headerName:'Verified', width: 150, type:'boolean',
  
   },
];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,status:'true'},
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
const Users = () => {
 const [open, setOpen] = useState(false);


  const { isLoading, data } = useQuery('allusers', () =>
    fetch('http://localhost:8800/api/users').then(res =>
      res.json()
    )
  )

  return (
    <div className="users">
       <div className="info">
       <h1> Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
{/* //if data is loading then show loading else show the data */}
      {isLoading ? (
        "Loading..."
      ) : (
        // <DataTable slug='users' columns={columns} rows={ userRows}/>
        <DataTable slug='users' columns={columns} rows={ data}/>
      )}

        {/* //userRows is fetched from data.ts */}
        {open && <Add setOpen={setOpen}  slug='user'columns={columns} />  }
        {/* //if it is open then show the add component */}
    </div>
  )
}

export default Users
