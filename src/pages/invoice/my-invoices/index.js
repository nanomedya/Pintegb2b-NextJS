import React from 'react'
import Pinteg from '../../../components/Pinteg'
import Stories from '../../../components/Stories'
import Cure from '../../../components/Cure'
import InvoicesModal from '../../../components/InvoicesModal'
import InvoicesTable from '../../../components/InvoicesTable'

const MyInvoicesPage = () => {
    const [offerModal, setOfferModal] = React.useState(false)
    const toggleOfferModal = () => setOfferModal(!offerModal)

    return (
        <Pinteg>
            <Stories />
            <div className='my-orders'>
                <div className='mb-3'><h4>Faturalarım</h4></div>

                <InvoicesTable toggleOfferModal={toggleOfferModal} />

                <InvoicesModal
                    offerModal={offerModal}
                    toggleOfferModal={toggleOfferModal}
                />
            </div>
            <Cure />
        </Pinteg>
    )
}

export default MyInvoicesPage
