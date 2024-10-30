import { Dropdown, Tooltip, Button as Button2 } from "antd"
import { AlignJustify, Eye, Image, Info, RefreshCcw, ShoppingCart, Star, Truck } from "react-feather"
import { Input } from "@nextui-org/react"
import { discountIncludeInfo, imgProp, infoProp, offerProp } from "../Items/toolViewer"
import { editMenu } from "./editMenu"

export const popupColumns = [
    {
        title: "Tarih",
        key: "date",
        width: 100,
        dataIndex: "date",
    },
    {
        title: "Belge No",
        key: "document",
        width: 100,
        dataIndex: "document",
    },
    {
        title: "Miktar",
        key: "piece",
        width: 50,
        dataIndex: "piece",
    },
    {
        title: "Birim",
        key: "unit",
        width: 50,
        dataIndex: "unit",
    },
    {
        title: "Birim Fiyat",
        key: "unitPrice",
        width: 50,
        dataIndex: "unit",
    },
    {
        title: "Toplam",
        key: "total",
        width: 50,
        dataIndex: "total",
    },
    {
        title: "Isk.1",
        key: "isk1",
        width: 50,
        dataIndex: "isk1",
    },
    {
        title: "Isk.2",
        key: "isk2",
        width: 50,
        dataIndex: "isk2",
    },
    {
        title: "Isk.3",
        key: "isk3",
        width: 50,
        dataIndex: "isk3",
    },
    {
        title: "Isk.4",
        key: "isk4",
        width: 50,
        dataIndex: "isk4",
    },
    {
        title: "KDV Tutar",
        key: "kdvTotal",
        width: 50,
        dataIndex: "kdvTotal",
    },
    {
        title: "Net Fiyat",
        key: "netPrice",
        width: 50,
        dataIndex: "netPrice",
    },
    {
        title: "Net KDV Fiyat",
        key: "netKdvPrice",
        width: 50,
        dataIndex: "netKdvPrice",
    },
    {
        title: "Net Tutar",
        key: "netAmount",
        width: 50,
        dataIndex: "netAmount",
    },
    {
        title: "Net Tutar KDV",
        key: "netAmountKdv",
        width: 50,
        dataIndex: "netAmountKdv",
    },
    {
        title: "Döviz",
        key: "foreign",
        width: 50,
        dataIndex: "foreign",
    },
]

export const alternativeColumns = [
    {
        title: <div className="flex justify-center"><Image size={15} /></div>,
        key: "id",
        width: 70,
        render: (e) => <Tooltip title={() => imgProp(e.logo)}><img src={e.logo} alt="" style={{ width: 50 }} /></Tooltip>
    },
    {
        title: "Kodu",
        key: "code",
        width: 100,
        dataIndex: "code",
    },
    {
        title: "Adı",
        key: "name",
        width: 100,
        dataIndex: "name",
    },
    {
        title: "Üretici",
        key: "producer",
        width: 100,
        dataIndex: "producer",
    },
    {
        title: "Üretici Kodu",
        key: "producerCode",
        width: 100,
        dataIndex: "producerCode",
    },
    {
        title: "İskonto",
        key: "discount",
        width: 100,
        dataIndex: "discount",
    },
    {
        title: "İskonto",
        key: "discount",
        width: 100,
        dataIndex: "discount",
    },
    {
        title: "KDV Dahil Fiyat",
        key: "discount",
        width: 100,
        dataIndex: "discount",
    },
    {
        title: "Birim",
        key: "unit",
        dataIndex: "unit",
    },
    {
        title: "Parça Aile Adı",
        key: "familyName",
        width: 100,
        dataIndex: "familyName",
    },
    {
        title: "Parça Tip Adı",
        key: "typeName",
        width: 100,
        dataIndex: "typeName",
    },
    {
        title: "Depo Durumu",
        key: "storeStatus",
        width: 50,
        render: (e) => e.storeStatus ? <div className="bg-success text-center text-white px-1 rounded">Var</div> : <div className="bg-danger text-white px-1 rounded">Var</div>
    },
    {
        title: <div className="flex justify-center"><ShoppingCart size={15} /></div>,
        key: "storeStatus",
        width: 100,
        render: (e) => <div className="flex justify-center items-center"><Input type="number" defaultValue={3} style={{ width: 100, height: 20 }} /><ShoppingCart className="bg-success text-white p-1 ml-1 rounded" /></div>
    },
]

export const oemColumns = [
    {
        title: "",
        width: 50,
        key: "field1",
    },
    {
        title: "Alan-1",
        key: "field1",
        dataIndex: "field1",
    },
]

