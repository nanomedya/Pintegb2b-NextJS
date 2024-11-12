import { Table } from 'antd'
import React from 'react'
import { oemCodesColumns } from '../Columns'
import { OEMCODESDATA } from '../Data'

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
