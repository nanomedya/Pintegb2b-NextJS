"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import { Table, Tooltip, Button as Button2 } from "antd";
import { list, carsGroup, storeGroup } from "@/app/data/search_data";
import { Eye, Search, ShoppingCart } from "react-feather";
import { Button, Checkbox, Input, Modal, ModalHeader, ModalBody, ModalFooter, Select, SelectItem, Tab, Tabs, useDisclosure, ModalContent } from "@nextui-org/react";
import { DATA, images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";

export default function TodayProduct() {
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
          <span className="text-2xl text-gray-900 font-bold inline-block">Bugünün Ürünleri</span>
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
                        <SelectItem className="text-black" key={item.key}>
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
                        <SelectItem className="text-black" key={'x' + item.key}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      size="lg"
                      label="Depo Seç"
                      className="max-w-xs"
                    >
                      {storeGroup.map((item) => (
                        <SelectItem className="text-black" key={item.key}>
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
