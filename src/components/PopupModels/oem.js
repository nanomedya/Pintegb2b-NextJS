import { Table } from 'antd'
import React from 'react'
import { oemColumns } from '../Columns'
import { OEMDATA } from '../Data'

const Oem = () => {
    return (
        <Table
            bordered
            columns={oemColumns}
            dataSource={OEMDATA}
            rowKey='id'
            scroll={{ x: 'max-content' }}
            className="product shadow-sm rounded"
            locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
        />
    )
}

export default Oem
