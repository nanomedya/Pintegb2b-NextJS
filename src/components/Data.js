import img1 from '../images/c1.png'
import img2 from '../images/c2.png'
import img3 from '../images/c3.png'
import img4 from '../images/c4.png'
import img5 from '../images/c5.png'

export const DATA = [
    { "logo": img1, "piece": 1, "kdvSurprize": false, "discount": "", "isNot": true, "offer": false, "cityStatus": true, "city": "Ankara", "productID": 1, "title": "Deneme", "code": "XF53FG", "name": "Deneme Ürün", "stock": 145, "price": 1305 },
    { "logo": img2, "piece": 2, "kdvSurprize": true, "discount": "10+6", "isNot": false, "offer": true, "cityStatus": false, "city": "İstanbul", "productID": 2, "title": "Deneme2", "code": "XF53FG", "name": "Deneme Ürün2", "stock": 145, "price": 1305 },
    { "logo": img3, "piece": 3, "kdvSurprize": false, "discount": "", "isNot": true, "offer": false, "cityStatus": true, "city": "İzmir", "productID": 3, "title": "Deneme3", "code": "XF53FG", "name": "Deneme Ürün3", "stock": 145, "price": 1305 },
    { "logo": img4, "piece": 4, "kdvSurprize": true, "discount": "", "isNot": false, "offer": true, "cityStatus": false, "city": "Ankara", "productID": 4, "title": "Deneme4", "code": "XF53FG", "name": "Deneme Ürün4", "stock": 145, "price": 1305 },
    { "logo": img5, "piece": 5, "kdvSurprize": false, "discount": "20+2", "isNot": true, "offer": false, "cityStatus": true, "city": "İstanbul", "productID": 5, "title": "Deneme5", "code": "XF53FG", "name": "Deneme Ürün5", "stock": 145, "price": 1305 },
]

