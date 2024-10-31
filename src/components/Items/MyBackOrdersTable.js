import React from 'react'
import { myBackOrdersColumns } from '../Elements/columns'
import { MYBACKORDERDATA } from '../Elements/data'
import { Table } from 'antd'

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
