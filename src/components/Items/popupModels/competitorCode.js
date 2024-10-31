import { competitorCodeColumns } from '@/components/Elements/columns'
import { COMPETITORCODEDATA } from '@/components/Elements/data'
import { Table } from 'antd'
import React from 'react'

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
