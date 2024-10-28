import { Table } from 'antd'
import React from 'react'
import { alternativeColumns } from '../columns'
import { alternativeDATA } from '../data'

const Alternative = () => {
    return (
        <Table
            bordered
            columns={alternativeColumns}
            dataSource={alternativeDATA}
            rowKey='id'
            scroll={{ x: 'max-content' }}
            className="product shadow-sm rounded"
            locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
        />
    )
}

export default Alternative
