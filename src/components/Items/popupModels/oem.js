import { oemColumns } from '@/components/Elements/columns'
import { OEMDATA } from '@/components/Elements/data'
import { Table } from 'antd'
import React from 'react'

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
