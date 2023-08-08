import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    loading,
    sx
}) => {
    const [pageSize, setPageSize] = useState(1);

    return (
    
        <DataGrid 
            rows={rows}
            columns={columns}
            loading={loading}
            sx={sx}
    
        
        />
    
    );
};

export default DataTable