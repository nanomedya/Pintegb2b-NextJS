"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import { Table, Tooltip, Button as Button2 } from "antd";
import { Eye, ShoppingCart } from "react-feather";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, useDisclosure, ModalContent } from "@nextui-org/react";
import { DATA, images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";

export default function MyBackOrders() {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "",
      key: "productID",
      width: 70,
      render: (e) => <img src={e.logo} alt="" style={{ width: 50 }} />
    },
    {
      title: "ID",
      key: "productID",
      dataIndex: "productID",
      width: 30
    },
    {
      title: "Ürün Kodu",
      key: "code",
      render: (e) => <span className="text-gray-500 font-sans">{e.code}</span>
    },
    {
      title: "Ürün Adı",
      key: "name",
      render: (e) => <span className="text-gray-500 font-sans">{e.name}</span>
    },
    {
      title: "Stok",
      key: "stock",
      render: (e) => <span className="text-gray-500 font-sans">{e.stock}</span>
    },
    {
      title: "Fiyat",
      key: "price",
      render: (e) => <span className="text-gray-500 font-sans">{e.price} ₺</span>
    },
    {
      title: "Alan 1",
      key: "title",
      render: (e) => <span className="text-gray-500 font-sans">{e.title}</span>
    },
    {
      title: "Alan 2",
      key: "name",
      render: (e) => <span className="text-gray-500 font-sans">{e.name}</span>
    },
    {
      title: "Alan 3",
      key: "title",
      render: (e) => <span className="text-gray-500 font-sans">{e.title}</span>
    },
    {
      title: "İşlemler",
      width: 100,
      render: (e) => (
        <div className='flex justify-start'>
          <div className='ml-2'>
            <Tooltip title="İncele">
              <Button2 className='border-warning text-warning' icon={<Eye size={20} className='text-warning' />} onClick={onOpen} />
            </Tooltip>
          </div>
          <div className='ml-2'>
            <Tooltip title="Sepete Ekle">
              <Button2 icon={<ShoppingCart size={20} className='text-success' />} />
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
        <div className="mt-12 flex flex-wrap justify-between items-center w-full">
          <span className="text-2xl text-gray-900 font-bold inline-block">Bakiye Siparişlerim</span>
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

        <CurrentRate />
      </div>

      <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-warning">Deneme Ürün</ModalHeader>
              <ModalBody>
                <div className="flex justify-start items-center w-full">
                  <div className="w-40"><img src="/items/balata.png" alt="" style={{ objectFit: 'cover' }} /></div>
                  <div className="ml-4">
                    <div className="mb-2"><span className="text-warning">Ürün Adı: </span><strong className="text-warning">Deneme Ürün</strong></div>
                    <div className="mb-2"><span className="text-black">Ürün Kodu: </span><strong className="text-black">XF53FG</strong></div>
                    <div className="mb-2"><span className="text-black">Stok: </span><strong className="text-black">145</strong></div>
                    <div className="mb-2"><span className="text-black">Fiyat: </span><strong className="text-black">123 ₺</strong></div>
                    <div className="mb-2"><span className="text-black">Alan 1: </span><strong className="text-black">FG+453</strong></div>
                    <div className="mb-2"><span className="text-black">Alan 2: </span><strong className="text-black">GHKE56</strong></div>
                    <div className="mb-2"><span className="text-black">Alan 3: </span><strong className="text-black">23RTGS</strong></div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-end">
                <Button className="text-warning border border-warning bg-white" onPress={onClose}>Kapat</Button>
                <Button color="warning" className="text-white" onPress={onClose}>Sepete Ekle</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </GuestLayout>
  );
}
