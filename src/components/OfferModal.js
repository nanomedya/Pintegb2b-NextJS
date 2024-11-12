import React from 'react'
import { motion } from 'framer-motion'
import { X } from 'react-feather'
import { offerVariant } from './Animation'
import OfferItem from './OfferItem'

const OfferModal = ({ offerModal, toggleOfferModal, days, hours, minutes, remainingSeconds }) => {
    return (
        offerModal && (<div className="offer-modal">
            <X className="offer-close" onClick={toggleOfferModal} />
            <motion.div {...offerVariant} className="offer-content">
                <div className="p-3 border-b border-gray-200"><h2><strong>Fırsat Ürünleri</strong></h2></div>
                <div className="p-3 overflow-y-auto h-screen pb-3 mb-3">

                    <OfferItem days={days} hours={hours} minutes={minutes} remainingSeconds={remainingSeconds} />
                    <OfferItem days={days} hours={hours} minutes={minutes} remainingSeconds={remainingSeconds} />
                    <OfferItem days={days} hours={hours} minutes={minutes} remainingSeconds={remainingSeconds} />

                </div>
            </motion.div>
        </div>)
    )
}

export default OfferModal
