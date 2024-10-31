import { brandColumns } from '@/components/Elements/columns'
import { BRANDDATA } from '@/components/Elements/data'
import { Table } from 'antd'
import React from 'react'

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
