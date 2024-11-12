import { Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import React from 'react'
import Purchases from './PopupModels/purchases'
import Alternative from './PopupModels/alternative'
import GeneralInfo from './PopupModels/generalInfo'
import OemCodes from './PopupModels/oemCodes'
import CompetitorCodes from './PopupModels/competitorCodes'
import Car from './PopupModels/car'
import Oem from './PopupModels/oem'
import CompetitorCode from './PopupModels/competitorCode'
import Brand from './PopupModels/brand'

const ProductModal = ({ modalId, isOpen, setIsOpen, setActiveTab, activeTab }) => {
    return (
        <Modal size="xl" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} className='modal-dialog-centered'>
            {modalId === 1 ? <>
                <ModalHeader toggle={() => setIsOpen(!isOpen)} className="text-warning">Deneme Ürün</ModalHeader>
                <ModalBody>
                    <div className="w-100 d-flex justify-content-start">
                        <div onClick={() => setActiveTab(1)} className={`border border-success ${activeTab === 1 ? "bg-success" : ""} ${activeTab === 1 ? "text-white" : "text-success"} cursor-pointer hover-shadow rounded px-2 py-1 me-1`}>Önceki Alımlar</div>
                        <div onClick={() => setActiveTab(2)} className={`border border-success ${activeTab === 2 ? "bg-success" : ""} ${activeTab === 2 ? "text-white" : "text-success"} cursor-pointer hover-shadow rounded px-2 py-1 me-1`}>Alternatifler</div>
                        <div onClick={() => setActiveTab(3)} className={`border border-success ${activeTab === 3 ? "bg-success" : ""} ${activeTab === 3 ? "text-white" : "text-success"} cursor-pointer hover-shadow rounded px-2 py-1 me-1`}>Genel Bilgiler</div>
                        <div onClick={() => setActiveTab(4)} className={`border border-success ${activeTab === 4 ? "bg-success" : ""} ${activeTab === 4 ? "text-white" : "text-success"} cursor-pointer hover-shadow rounded px-2 py-1 me-1`}>Oem Kodlar</div>
                        <div onClick={() => setActiveTab(5)} className={`border border-success ${activeTab === 5 ? "bg-success" : ""} ${activeTab === 5 ? "text-white" : "text-success"} cursor-pointer hover-shadow rounded px-2 py-1 me-1`}>Rakip Kodlar</div>
                        <div onClick={() => setActiveTab(6)} className={`border border-success ${activeTab === 6 ? "bg-success" : ""} ${activeTab === 6 ? "text-white" : "text-success"} cursor-pointer hover-shadow rounded px-2 py-1 me-1`}>Araç</div>
                        <div onClick={() => setActiveTab(7)} className={`border border-success ${activeTab === 7 ? "bg-success" : ""} ${activeTab === 7 ? "text-white" : "text-success"} cursor-pointer hover-shadow rounded px-2 py-1 me-1`}>Oem</div>
                        <div onClick={() => setActiveTab(8)} className={`border border-success ${activeTab === 8 ? "bg-success" : ""} ${activeTab === 8 ? "text-white" : "text-success"} cursor-pointer hover-shadow rounded px-2 py-1 me-1`}>Rakip Kod</div>
                        <div onClick={() => setActiveTab(9)} className={`border border-success ${activeTab === 9 ? "bg-success" : ""} ${activeTab === 9 ? "text-white" : "text-success"} cursor-pointer hover-shadow rounded px-2 py-1 me-1`}>Markalar</div>
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
                    <ButtonGroup className="d-flex justify-content-end mt-3">
                        <Button className="text-warning border border-warning bg-white" onClick={() => setIsOpen(!isOpen)}>Kapat</Button>
                        <Button color="warning" className="text-white" onClick={() => setIsOpen(!isOpen)}>Sepete Ekle</Button>
                    </ButtonGroup>
                </ModalBody>
            </> : null}
            {
                modalId === 2 ?
                    <>
                        <ModalHeader className="d-flex flex-column gap-1 text-warning">Alternatif Ürünler</ModalHeader>
                        <Alternative />
                    </>
                    : null
            }
        </Modal>
    )
}

export default ProductModal
