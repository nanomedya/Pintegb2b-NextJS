import { Table } from 'antd'
import React from 'react'
import { competitorCodesColumns } from '../Columns'
import { COMPETITORCODESDATA } from '../Data'

const CompetitorCodes = () => {
    return (
        <Table
            bordered
            columns={competitorCodesColumns}
            dataSource={COMPETITORCODESDATA}
            rowKey='id'
            scroll={{ x: 'max-content' }}
            className="product shadow-sm rounded"
            locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
        />
    )
}

export default CompetitorCodes
