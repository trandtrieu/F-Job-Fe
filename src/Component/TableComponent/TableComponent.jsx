import { CheckBox } from '@mui/icons-material';
import { Button, Divider, Radio, Table } from 'antd';
import React, { useMemo, useState } from 'react'
import Loading from '../LoadingComponent/Loading';
import { Excel } from "antd-table-saveas-excel";
const TableComponent = (props) => {
    const { selectionType = 'checkbox',
        columns = [],
        isLoading = false,
        data: dataSource = [] } = props


    // hàm này dùng để lấy tên column trong bảng, 
    // vì trong bảng có dính đến action, mà phần này kh lấy nên hàm này có chức năng như vậy
    const newColumnExport = useMemo(() => {
        const arr = columns?.filter((col) => col.dataIndex !== 'action')
        return arr
    }, [columns])

    // console.log("newColumnExport", newColumnExport)

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };


    // console.log("dataSource", dataSource, newColumnExport)
    //func export file excel
    const exportExcel = () => {
        const excel = new Excel();
        excel
            .addSheet("test")
            .addColumns(newColumnExport)
            .addDataSource(dataSource, {
                str2Percent: true
            })
            .saveAs("Excel.xlsx");
    };


    return (
        <div>
            <Loading isLoading={isLoading}>
                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={dataSource}
                    {...props}
                />
                {/* <Button onClick={exportExcel}>Export Excel</Button> */}
            </Loading>
        </div>
    )
}

export default TableComponent