import React, { useEffect, useState } from 'react'
import Pinteg from '../../components/Pinteg'
import Stories from '../../components/Stories'
import Searchs from '../../components/Search'
import Products from '../../components/Products'
import OfferModal from '../../components/OfferModal'
import ProductModal from '../../components/ProductModal'

const ProductPage = () => {
    const [modalId, setModalId] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const [offerModal, setOfferModal] = useState(false)
    const [seconds, setSeconds] = useState(223235);
    const [activeTab, setActiveTab] = useState(1);
    const toggleOfferModal = () => setOfferModal(!offerModal)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const days = Math.floor(seconds / (24 * 60 * 60)).toString().length === 1 ? `0${Math.floor(seconds / (24 * 60 * 60))}` : Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600).toString().length === 1 ? `0${Math.floor((seconds % (24 * 60 * 60)) / 3600)}` : Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60).toString().length === 1 ? `0${Math.floor((seconds % 3600) / 60)}` : Math.floor((seconds % 3600) / 60);
    const remainingSeconds = (seconds % 60).toString().length === 1 ? `0${seconds % 60}` : seconds % 60;

    return (
        <Pinteg>
            <Stories />
            <Searchs />
            <Products
                setModalId={setModalId}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleOfferModal={toggleOfferModal}
            />

            <OfferModal
                offerModal={offerModal}
                toggleOfferModal={toggleOfferModal}
                days={days}
                hours={hours}
                minutes={minutes}
                remainingSeconds={remainingSeconds}
            />

            <ProductModal
                modalId={modalId}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />
        </Pinteg>
    )
}

export default ProductPage
