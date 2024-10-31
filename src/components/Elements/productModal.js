import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import Purchases from '../Items/PopupModels/purchases'
import Alternative from '../Items/PopupModels/alternative'
import GeneralInfo from '../Items/PopupModels/generalInfo'
import Oem from '../Items/PopupModels/oem'
import Car from '../Items/PopupModels/car'
import Brand from '../Items/PopupModels/brand'
import CompetitorCode from '../Items/PopupModels/competitorCode'
import CompetitorCodes from '../Items/PopupModels/competitorCodes'
import OemCodes from '../Items/PopupModels/oemCodes'

const ProductModal = ({ modalId, isOpen, onClose, onOpenChange, setActiveTab, activeTab }) => {
    return (
        <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {modalId === 1 ? <>
                    <ModalHeader className="flex flex-col gap-1 text-warning">Deneme Ürün</ModalHeader>
                    <ModalBody>
                        <div className="w-full flex justify-start">
                            <div onClick={() => setActiveTab(1)} className={`border border-succcess ${activeTab === 1 ? "bg-success" : null} ${activeTab === 1 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Önceki Alımlar</div>
                            <div onClick={() => setActiveTab(2)} className={`border border-succcess ${activeTab === 2 ? "bg-success" : null} ${activeTab === 2 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Alternatifler</div>
                            <div onClick={() => setActiveTab(3)} className={`border border-succcess ${activeTab === 3 ? "bg-success" : null} ${activeTab === 3 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Genel Bilgiler</div>
                            <div onClick={() => setActiveTab(4)} className={`border border-succcess ${activeTab === 4 ? "bg-success" : null} ${activeTab === 4 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Oem Kodlar</div>
                            <div onClick={() => setActiveTab(5)} className={`border border-succcess ${activeTab === 5 ? "bg-success" : null} ${activeTab === 5 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Rakip Kodlar</div>
                            <div onClick={() => setActiveTab(6)} className={`border border-succcess ${activeTab === 6 ? "bg-success" : null} ${activeTab === 6 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Araç</div>
                            <div onClick={() => setActiveTab(7)} className={`border border-succcess ${activeTab === 7 ? "bg-success" : null} ${activeTab === 7 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Oem</div>
                            <div onClick={() => setActiveTab(8)} className={`border border-succcess ${activeTab === 8 ? "bg-success" : null} ${activeTab === 8 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Rakip Kod</div>
                            <div onClick={() => setActiveTab(9)} className={`border border-succcess ${activeTab === 9 ? "bg-success" : null} ${activeTab === 9 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Markalar</div>
                        </div>
                        {activeTab === 1 ? <Purchases /> : null}
                        {activeTab === 2 ? <Alternative /> : null}
                        {activeTab === 3 ? <GeneralInfo /> : null}
                        {activeTab === 4 ? <OemCodes /> : null}
                        {activeTab === 5 ? <CompetitorCodes /> : null}
                        {activeTab === 6 ? <Car /> : null}
                        {activeTab === 7 ? <Oem /> : null}
                        {activeTab === 8 ? <CompetitorCode /> : null}
                        {activeTab === 9 ? <Brand /> : null}
                    </ModalBody>
                    <ModalFooter className="flex justify-end">
                        <Button className="text-warning border border-warning bg-white" onPress={onClose}>Kapat</Button>
                        <Button color="warning" className="text-white" onPress={onClose}>Sepete Ekle</Button>
                    </ModalFooter>
                </> : null}
                {
                    modalId === 2 ?
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-warning">Alternatif Ürünler</ModalHeader>
                            <Alternative />
                        </>
                        : null
                }
            </ModalContent>
        </Modal>
    )
}

export default ProductModal
