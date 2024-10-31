import { carColumns } from '@/components/Elements/columns'
import { CARDATA } from '@/components/Elements/data'
import { Table } from 'antd'
import React from 'react'

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
