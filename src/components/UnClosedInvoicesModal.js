import React from 'react'
import { motion } from 'framer-motion'
import { X } from 'react-feather'
import { offerVariant } from './Animation'
import UnClosedInvoiceItem from './UnClosedInvoicesItem'

const UnClosedInvoicesModal = ({ offerModal, toggleOfferModal }) => {
    return (
        offerModal && (<div className="offer-modal">
            <X className="offer-close" onClick={toggleOfferModal} />
            <motion.div {...offerVariant} className="offer-content">
                <div className="p-3 border-b border-gray-200"><h2><strong>Kapanmamış Fatura Bilgisi</strong></h2></div>
                <div className="p-3 overflow-y-auto h-screen pb-3 mb-3">

                    <UnClosedInvoiceItem />

                </div>
            </motion.div>
        </div>)
    )
}

export default UnClosedInvoicesModal
