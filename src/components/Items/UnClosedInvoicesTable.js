import { Table } from 'antd'
import React from 'react'
import { unClosedInvoicesColumns } from '../Elements/columns'
import { UNCLOSEDINVOICESDATA } from '../Elements/data'

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
