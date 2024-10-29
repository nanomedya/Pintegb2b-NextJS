import { Tooltip } from "antd"
import { Image, ShoppingCart } from "react-feather"
import { Input } from "@nextui-org/react"
import { imgProp } from "../Items/toolViewer"

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