export const ORDERDATA = [
    { "id": 1, "logo": img1, "salesPrice": 542.45, "netPrice": 230.30, "discount": 234.00, "orderStatus": true, "piece": 1, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM234234234", "kdvSurprize": false, "isNot": true, "offer": false, "cityStatus": true, "city": "Ankara", "productID": 1, "title": "Deneme", "code": "SP-XF53FG", "name": "Deneme Ürün", "stock": 145, "price": 4565.00 },
    { "id": 2, "logo": img2, "salesPrice": 442.45, "netPrice": 123.50, "discount": 122.00, "orderStatus": false, "piece": 2, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM334234234", "kdvSurprize": true, "isNot": false, "offer": true, "cityStatus": false, "city": "İstanbul", "productID": 2, "title": "Deneme2", "code": "SP-XF53FG", "name": "Deneme Ürün2", "stock": 145, "price": 6305.00 },
    { "id": 3, "logo": img3, "salesPrice": 842.45, "netPrice": 596.40, "discount": 234.00, "orderStatus": true, "piece": 3, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM634234234", "kdvSurprize": false, "isNot": true, "offer": false, "cityStatus": true, "city": "İzmir", "productID": 3, "title": "Deneme3", "code": "SP-XF53FG", "name": "Deneme Ürün3", "stock": 145, "price": 2305.00 },
    { "id": 4, "logo": img4, "salesPrice": 942.45, "netPrice": 194.59, "discount": 542.00, "orderStatus": true, "piece": 4, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM734234234", "kdvSurprize": true, "isNot": false, "offer": true, "cityStatus": false, "city": "Ankara", "productID": 4, "title": "Deneme4", "code": "SP-XF53FG", "name": "Deneme Ürün4", "stock": 145, "price": 4305.00 },
    { "id": 5, "logo": img5, "salesPrice": 242.45, "netPrice": 542.45, "discount": 231.00, "orderStatus": false, "piece": 5, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM934234234", "kdvSurprize": false, "isNot": true, "offer": false, "cityStatus": true, "city": "İstanbul", "productID": 5, "title": "Deneme5", "code": "SP-XF53FG", "name": "Deneme Ürün5", "stock": 145, "price": 5305.00 },
]

export const MYBACKORDERDATA = [
    { "id": 1, "logo": img1, "salesPrice": 542.45, "netPrice": 230.30, "discount": 234.00, "orderStatus": true, "piece": 1, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM234234234", "kdvSurprize": false, "isNot": true, "offer": false, "cityStatus": true, "city": "Ankara", "productID": 1, "title": "Deneme", "code": "SP-XF53FG", "name": "Deneme Ürün", "stock": 145, "price": 4565.00 },
    { "id": 2, "logo": img2, "salesPrice": 442.45, "netPrice": 123.50, "discount": 122.00, "orderStatus": false, "piece": 2, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM334234234", "kdvSurprize": true, "isNot": false, "offer": true, "cityStatus": false, "city": "İstanbul", "productID": 2, "title": "Deneme2", "code": "SP-XF53FG", "name": "Deneme Ürün2", "stock": 145, "price": 6305.00 },
    { "id": 3, "logo": img3, "salesPrice": 842.45, "netPrice": 596.40, "discount": 234.00, "orderStatus": true, "piece": 3, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM634234234", "kdvSurprize": false, "isNot": true, "offer": false, "cityStatus": true, "city": "İzmir", "productID": 3, "title": "Deneme3", "code": "SP-XF53FG", "name": "Deneme Ürün3", "stock": 145, "price": 2305.00 },
    { "id": 4, "logo": img4, "salesPrice": 942.45, "netPrice": 194.59, "discount": 542.00, "orderStatus": true, "piece": 4, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM734234234", "kdvSurprize": true, "isNot": false, "offer": true, "cityStatus": false, "city": "Ankara", "productID": 4, "title": "Deneme4", "code": "SP-XF53FG", "name": "Deneme Ürün4", "stock": 145, "price": 4305.00 },
    { "id": 5, "logo": img5, "salesPrice": 242.45, "netPrice": 542.45, "discount": 231.00, "orderStatus": false, "piece": 5, "user": "Akbak Otomotiv - Mustafa AKBAY", "created": "Akbak Otomotiv - Mustafa AKBAY", "transferMes": "RM934234234", "kdvSurprize": false, "isNot": true, "offer": false, "cityStatus": true, "city": "İstanbul", "productID": 5, "title": "Deneme5", "code": "SP-XF53FG", "name": "Deneme Ürün5", "stock": 145, "price": 5305.00 },
]

export const INVOICESDATA = [
    { "id": 1, "invoiceNo": "RM3455353354", "invoiceDate": "13.10.2000", "maturityDate": "10.10.2024", "processType": "Toptan Satış", "description": "Aras kargo siparişi", "debt": 54.534, "willTake": 32.234, "balance": 13.234 },
    { "id": 2, "invoiceNo": "RM4555353354", "invoiceDate": "03.10.1993", "maturityDate": "30.10.2023", "processType": "Kredi Kartı", "description": "Aras kargo siparişi", "debt": 14.534, "willTake": 52.234, "balance": 53.234 },
    { "id": 3, "invoiceNo": "RM6755353354", "invoiceDate": "23.10.1996", "maturityDate": "23.10.2022", "processType": "Toptan Satış", "description": "Yurtiçi kargo siparişi", "debt": 44.534, "willTake": 32.234, "balance": 43.234 },
    { "id": 4, "invoiceNo": "RM8955353354", "invoiceDate": "14.10.1998", "maturityDate": "25.10.2021", "processType": "Kredi Kartı", "description": "Aras kargo siparişi", "debt": 15.534, "willTake": 12.234, "balance": 63.234 },
    { "id": 5, "invoiceNo": "RM3455353354", "invoiceDate": "16.10.1979", "maturityDate": "16.10.2022", "processType": "Toptan Satış", "description": "Mng kargo siparişi", "debt": 64.534, "willTake": 62.234, "balance": 43.234 },
    { "id": 6, "invoiceNo": "RM6255353354", "invoiceDate": "03.10.1949", "maturityDate": "14.10.2022", "processType": "Toptan Satış", "description": "Aras kargo siparişi", "debt": 34.534, "willTake": 72.234, "balance": 73.234 },
]

export const UNCLOSEDINVOICESDATA = [
    { "id": 1, "invoiceNo": "RM3455353354", "invoiceDate": "13.10.2000", "maturityDate": "10.10.2024", "processType": "Toptan Satış", "description": "Aras kargo siparişi", "debt": 54.534, "willTake": 32.234, "balance": 13.234 },
    { "id": 2, "invoiceNo": "RM4555353354", "invoiceDate": "03.10.1993", "maturityDate": "30.10.2023", "processType": "Kredi Kartı", "description": "Aras kargo siparişi", "debt": 14.534, "willTake": 52.234, "balance": 53.234 },
    { "id": 3, "invoiceNo": "RM6755353354", "invoiceDate": "23.10.1996", "maturityDate": "23.10.2022", "processType": "Toptan Satış", "description": "Yurtiçi kargo siparişi", "debt": 44.534, "willTake": 32.234, "balance": 43.234 },
    { "id": 4, "invoiceNo": "RM8955353354", "invoiceDate": "14.10.1998", "maturityDate": "25.10.2021", "processType": "Kredi Kartı", "description": "Aras kargo siparişi", "debt": 15.534, "willTake": 12.234, "balance": 63.234 },
    { "id": 5, "invoiceNo": "RM3455353354", "invoiceDate": "16.10.1979", "maturityDate": "16.10.2022", "processType": "Toptan Satış", "description": "Mng kargo siparişi", "debt": 64.534, "willTake": 62.234, "balance": 43.234 },
    { "id": 6, "invoiceNo": "RM6255353354", "invoiceDate": "03.10.1949", "maturityDate": "14.10.2022", "processType": "Toptan Satış", "description": "Aras kargo siparişi", "debt": 34.534, "willTake": 72.234, "balance": 73.234 },
]

export const alternativeDATA = [
    { "id": 1, "logo": img1, "code": "CAST-5003", "name": "Motor Yağı", "producer": "CASTROL", "oemNumber": 1204834, "discount": "40+2", "priceExculingVAT": 160.95, "priceIncludingVAT": 170.43, "unit": "AD", "familyName": "", "typeName": "", "storeStatus": true },
]

export const POPUPDATA = [
    { "id": 1, "date": "01.06.2020", "document": "RM4985839", "piece": 4.00, "unit": "AD", "unitPrice": 100.00, "total": 400.00, "isk1": 0.00, "isk2": 0.00, "isk3": 8.00, "isk4": 2.00, "kdvTotal": 12.00, "netPrice": 405.00, "netKdvPrice": 135.00, "netAmount": 195.00, "netAmountKdv": 195.00, "foreign": "TL" },
    { "id": 2, "date": "05.03.2023", "document": "RM5655835", "piece": 12.00, "unit": "AC", "unitPrice": 140.50, "total": 420.00, "isk1": 4.00, "isk2": 7.00, "isk3": 0.00, "isk4": 5.00, "kdvTotal": 56.00, "netPrice": 575.00, "netKdvPrice": 566.00, "netAmount": 532.00, "netAmountKdv": 155.00, "foreign": "USD" },
    { "id": 3, "date": "01.02.2024", "document": "RM4675847", "piece": 16.00, "unit": "AF", "unitPrice": 130.00, "total": 350.00, "isk1": 6.00, "isk2": 0.00, "isk3": 4.00, "isk4": 7.00, "kdvTotal": 74.00, "netPrice": 345.00, "netKdvPrice": 135.00, "netAmount": 753.00, "netAmountKdv": 185.00, "foreign": "EUR" },
]

export const OEMDATA = [
    { "id": 1, "field1": "34534533565" },
    { "id": 2, "field1": "65534533567" },
    { "id": 3, "field1": "78534533545" },
    { "id": 4, "field1": "23534533523" },
    { "id": 5, "field1": "57534533557" },
]

export const OEMCODESDATA = [
    { "id": 1, "field1": "74534533565" },
    { "id": 2, "field1": "55534533567" },
    { "id": 3, "field1": "28534533545" },
    { "id": 4, "field1": "63534533523" },
    { "id": 5, "field1": "97534533557" },
]

export const COMPETITORCODEDATA = [
    { "id": 1, "field1": "24534533565" },
    { "id": 2, "field1": "15534533567" },
    { "id": 3, "field1": "48534533545" },
    { "id": 4, "field1": "53534533523" },
    { "id": 5, "field1": "77534533557" },
]

export const COMPETITORCODESDATA = [
    { "id": 1, "field1": "23434533565" },
    { "id": 2, "field1": "65534533567" },
    { "id": 3, "field1": "78534533545" },
    { "id": 4, "field1": "93534533523" },
    { "id": 5, "field1": "07534533557" },
]

export const CARDATA = [
    { "id": 1, "field1": "Mercedes" },
    { "id": 2, "field1": "Audi" },
    { "id": 3, "field1": "Bmw" },
    { "id": 4, "field1": "Seat" },
    { "id": 5, "field1": "Skoda" },
]

export const BRANDDATA = [
    { "id": 1, "field1": "CLA" },
    { "id": 2, "field1": "A4" },
    { "id": 3, "field1": "520D" },
    { "id": 4, "field1": "Leon" },
    { "id": 5, "field1": "Super B" },
]

export const SINGLEALTERNATIVEDATA = [
    { "id": 1, "code": "CAST-234", "name": "" },
]

export const images = [
    {
        title: "Haberler",
        src: img1,
        link: "/pages/news",
    },
    {
        title: "Duyurular",
        src: img2,
        link: "/pages/notice",
    },
    {
        title: "Yeni Ürünler",
        src: img3,
        link: "/pages/new-product",
    },
    {
        title: "Bugünün Ürünleri",
        src: img4,
        link: "/pages/today-product",
    },
    {
        title: "Favori Ürünlerim",
        src: img5,
        link: "/pages/favorite-product",
    },
]

export const banks = [
    {
        title: "Garanti",
    },
    {
        title: "Akbank",
    },
    {
        title: "Yapı Kredi",
    },
    {
        title: "Kuveyttürk",
    },
    {
        title: "Ziraat Bankası",
    },
    {
        title: "İş Bankası",
    },
]