import React from 'react'
import Pinteg from '../../../components/Pinteg'
import Stories from '../../../components/Stories'
import Cure from '../../../components/Cure'
import MyOrdersTable from '../../../components/MyOrdersTable'

const MyOrdersPage = () => {
    return (
        <Pinteg>
            <Stories />
            <div className='my-orders'>
                <div className='mb-3'><h4>Siparişlerim</h4></div>
                <MyOrdersTable />
            </div>
            <Cure />
        </Pinteg>
    )
}

export default MyOrdersPage
