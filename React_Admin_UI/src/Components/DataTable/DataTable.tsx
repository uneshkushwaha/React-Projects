// dataTable is the table data of the grid
import { DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';
import  './dataTable.scss'
import { Link } from 'react-router-dom';
import { useQueryClient, useMutation  } from 'react-query';

type Props = {
  columns: GridColDef[],
  rows:object[],
  slug:string;
}



const DataTable = (props:Props) => {
  const queryClient = useQueryClient();

  const mutation =useMutation({
   mutationFn: (id:number) => {

     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
       method: 'DELETE',
     });
 },
 onSuccess: () => {
    queryClient.invalidateQueries([`all${props.slug}`]);
  }
});


  const handleDelete = (id:number)=>{
    //for deleting,updating and adding data to the api we should the reactquery mutation
    //delete the user
    //axios.delete(`users/${id}`)or
    //axios.delete{`/api/${slug}/id}
    // The slug is the part of your URL that comes after the “/”.
mutation.mutate(id);//mutate is a function that takes the id as a parameter and delete the item
  };

   //for the action column
   const actionColumn: GridColDef ={
    field:'actions', headerName:'Actions', width: 150, 
    renderCell: (params)=>{
    
      return (
      <div className='action'>
        <Link to={`/${props.slug}/${params.row.id}`}>
        <img src="/view.svg" alt="" />
        </Link>

       
        <div className='delete' onClick={()=>handleDelete(params.row.id)}>
        <img src="/delete.svg" alt="" />
        </div>
      </div> )
    }
     }

  return (
    <div className='DataTable'>
       <DataGrid
       className='dataGrid'
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}

        
slots={{toolbar:GridToolbar}}
slotProps={{
  toolbar: {
    showQuickFilter: true,// show quick filter or search bar in the user interface
    quickFilterProps: { debounceMs: 500 },// debounceMs: 500 is the time in milliseconds to wait before triggering a filter This is useful to prevent the filter from being applied too frequently
  },
  }}

        pageSizeOptions={[10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable
