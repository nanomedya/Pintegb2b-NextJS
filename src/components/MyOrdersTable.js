import { Table } from 'antd'
import React from 'react'
import { myOrdersColumns } from './Columns'
import { ORDERDATA } from './Data'

const MyOrdersTable = () => {
    return (
        <div className="mt-4">
            <Table
                bordered
                columns={myOrdersColumns}
                dataSource={ORDERDATA}
                rowKey='productID'
                scroll={{ x: 'max-content' }}
                className="product shadow-sm rounded"
                locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
            />
        </div>
    )
}

export default MyOrdersTable
