import { Table } from 'antd'
import React from 'react'
import { brandColumns } from '../Columns'
import { BRANDDATA } from '../Data'

const Brand = () => {
    return (
        <Table
            bordered
            columns={brandColumns}
            dataSource={BRANDDATA}
            rowKey='id'
            scroll={{ x: 'max-content' }}
            className="product shadow-sm rounded"
            locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
        />
    )
}

export default Brand
