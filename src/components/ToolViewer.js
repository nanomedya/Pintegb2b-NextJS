export const imgProp = (img) => {
    return (
        <div>
            <img src={img} alt="" style={{ width: 150, height: 150 }} />
        </div>
    )
}

export const offerProp = () => {
    return (
        <div className="p-3">
            <div className="bg-warning p-2 rounded-xl"><h5>Son Alış Fiyatınız</h5></div>
            <div className="mt-2"><strong>Tarih: </strong><span>12.12.2020</span></div>
            <div className="mt-2"><strong>Satın alınan adet: </strong><span>3</span></div>
            <div className="mt-2"><strong>KDV'siz adet fiyatı: </strong><span>3040 ₺</span></div>
            <div className="mt-2 text-warning"><strong>KDV'li adet fiyatı: </strong><span>3040 ₺</span></div>
        </div>
    )
}

export const infoProp = () => {
    return (
        <div className="p-3">
            <div className="bg-warning p-2 rounded-xl"><h5>Kapı Cam Fitili</h5></div>
            <div className="mt-2"><strong>Kodu: </strong><span>XF53FG</span></div>
            <div className="mt-2"><strong>Satın alınan adet: </strong><span>3</span></div>
            <div className="mt-2"><strong>KDV'siz adet fiyatı: </strong><span>3040 ₺</span></div>
            <div className="mt-2 text-warning"><strong>KDV'li adet fiyatı: </strong><span>3040 ₺</span></div>
        </div>
    )
}

export const priceInfoProp = () => {
    return (
        <div className="p-3">
            <div className="bg-warning p-2 rounded-xl"><h5>Fiyat Bilgileri</h5></div>
            <div className="mt-2"><strong>Satın alınan adet: </strong><span>3</span></div>
            <div className="mt-2"><strong>KDV'siz adet fiyatı: </strong><span>3040 ₺</span></div>
            <div className="mt-2 text-warning"><strong>KDV'li adet fiyatı: </strong><span>3040 ₺</span></div>
        </div>
    )
}

export const discountIncludeInfo = () => {
    return (
        <div className="p-3">
            <div className="bg-warning p-2 rounded-xl"><h5>Fiyat Bilgileri</h5></div>
            <div className="mt-2"><strong>Perakende Fiyatı KDVli: </strong><span>1.434,54 ₺</span></div>
            <div className="mt-2"><strong>Havale Fiyatı KDV Dahil: </strong><span>1.234,42 ₺</span></div>
            <div className="mt-2"><strong>K.K Tek Çekim KDV Dahil: </strong><span>1.156,47 ₺</span></div>
            <div className="mt-2"><strong>K.K Taksitli KDV Dahil: </strong><span>1.256,22 ₺</span></div>
        </div>
    )
}