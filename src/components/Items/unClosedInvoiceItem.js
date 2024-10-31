import React from 'react'

const UnClosedInvoiceItem = ({ }) => {
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
                <div className="flex justify-between items-center pb-2 mb-2"><span className="font-bold text-xs">Açıklama</span><span className="text-xs"></span></div>
            </div>
        </div>
    )
}

export default UnClosedInvoiceItem
