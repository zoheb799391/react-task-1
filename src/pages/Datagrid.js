import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'userName', headerName: 'userName', width: 130 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'email', headerName: 'email', width: 150,}

];
const DataTable = (props) => {
  console.log( 'data for datagrid', props)
    let data = [];
    data = props.data.map(function(rows) {
      return ({
        id:  rows.id,
        userName:  rows.username,
        name:  rows.name,
        email: rows.email
      });
    })

    const handleclick = () => {
      console.log(data);
    }
    
    
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      columns={columns}
        rows={data}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      onCellClick={handleclick}
        />
    </div>
  );
}

export default  DataTable;
