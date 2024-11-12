import React from 'react'
import Pinteg from '../../../components/Pinteg'
import Stories from '../../../components/Stories'
import Cure from '../../../components/Cure'
import MyBackOrdersTable from '../../../components/MyBackOrdersTable'

const MyBackOrdersPage = () => {
    return (
        <Pinteg>
            <Stories />
            <div className='my-orders'>
                <div className='mb-3'><h4>Bakiye Siparişlerim</h4></div>
                <MyBackOrdersTable />
            </div>
            <Cure />
        </Pinteg>
    )
}

export default MyBackOrdersPage
