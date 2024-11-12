import React from 'react'
import { Table } from 'antd'
import { columns } from './Columns'
import { DATA } from './Data'

const Products = ({ setModalId, isOpen, setIsOpen, toggleOfferModal }) => {
    return (
        <div className="products">
            <Table
                bordered
                columns={columns({ setModalId: setModalId, isOpen: isOpen, setIsOpen: setIsOpen, toggleOfferModal: toggleOfferModal })}
                dataSource={DATA}
                rowKey='productID'
                // rowSelection={rowSelection}
                scroll={{ x: 'max-content' }}
                className="product shadow-sm rounded"
                locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
            />
        </div>
    )
}

export default Products
