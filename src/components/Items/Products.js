import { Table } from 'antd'
import React from 'react'
import { DATA } from '../Elements/data'
import { columns } from '../Elements/columns'

const Products = ({ setModalId, onOpen, toggleOfferModal }) => {
    return (
        <div>
            <div className="mt-4">
                <Table
                    bordered
                    columns={columns({ setModalId: setModalId, onOpen: onOpen, toggleOfferModal: toggleOfferModal })}
                    dataSource={DATA}
                    rowKey='productID'
                    // rowSelection={rowSelection}
                    scroll={{ x: 'max-content' }}
                    className="product shadow-sm rounded"
                    locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
                />
            </div>
        </div>
    )
}

export default Products
