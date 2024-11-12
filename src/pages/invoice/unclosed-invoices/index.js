import React from 'react'
import Pinteg from '../../../components/Pinteg'
import Stories from '../../../components/Stories'
import Cure from '../../../components/Cure'
import UnClosedInvoicesTable from '../../../components/UnClosedInvoicesTable'
import UnClosedInvoicesModal from '../../../components/UnClosedInvoicesModal'

const UnClosedInvoicesPage = () => {
    const [offerModal, setOfferModal] = React.useState(false)
    const toggleOfferModal = () => setOfferModal(!offerModal)

    return (
        <Pinteg>
            <Stories />

            <div className='my-orders'>
                <div className='mb-3'><h4>Kapanmamış Faturalar</h4></div>

                <UnClosedInvoicesTable toggleOfferModal={toggleOfferModal} />

                <UnClosedInvoicesModal
                    offerModal={offerModal}
                    toggleOfferModal={toggleOfferModal}
                />
            </div>

            <Cure />
        </Pinteg>
    )
}

export default UnClosedInvoicesPage
