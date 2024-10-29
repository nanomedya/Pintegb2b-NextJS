import { Input } from '@nextui-org/react'
import React from 'react'
import { ShoppingCart } from 'react-feather'

const OfferItem = ({ days, hours, minutes, remainingSeconds }) => {
    return (
        <div className="item shadow border rounded border border-gray-200 mb-3">
            <div className="p-3 border-b border-gray-200"><h3><strong>1352134J</strong></h3></div>
            <div className="p-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-2"><span className="font-bold text-xs">Adı</span><span className="text-xs">Silindir Kapak Contası</span></div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-2"><span className="font-bold text-xs">Kampanya Kodu</span><span className="text-xs">Remar Kampanyalı Ürünler</span></div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-2"><span className="font-bold text-xs">Minimum Adet</span><span className="text-xs bg-success text-white p-1">1,00</span></div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-2"><span className="font-bold text-xs">Kampanya Fiyatı</span><span className="text-xs">495,00 ₺</span></div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-2"><span className="font-bold text-xs">Kazancınız</span><span className="text-xs">875,00 ₺</span></div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-2"><span className="font-bold text-xs">Kazancınız</span><span className="text-xs">875,00 ₺</span></div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-2"><span className="font-bold text-xs">Kampanyalı Kalan Ürün Miktarı</span><span className="text-xs bg-success text-white p-1">12,00</span></div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-2"><span className="font-bold text-xs">Açıklama</span><span className="text-xs"></span></div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-2">
                    <span className="font-bold text-xs">Kalan Süre</span>
                    <span className="flex justify-end">
                        <span className="text-xs shadow border rounded border-gray-100 p-1">{days}</span><span className="mx-1">:</span>
                        <span className="text-xs shadow border rounded border-gray-100 p-1">{hours}</span><span className="mx-1">:</span>
                        <span className="text-xs shadow border rounded border-gray-100 p-1">{minutes}</span><span className="mx-1">:</span>
                        <span className="text-xs shadow border rounded border-gray-100 p-1">{remainingSeconds}</span>
                    </span>
                </div>
                <div className="flex justify-between items-center pb-2 mb-2">
                    <span className="font-bold text-xs"></span>
                    <span className="flex justify-end">
                        <Input defaultValue={3} type="number" style={{ width: 70, height: 20 }} />
                        <ShoppingCart className="bg-success text-white p-2 rounded-xl" size={40} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OfferItem