export const columns = ({ setModalId, onOpen, toggleOfferModal }) => [
    {
        title: <div className="w-100 flex justify-center"><Image size={15} /></div>,
        key: "productID",
        width: 70,
        render: (e) => <Tooltip className="cursor-pointer" title={() => imgProp(e.logo)}><img src={e.logo} alt="" style={{ width: 50 }} /></Tooltip>
    },
    {
        title: <div className="w-100 flex justify-center"><Info size={15} /></div>,
        key: "productID",
        width: 40,
        render: (e) => <Tooltip className="cursor-pointer" title={infoProp}><div><Info size={15} /></div></Tooltip>
    },
    {
        title: <div className="w-100 flex justify-center"><Eye size={15} /></div>,
        key: "productID",
        width: 40,
        render: (e) => <div className="cursor-pointer" onClick={() => { setModalId(1); onOpen() }}><Eye size={15} /></div>
    },
    {
        title: <div className="w-100 flex justify-center"><Truck size={15} /></div>,
        key: "productID",
        width: 30,
        render: (e) => <div className={e.cityStatus ? "bg-success rounded px-2 py-1 text-white text-center" : "bg-danger rounded px-2 py-1 text-white text-center"}>{e.city}</div>
    },
    {
        title: "Kodu",
        key: "code",
        render: (e) => <span className="text-gray-500 font-sans">{e.code}</span>
    },
    {
        title: "Adı",
        key: "name",
        render: (e) => <div>
            <div><span className="text-gray-500 font-sans">{e.name}</span></div>
            <div className="flex justify-start items-center">
                {e.offer ? <div onClick={toggleOfferModal} className="bg-success cursor-pointer text-white rounded px-1 text-center mt-1">Kampanya</div> : null}
                <div onClick={() => { setModalId(2); onOpen() }} className="cursor-pointer bg-primary text-white rounded font-bold px-1 mt-1 ml-1">A</div>
            </div>
        </div>
    },
    {
        title: "Üretici",
        key: "code",
        render: (e) => <span className="text-gray-500 font-sans">{e.code}</span>
    },
    {
        title: "Oem No",
        key: "code",
        render: (e) => <span className="text-gray-500 font-sans">{e.code}</span>
    },
    {
        title: "İzmir",
        key: "stock",
        width: 40,
        render: (e) => <div style={{ width: 40 }} className={e.isNot ? "bg-success text-white p-1 rounded-xl text-center" : "bg-danger rounded-xl text-white p-1 text-center"}><span className="text-white font-sans">{e.isNot ? "Var" : "Yok"}</span></div>
    },
    {
        title: "Ankara",
        key: "price",
        width: 40,
        render: (e) => <div style={{ width: 40 }} className={e.isNot ? "bg-success text-white p-1 rounded-xl text-center" : "bg-danger rounded-xl text-white p-1 text-center"}><span className="text-white font-sans">{e.isNot ? "Var" : "Yok"}</span></div>
    },
    {
        title: "İstanbul",
        key: "title",
        width: 40,
        render: (e) => <div style={{ width: 40 }} className={e.isNot ? "bg-success text-white p-1 rounded-xl text-center" : "bg-danger rounded-xl text-white p-1 text-center"}><span className="text-white font-sans">{e.isNot ? "Var" : "Yok"}</span></div>
    },
    {
        title: "1. Sanayi",
        key: "name",
        width: 40,
        render: (e) => <div style={{ width: 40 }} className={e.isNot ? "bg-success text-white p-1 rounded-xl text-center" : "bg-danger rounded-xl text-white p-1 text-center"}><span className="text-white font-sans">{e.isNot ? "Var" : "Yok"}</span></div>
    },
    {
        title: "Ted",
        key: "title",
        width: 40,
        render: (e) => <div style={{ width: 40 }} className={e.isNot ? "bg-success text-white p-1 rounded-xl text-center" : "bg-danger rounded-xl text-white p-1 text-center"}><span className="text-white font-sans">{e.isNot ? "Var" : "Yok"}</span></div>
    },
    {
        title: "İskonto",
        key: "discount",
        width: 40,
        render: (e) => <div className="bg-warning rounded text-white text-center">{e.discount === "" ? "" : e.discount}</div>
    },
    {
        title: "Kdv Hariç Fiyatı ₺",
        key: "price",
        width: 100,
        render: (e) => <div className="w-full cursor-pointer">{e.kdvSurprize ? <div className="w-full flex justify-end"><Tooltip title={offerProp}><Star color="red" size={15} /></Tooltip></div> : false}<div className="w-full flex justify-end mr-2">{e.price} ₺</div></div>
    },
    {
        title: "Kdv Dahil Fiyatı ₺",
        key: "price",
        width: 100,
        render: (e) => <Tooltip className="cursor-pointer" title={discountIncludeInfo}><span className="text-gray-500 font-sans">{e.price} ₺</span></Tooltip>
    },
    {
        title: "Kdv'li Toplam Satış Fiyatı ₺",
        key: "price",
        width: 100,
        render: (e) => <span className="text-gray-500 font-sans">{e.price} ₺</span>
    },
    {
        title: "Miktar",
        key: "price",
        width: 150,
        render: (e) => <div className="flex justify-center"><Input type="number" defaultValue={e.piece} style={{ width: 50 }} /><div className="flex justify-center rounded bg-primary text-white items-center" style={{ width: 36, height: 36 }}><RefreshCcw className="cursor-pointer" size={15} /></div></div>
    },
    {
        title: "İşlemler",
        width: 100,
        render: (e) => (
            <div className='flex justify-start'>
                <div className='ml-2'>
                    <Dropdown overlay={editMenu} trigger={['click']}>
                        <Tooltip title="Seçenekler">
                            <Button2 icon={<AlignJustify size={20} className='text-warning' />} />
                        </Tooltip>
                    </Dropdown>
                </div>
                <div className='ml-2'>
                    <Tooltip title="Sepete Ekle">
                        <Button2 icon={<ShoppingCart size={20} className='text-success' />} />
                    </Tooltip>
                </div>
            </div>
        )
    }
]