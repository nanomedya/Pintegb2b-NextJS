"use client"
import React, { useEffect } from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import { list, carsGroup, storeGroup } from "@/app/data/search_data";
import { Search } from "react-feather";
import { Button, Checkbox, Input, Select, SelectItem, Tab, Tabs, useDisclosure } from "@nextui-org/react";
import { images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";
import Products from "@/components/Items/Products";
import OfferModal from "@/components/Items/OfferModal";
import ProductModal from "@/components/Elements/productModal";

export default function NewProduct() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [modalId, setModalId] = React.useState(1)
  const [seconds, setSeconds] = React.useState(223235);
  const [offerModal, setOfferModal] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState(1);

  const toggleOfferModal = () => setOfferModal(!offerModal)

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

  return (
    <GuestLayout>
      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>
        <div className="mt-12 flex flex-wrap justify-between items-center w-full">
          <span className="text-2xl text-gray-900 font-bold inline-block">Yeni Ürünler</span>
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

        <Products
          setModalId={setModalId}
          onOpen={onOpen}
          toggleOfferModal={toggleOfferModal}
        />

        <CurrentRate />
      </div>

      <OfferModal
        offerModal={offerModal}
        toggleOfferModal={toggleOfferModal}
        days={days}
        hours={hours}
        minutes={minutes}
        remainingSeconds={remainingSeconds}
      />

      <ProductModal
        modalId={modalId}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </GuestLayout>
  );
}
