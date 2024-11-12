import { Table } from 'antd'
import React from 'react'
import { carColumns } from '../Columns'
import { CARDATA } from '../Data'

const Car = () => {
    return (
        <Table
            bordered
            columns={carColumns}
            dataSource={CARDATA}
            rowKey='id'
            scroll={{ x: 'max-content' }}
            className="product shadow-sm rounded"
            locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
        />
    )
}

export default Car
