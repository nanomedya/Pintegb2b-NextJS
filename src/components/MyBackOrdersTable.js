import React from 'react'
import { Table } from 'antd'
import { myBackOrdersColumns } from './Columns'
import { MYBACKORDERDATA } from './Data'

const MyBackOrdersTable = () => {
    return (
        <div className="mt-4">
            <Table
                bordered
                columns={myBackOrdersColumns}
                dataSource={MYBACKORDERDATA}
                scroll={{ x: 'max-content' }}
                className="product shadow-sm rounded"
                locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
            />
        </div>
    )
}

export default MyBackOrdersTable
