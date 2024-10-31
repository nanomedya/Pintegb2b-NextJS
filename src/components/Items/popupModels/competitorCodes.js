import { competitorCodesColumns } from '@/components/Elements/columns'
import { COMPETITORCODESDATA } from '@/components/Elements/data'
import { Table } from 'antd'
import React from 'react'

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
