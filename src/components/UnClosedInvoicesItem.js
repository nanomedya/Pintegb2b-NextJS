import React from 'react';

const UnClosedInvoiceItem = ({ }) => {
    return (
        <div className="item shadow-sm border rounded border-light mb-3">
            <div className="p-3 border-bottom border-light">
                <h3><strong>1352134J</strong></h3>
            </div>
            <div className="p-3">
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom border-light mb-2">
                    <span className="fw-bold text-muted small">Adı</span>
                    <span className="small">Silindir Kapak Contası</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom border-light mb-2">
                    <span className="fw-bold text-muted small">Kampanya Kodu</span>
                    <span className="small">Remar Kampanyalı Ürünler</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom border-light mb-2">
                    <span className="fw-bold text-muted small">Minimum Adet</span>
                    <span className="small bg-success text-white px-2 py-1 rounded">1,00</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom border-light mb-2">
                    <span className="fw-bold text-muted small">Kampanya Fiyatı</span>
                    <span className="small">495,00 ₺</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom border-light mb-2">
                    <span className="fw-bold text-muted small">Kazancınız</span>
                    <span className="small">875,00 ₺</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom border-light mb-2">
                    <span className="fw-bold text-muted small">Kazancınız</span>
                    <span className="small">875,00 ₺</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom border-light mb-2">
                    <span className="fw-bold text-muted small">Kampanyalı Kalan Ürün Miktarı</span>
                    <span className="small bg-success text-white px-2 py-1 rounded">12,00</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 mb-2">
                    <span className="fw-bold text-muted small">Açıklama</span>
                    <span className="small"></span>
                </div>
            </div>
        </div>
    );
}

export default UnClosedInvoiceItem;
