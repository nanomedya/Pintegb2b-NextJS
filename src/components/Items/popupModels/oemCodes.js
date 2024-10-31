import { oemCodesColumns } from '@/components/Elements/columns'
import { OEMCODESDATA } from '@/components/Elements/data'
import { Table } from 'antd'
import React from 'react'

const OemCodes = () => {
    return (
        <Table
            bordered
            columns={oemCodesColumns}
            dataSource={OEMCODESDATA}
            rowKey='id'
            scroll={{ x: 'max-content' }}
            className="product shadow-sm rounded"
            locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
        />
    )
}

export default OemCodes
