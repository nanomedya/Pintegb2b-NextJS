import { Table } from 'antd'
import React from 'react'
import { UNCLOSEDINVOICESDATA } from './Data'
import { unClosedInvoicesColumns } from './Columns'

const UnClosedInvoicesTable = ({ toggleOfferModal }) => {
    return (
        <div className="mt-4">
            <Table
                bordered
                columns={unClosedInvoicesColumns({ toggleOfferModal: toggleOfferModal })}
                dataSource={UNCLOSEDINVOICESDATA}
                scroll={{ x: 'max-content' }}
                className="product shadow-sm rounded"
                locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
            />
        </div>
    )
}

export default UnClosedInvoicesTable
