import { Table } from 'antd'
import React from 'react'
import { INVOICESDATA } from './Data'
import { invoicesColumns } from './Columns'

const InvoicesTable = ({ toggleOfferModal }) => {
    return (
        <div className="mt-4">
            <Table
                bordered
                columns={invoicesColumns({ toggleOfferModal: toggleOfferModal })}
                dataSource={INVOICESDATA}
                scroll={{ x: 'max-content' }}
                className="product shadow-sm rounded"
                locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
            />
        </div>
    )
}

export default InvoicesTable
