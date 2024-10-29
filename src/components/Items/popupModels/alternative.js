import { Table } from 'antd'
import React from 'react'
import { alternativeColumns } from '@/components/Elements/columns'
import { alternativeDATA } from '@/components/Elements/data'

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
