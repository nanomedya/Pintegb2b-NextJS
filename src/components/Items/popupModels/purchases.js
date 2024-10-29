import { popupColumns } from '@/components/Elements/columns'
import { POPUPDATA } from '@/components/Elements/data'
import { Table } from 'antd'
import React from 'react'

const Purchases = () => {
    return (
        <Table
            bordered
            columns={popupColumns}
            dataSource={POPUPDATA}
            rowKey='id'
            scroll={{ x: 'max-content' }}
            className="product shadow-sm rounded"
            locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
        />
    )
}

export default Purchases
