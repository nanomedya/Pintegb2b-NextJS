import { Input } from 'reactstrap'
import React from 'react'
import { ShoppingCart } from 'react-feather'

const OfferItem = ({ days, hours, minutes, remainingSeconds }) => {
    return (
        <div className="item shadow border rounded border border-gray-200 mb-3">
            <div className="p-3 border-bottom">
                <h3><strong>1352134J</strong></h3>
            </div>
            <div className="p-3">
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                    <span className="font-weight-bold small">Adı</span>
                    <span className="small">Silindir Kapak Contası</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                    <span className="font-weight-bold small">Kampanya Kodu</span>
                    <span className="small">Remar Kampanyalı Ürünler</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                    <span className="font-weight-bold small">Minimum Adet</span>
                    <span className="small bg-success text-white p-1">1,00</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                    <span className="font-weight-bold small">Kampanya Fiyatı</span>
                    <span className="small">495,00 ₺</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                    <span className="font-weight-bold small">Kazancınız</span>
                    <span className="small">875,00 ₺</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                    <span className="font-weight-bold small">Kazancınız</span>
                    <span className="small">875,00 ₺</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                    <span className="font-weight-bold small">Kampanyalı Kalan Ürün Miktarı</span>
                    <span className="small bg-success text-white p-1">12,00</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                    <span className="font-weight-bold small">Açıklama</span>
                    <span className="small"></span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-2">
                    <span className="font-weight-bold small">Kalan Süre</span>
                    <span className="d-flex justify-content-end">
                        <span className="small shadow border rounded border-gray-100 p-1">{days}</span><span className="mx-1">:</span>
                        <span className="small shadow border rounded border-gray-100 p-1">{hours}</span><span className="mx-1">:</span>
                        <span className="small shadow border rounded border-gray-100 p-1">{minutes}</span><span className="mx-1">:</span>
                        <span className="small shadow border rounded border-gray-100 p-1">{remainingSeconds}</span>
                    </span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 mb-2">
                    <span className="font-weight-bold small"></span>
                    <span className="d-flex justify-content-end">
                        <Input defaultValue={3} type="number" style={{ width: 70, height: 20 }} />
                        <ShoppingCart className="bg-success text-white p-2 rounded-xl" size={40} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OfferItem
