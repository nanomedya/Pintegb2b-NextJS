"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import { Table, Tooltip, Button as Button2, Popconfirm, Menu, Dropdown } from "antd";
import { list, carsGroup } from "@/app/data/search_data";
import { Circle, Edit2, Info, RefreshCcw, Search, Star, Trash2, Truck } from "react-feather";
import { Button, Checkbox, Input, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";

export default function Product() {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

  const images = [
    {
      title: "Haberler",
      src: "/items/c1.png",
      link: "/pages/news",
    },
    {
      title: "Duyurular",
      src: "/items/c2.png",
      link: "/pages/notice",
    },
    {
      title: "Yeni Ürünler",
      src: "/items/c3.png",
      link: "/pages/new-product",
    },
    {
      title: "Bugünün Ürünleri",
      src: "/items/c4.png",
      link: "/pages/today-product",
    },
    {
      title: "Favori Ürünlerim",
      src: "/items/c5.png",
      link: "/pages/favorite-product",
    },
  ]

  const DATA = [
    { "logo": "/items/c1.png", "piece": 1, "kdvSurprize": false, "discount": "", "isNot": true, "offer": false, "cityStatus": true, "city": "Ankara", "productID": 1, "title": "Deneme", "code": "XF53FG", "name": "Deneme Ürün", "stock": 145, "price": 1305 },
    { "logo": "/items/c2.png", "piece": 2, "kdvSurprize": true, "discount": "10+6", "isNot": false, "offer": true, "cityStatus": false, "city": "İstanbul", "productID": 2, "title": "Deneme2", "code": "XF53FG", "name": "Deneme Ürün2", "stock": 145, "price": 1305 },
    { "logo": "/items/c3.png", "piece": 3, "kdvSurprize": false, "discount": "", "isNot": true, "offer": false, "cityStatus": true, "city": "İzmir", "productID": 3, "title": "Deneme3", "code": "XF53FG", "name": "Deneme Ürün3", "stock": 145, "price": 1305 },
    { "logo": "/items/c4.png", "piece": 4, "kdvSurprize": true, "discount": "", "isNot": false, "offer": true, "cityStatus": false, "city": "Ankara", "productID": 4, "title": "Deneme4", "code": "XF53FG", "name": "Deneme Ürün4", "stock": 145, "price": 1305 },
    { "logo": "/items/c5.png", "piece": 5, "kdvSurprize": false, "discount": "20+2", "isNot": true, "offer": false, "cityStatus": true, "city": "İstanbul", "productID": 5, "title": "Deneme5", "code": "XF53FG", "name": "Deneme Ürün5", "stock": 145, "price": 1305 },
  ]

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const infoProp = () => {
    return (
      <div className="p-3">
        <div className="bg-warning p-2 rounded-xl"><h3>Kapı Cam Fitili</h3></div>
        <div className="mt-2"><strong>Kodu: </strong><span>XF53FG</span></div>
        <div className="mt-2"><strong>Satın alınan adet: </strong><span>3</span></div>
        <div className="mt-2"><strong>KDV'siz adet fiyatı: </strong><span>3040 ₺</span></div>
        <div className="mt-2 text-warning"><strong>KDV'li adet fiyatı: </strong><span>3040 ₺</span></div>
      </div>
    )
  }

  const priceInfoProp = () => {
    return (
      <div className="p-3">
        <div className="bg-warning p-2 rounded-xl"><h3>Fiyat Bilgileri</h3></div>
        <div className="mt-2"><strong>Satın alınan adet: </strong><span>3</span></div>
        <div className="mt-2"><strong>KDV'siz adet fiyatı: </strong><span>3040 ₺</span></div>
        <div className="mt-2 text-warning"><strong>KDV'li adet fiyatı: </strong><span>3040 ₺</span></div>
      </div>
    )
  }

  const offerProp = () => {
    return (
      <div className="p-3">
        <div className="bg-warning p-2 rounded-xl"><h3>Son Alış Fiyatınız</h3></div>
        <div className="mt-2"><strong>Tarih: </strong><span>12.12.2020</span></div>
        <div className="mt-2"><strong>Satın alınan adet: </strong><span>3</span></div>
        <div className="mt-2"><strong>KDV'siz adet fiyatı: </strong><span>3040 ₺</span></div>
        <div className="mt-2 text-warning"><strong>KDV'li adet fiyatı: </strong><span>3040 ₺</span></div>
      </div>
    )
  }

  const editMenu = (
    <Menu>
      <Menu.Item key="1"><Circle size={13} className="mr-2" /> Takip Et</Menu.Item>
      <Menu.Item key="2"><Circle size={13} className="mr-2" /> Karşılaştırmaya Ekle</Menu.Item>
      <Menu.Item key="3"><Circle size={13} className="mr-2" /> Transfer Et</Menu.Item>
      <Menu.Item key="4"><Circle size={13} className="mr-2" /> Fiyat Karşılaştır</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: <div className="w-100 flex justify-center"><Info size={15} /></div>,
      key: "productID",
      width: 40,
      render: (e) => <Tooltip title={infoProp}><div><Info size={15} /></div></Tooltip>
    },
    {
      title: <div className="w-100 flex justify-center"><Truck size={20} /></div>,
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
      render: (e) => <div><div><span className="text-gray-500 font-sans">{e.name}</span></div>{e.offer ? <div className="bg-success text-white rounded px-1 text-center mt-1">Kampanya</div> : null}</div>
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
      render: (e) => <div className="w-full">{e.kdvSurprize ? <div className="w-full flex justify-end"><Tooltip title={offerProp}><Star color="red" size={15} /></Tooltip></div> : false}<div className="w-full flex justify-end mr-2">{e.price} ₺</div></div>
    },
    {
      title: "Kdv Dahil Fiyatı ₺",
      key: "price",
      width: 100,
      render: (e) => <Tooltip title={priceInfoProp}><span className="text-gray-500 font-sans">{e.price} ₺</span></Tooltip>
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
      render: (e) => <div className="flex justify-center"><Input type="number" defaultValue={e.piece} style={{ width: 50 }} /><div className="flex justify-center rounded bg-primary text-white items-center" style={{ width: 36, height: 36 }}><RefreshCcw size={15} /></div></div>
    },
    {
      title: "İşlemler",
      width: 100,
      render: (e) => (
        <div className='flex justify-start'>
          <div className='ml-2'>
            <Dropdown overlay={editMenu} trigger={['click']}>
              <Tooltip title="Düzenle">
                <Button2 icon={<Edit2 size={20} className='text-warning' />} />
              </Tooltip>
            </Dropdown>
          </div>
          <div className='ml-2'>
            <Popconfirm
              title="Bu ürünü silmek istediğinizden emin misiniz?"
              onConfirm={() => deleteData(e.formID)}
              okText="Evet"
              cancelText="Hayır"
            >
              <Tooltip title="Sil">
                <Button2 icon={<Trash2 size={20} className='text-danger' />} />
              </Tooltip>
            </Popconfirm>
          </div>
        </div>
      )
    }
  ];

  return (
    <GuestLayout>
      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>
        <div className="mt-12 flex flex-wrap justify-between items-center w-full">
          <span className="text-2xl text-gray-900 font-bold inline-block">Ürünler</span>
        </div>
        <div className="w-full mt-4 relative bg-white p-3 rounded-xl shadow">
          <div className="relative">
            <div className="flex w-full flex-col">
              <Tabs aria-label="Options" size="lg" color="warning">
                <Tab key="tab1" title="Tümünde Ara"
                  classNames={{
                    tabContent: "font-semibold group-data-[selected=true]:text-white"
                  }}
                >
                  <Input
                    classNames={{
                      base: "max-w-full h-14",
                      mainWrapper: "h-full",
                      input: "text-lg",
                      inputWrapper: "h-full font-semibold text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    size="lg"
                    placeholder="Ara..."
                    isClearable
                    startContent={<Search className="text-3xl text-default-400 pointer-events-none flex-shrink-0" />}
                    type="text"
                  />

                  <div className="grid grid-flow-row lg:grid-flow-col gap-4 w-full  mt-5">
                    <Select
                      size="lg"
                      label="Marka Seç"
                      className="max-w-xs"
                    >
                      {list.map((item) => (
                        <SelectItem key={item.key}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      size="lg"
                      label="Araç Grubu Seç"
                      className="max-w-xs"
                    >
                      {carsGroup.map((item) => (
                        <SelectItem key={'x' + item.key}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <div className="checks flex justify-start items-center gap-6">
                      <Checkbox size="lg" color="warning">Stoktakiler</Checkbox>
                      <Checkbox size="lg" color="warning">Üreticide Ara</Checkbox>
                    </div>
                    <Button color="warning" variant="solid" size="lg" className="text-white self-end justify-self-center lg:justify-self-end" startContent={<Search color="white" />}>Ara</Button>
                  </div>
                </Tab>
                <Tab key="tab2" title="Araç Seçerek Ara"
                  classNames={{
                    tabContent: "font-semibold group-data-[selected=true]:text-white"
                  }}
                >
                  <div className="grid grid-flow-row lg:grid-flow-col gap-4 w-full  mt-5">
                    <Select
                      size="lg"
                      label="Marka"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Model"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Kasa"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Yıl"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Motor Hacmi"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Beygir Gücü"
                      className="max-w-xs"
                    ></Select>
                    <Button color="warning" variant="solid" size="lg" className="text-white self-end justify-self-center lg:justify-self-end" startContent={<Search color="white" />}>Ara</Button>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Table
            bordered
            columns={columns}
            dataSource={DATA}
            rowKey='productID'
            rowSelection={rowSelection}
            scroll={{ x: 'max-content' }}
            className="product shadow-sm rounded"
            locale={{ emptyText: 'Gösterilecek veri yok 😔' }}
          />
        </div>

        <div className="w-full flex flex-wrap relative mt-10">
          <div className="mb-4 flex flex-wrap justify-center items-center w-full">
            <span className="text-2xl text-gray-800 font-bold inline-block">Günlük Kur</span>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
            <div className="w-full relative bg-white rounded-xl shadow">
              <DailyRate data={34.15} type="$" key="dr1" />
            </div>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
            <div className="w-full relative bg-white rounded-xl shadow">
              <DailyRate data={38.21} type="€" key="dr2" />
            </div>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
            <div className="w-full relative bg-white rounded-xl shadow">
              <DailyRate data={45.77} type="£" key="dr3" />
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
