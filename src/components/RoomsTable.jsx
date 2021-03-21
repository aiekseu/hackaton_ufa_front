import React from 'react';
import {DataGrid, GridColDef} from "@material-ui/data-grid";
import roomsData from "../data/roomsData";
import { Paper} from "@material-ui/core";
import {GridRowParams} from "@material-ui/data-grid";
import {useState} from "react";

import history from '../services/history';

const RoomsTable = () => {

    const [rows, setRows] = useState(roomsData)

    const columns: GridColDef[] = [
        {field: 'col1', headerName: 'Этаж', width: 75},
        {field: 'col2', headerName: 'Тип помещения', width: 150},
        {field: 'col3', headerName: 'Номер кабинета', width: 150},
        {field: 'col4', headerName: 'Площадь', width: 100},
        {field: 'col5', headerName: 'ВКС', width: 70},
        {field: 'col6', headerName: 'Микрофон', width: 90},
        {field: 'col7', headerName: 'Wi-Fi', width: 75},
        {field: 'col8', headerName: 'LED', width: 75},
        {field: 'col9', headerName: 'Вместимость', width: 120},
    ];

    return (
        <Paper style={{height: 500, width: '100%'}}>
            <DataGrid
                rows={rows}
                rowHeight={45}
                columns={columns}
                pageSize={10}
                disableColumnMenu
                onRowClick={(param: GridRowParams) => {
                    let path = /calendar/ + param.row.col3
                    let roomN = param.row.col3
                    history.push(path, roomN)
                }}
                onRowHover={(param: GridRowParams) => {
                    //console.log(param.row.id)
                }}
            />
        </Paper>
    )
}

export default RoomsTable