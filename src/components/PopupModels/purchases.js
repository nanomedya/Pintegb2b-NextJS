import { Table } from 'antd'
import React from 'react'
import { popupColumns } from '../Columns'
import { POPUPDATA } from '../Data'

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
