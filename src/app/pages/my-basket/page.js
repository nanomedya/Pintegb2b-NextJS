"use client"
import React, { useEffect } from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import { Button, Dropdown, Input, Link, Menu, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { AlignJustify, Circle, Eye, Image, Info, RefreshCcw, ShoppingCart, Star, Trash2, Truck, X } from "react-feather";
import { Table, Tooltip, Button as Button2, Popconfirm } from "antd";
import { discountIncludeInfo, imgProp, infoProp, offerProp } from "../../../components/Items/toolViewer";
import OfferItem from "@/components/Items/offerItem";
import { motion } from "framer-motion";
import { DATA, images } from "@/components/Elements/data";
import { offerVariant } from "@/components/Elements/offerVariant";
import Purchases from "@/components/Items/popupModels/purchases";
import Alternative from "@/components/Items/popupModels/alternative";
import GeneralInfo from "@/components/Items/popupModels/generalInfo";
import Oem from "@/components/Items/popupModels/oem";

export default function MyBasket() {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [modalId, setModalId] = React.useState(1);
  const [seconds, setSeconds] = React.useState(223235);
  const [offerModal, setOfferModal] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(1);

  const toggleOfferModal = () => setOfferModal(!offerModal)

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const editMenu = (
    <Menu>
      <Menu.Item key="1"><Circle size={13} className="mr-2" /> Takip Et</Menu.Item>
      <Menu.Item key="2"><Circle size={13} className="mr-2" /> Karşılaştırmaya Ekle</Menu.Item>
      <Menu.Item key="3"><Circle size={13} className="mr-2" /> Transfer Et</Menu.Item>
      <Menu.Item key="4"><Circle size={13} className="mr-2" /> Fiyat Karşılaştır</Menu.Item>
    </Menu>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(seconds / (24 * 60 * 60)).toString().length === 1 ? `0${Math.floor(seconds / (24 * 60 * 60))}` : Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600).toString().length === 1 ? `0${Math.floor((seconds % (24 * 60 * 60)) / 3600)}` : Math.floor((seconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60).toString().length === 1 ? `0${Math.floor((seconds % 3600) / 60)}` : Math.floor((seconds % 3600) / 60);
  const remainingSeconds = (seconds % 60).toString().length === 1 ? `0${seconds % 60}` : seconds % 60;

  const columns = [
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
            <Tooltip title="Sil">
              <Popconfirm
                title="Bu ürünü silmek istediğinizden emin misiniz?"
                onConfirm={() => console.log("ürün")}
                okText="Evet"
                cancelText="Hayır"
              >
                <Button2 icon={<Trash2 size={20} className='text-danger' />} />
              </Popconfirm>
            </Tooltip>
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

        <div className="mb-4 mt-12 flex flex-wrap justify-start items-center w-full">
          <span className="text-2xl text-gray-800 font-bold inline-block">Sepetim</span>
        </div>
        <div className="bg-white w-full mb-12 flex justify-center flex-wrap items-center shadow rounded-xl">
          <div className="w-full md:w-12/12">
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
          <div className="w-full md:w-5/12 bg-white-500 p-4">
            <div className="border p-2 rounded-xl shadow">
              <div className="w-100 text-center mt-4"><strong className="text-4xl">Toplam</strong></div>
              <div className="text-center mt-3"><strong className="text-xl text-success">770.00 ₺</strong></div>
              <div className="my-4 text-center"><Button className="text-white" color="warning"><Link href="/pages/my-basket/completed" className="w-full text-white">Sepeti Onayla</Link></Button></div>
            </div>
          </div>
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

      {offerModal && (<div className="offer-modal">
        <X className="offer-close" onClick={toggleOfferModal} />
        <motion.div {...offerVariant} className="offer-content">
          <div className="p-3 border-b border-gray-200"><h2><strong>Fırsat Ürünleri</strong></h2></div>
          <div className="p-3 overflow-y-auto h-screen pb-3 mb-3">

            <OfferItem days={days} hours={hours} minutes={minutes} remainingSeconds={remainingSeconds} />
            <OfferItem days={days} hours={hours} minutes={minutes} remainingSeconds={remainingSeconds} />
            <OfferItem days={days} hours={hours} minutes={minutes} remainingSeconds={remainingSeconds} />

          </div>
        </motion.div>
      </div>)}

      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {modalId === 1 ?
            <>
              <ModalHeader className="flex flex-col gap-1 text-warning">Deneme Ürün</ModalHeader>
              <ModalBody>
                <div className="w-full flex justify-start">
                  <div onClick={() => setActiveTab(1)} className={`border border-succcess ${activeTab === 1 ? "bg-success" : null} ${activeTab === 1 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Önceki Alımlar</div>
                  <div onClick={() => setActiveTab(2)} className={`border border-succcess ${activeTab === 2 ? "bg-success" : null} ${activeTab === 2 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Alternatifler</div>
                  <div onClick={() => setActiveTab(3)} className={`border border-succcess ${activeTab === 3 ? "bg-success" : null} ${activeTab === 3 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Genel Bilgiler</div>
                  <div onClick={() => setActiveTab(4)} className={`border border-succcess ${activeTab === 4 ? "bg-success" : null} ${activeTab === 4 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Oem Kodlar</div>
                  <div onClick={() => setActiveTab(5)} className={`border border-succcess ${activeTab === 5 ? "bg-success" : null} ${activeTab === 5 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Rakip Kodlar</div>
                  <div onClick={() => setActiveTab(6)} className={`border border-succcess ${activeTab === 6 ? "bg-success" : null} ${activeTab === 6 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Araç</div>
                  <div onClick={() => setActiveTab(7)} className={`border border-succcess ${activeTab === 7 ? "bg-success" : null} ${activeTab === 7 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Oem</div>
                  <div onClick={() => setActiveTab(8)} className={`border border-succcess ${activeTab === 8 ? "bg-success" : null} ${activeTab === 8 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Rakip Kod</div>
                  <div onClick={() => setActiveTab(9)} className={`border border-succcess ${activeTab === 9 ? "bg-success" : null} ${activeTab === 9 ? "text-white" : "text-success"} cursor-pointer hover:shadow rounded-xl px-2 py-1 mr-1`}>Markalar</div>
                </div>
                {activeTab === 1 ? <Purchases /> : null}
                {activeTab === 2 ? <Alternative /> : null}
                {activeTab === 3 ? <GeneralInfo /> : null}
                {activeTab === 4 ? null : null}
                {activeTab === 5 ? null : null}
                {activeTab === 6 ? null : null}
                {activeTab === 7 ? <Oem /> : null}
                {activeTab === 8 ? null : null}
                {activeTab === 9 ? null : null}
              </ModalBody>
              <ModalFooter className="flex justify-end">
                <Button className="text-warning border border-warning bg-white" onPress={onClose}>Kapat</Button>
                <Button color="warning" className="text-white" onPress={onClose}>Sepete Ekle</Button>
              </ModalFooter>
            </> : null}
          {
            modalId === 2 ?
              <>
                <ModalHeader className="flex flex-col gap-1 text-warning">Alternatif Ürünler</ModalHeader>
                <Alternative />
              </>
              : null
          }
        </ModalContent>
      </Modal>
    </GuestLayout>
  );
}
