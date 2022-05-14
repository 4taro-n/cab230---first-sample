import React,{useState, useEffect} from 'react';

import Navbar from '../Navbar';
import useVolcano from '../useVolcano';
import SearchVolcano from '../SearchVolcano';

import '../VolcanoTable.css'


import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import {Link, useNavigate} from "react-router-dom";


function VolcanoListPage() {
    const [search, setSearch] = useState({
        country: '',
        population: ''
    });
    const {volcanoList} = useVolcano(search);

    const navigate = useNavigate();

    const columns = [
        {headerName: "Name", field: "name", cellRendererFramework: function(params) {

        return <Link to={`OneVolcanoPage/${params.data.id}`}>
            {params.data.name}
         </Link>
        },},
        {headerName: "Region", field: "region"},
        {headerName: "Subregion", field: "subregion"}
    ];


  return (
    <div>
        <Navbar />
        VolcanoListPage
        <SearchVolcano onSubmit={setSearch} />

        <div 
        className="ag-theme-balham">
            <AgGridReact
            columnDefs={columns}
            rowData={volcanoList}
            pagination={true}
            paginationPageSize={20}
            onRowClicked={(row) => navigate(`OneVolcanoPage/${row.data.id}`)}
            />
        </div>
    </div>
  )
}

export default VolcanoListPage;