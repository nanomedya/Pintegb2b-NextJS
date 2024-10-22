"use client"
import React from "react";
import { Input, Tabs, Tab, Select, SelectItem, Checkbox, Button, Link } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import { Search } from "react-feather";
import { list, carsGroup } from "@/app/data/search_data";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";

export default function Pay() {
  const [value, setValue] = React.useState("")
  const [date, setDate] = React.useState('');

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

  const formatCardNumber = (input) => {
    const digits = input.replace(/\D/g, "").slice(0, 16);
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formatted;
  };

  const handleDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setDate(value.slice(0, 5));
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatCardNumber(inputValue);
    setValue(formattedValue);
  };

  const banks = [
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

  return (
    <GuestLayout>
      <NavbarWrapper />
      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>

        <div className="w-full relative mt-10 bg-white p-3 rounded-xl shadow">
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


        <div className="mt-12 bg-white rounded-xl shadow p-2">
          <div className="mt-12 flex flex-wrap justify-center items-center w-full">
            <span className="text-2xl text-gray-900 font-bold inline-block">Ödeme Yap</span>
          </div>
          <form className="mt-4 mb-12 w-full max-w-md mx-auto lg:max-w-2xl lg:w-1/2">
            <Input
              isClearable
              type="text"
              label="İsim Soyisim"
              variant="bordered"
              placeholder="Adınızı soyadınızı girin"
              onClear={() => console.log("input cleared")}
            />

            <Input
              isClearable
              type="number"
              label="Kart Numarası"
              variant="bordered"
              className="mt-3"
              onClear={() => setValue("")}
              value={value}
              onChange={handleChange}
              placeholder="Kart numaranızı girin"
              maxLength={19}
            />

            <div className="flex space-x-4 mt-3">
              <Input
                isClearable
                type="text"
                label="Ay / Yıl"
                variant="bordered"
                placeholder="Ay ve yıl girin (MM/YY)"
                value={date}
                onChange={handleDateChange}
                maxLength={5}
              />

              <Input
                isClearable
                type="number"
                label="CVV"
                variant="bordered"
                placeholder="CVV girin"
                maxLength={4}
              />
            </div>

            <div className="flex items-center justify-center mt-3">
              <Button color="warning" className="w-full text-white">Ödeme Yap</Button>
            </div>
          </form>
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

        <div className="w-full flex flex-wrap relative mt-10 p-3">
          <div className="mb-4 flex flex-wrap justify-start items-center w-full">
            <span className="text-2xl text-gray-800 font-bold inline-block">Banka Hesaplarımız</span>
          </div>
          <div className="flex flex-wrap w-full mt-3 relative">
            <div className="w-full relative bg-white rounded-xl shadow p-3 overflow-x-auto whitespace-nowrap">
              <Table aria-label="bank accounts list table" shadow="none" className="w-full">
                <TableHeader>
                  <TableColumn>Banka</TableColumn>
                  <TableColumn>Şube</TableColumn>
                  <TableColumn>Şube Kodu</TableColumn>
                  <TableColumn>Hesap No</TableColumn>
                  <TableColumn>IBAN Numarası</TableColumn>
                </TableHeader>
                <TableBody>
                  {banks.map((item, key) => (
                    <TableRow key={key}>
                      <TableCell>	{item.title} </TableCell>
                      <TableCell>	BEYKENT TİCARİ </TableCell>
                      <TableCell>	1604 </TableCell>
                      <TableCell>	6299877 </TableCell>
                      <TableCell>		TR30 0006 2001 6040 0006 2998 77 </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
