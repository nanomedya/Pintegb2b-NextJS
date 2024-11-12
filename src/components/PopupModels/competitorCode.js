import { Table } from 'antd'
import React from 'react'
import { competitorCodeColumns } from '../Columns'
import { COMPETITORCODEDATA } from '../Data'

const CompetitorCode = () => {
    return (
        <Table
            bordered
            columns={competitorCodeColumns}
            dataSource={COMPETITORCODEDATA}
            rowKey='id'
            scroll={{ x: 'max-content' }}
            className="product shadow-sm rounded"
            locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
        />
    )
}

export default CompetitorCode
