"use client"
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import { Tooltip } from "antd";
import { Copy } from "react-feather";
import { handleCopy } from "@/components/Elements/copy";
import { images } from "@/components/Elements/data";

export default function Settings() {
  const [visible, setVisible] = React.useState(false);

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


        <div className="mb-4 mt-12 flex flex-wrap justify-center items-center w-full">
          <span className="text-2xl text-gray-800 font-bold inline-block">Profilim</span>
        </div>
        <form className="w-full bg-white p-5 rounded-xl shadow mt-4 mb-12 w-full max-w-md mx-auto lg:max-w-2xl lg:w-1/2">
          <div className="flex space-x-4 mt-3">
            <Input
              isClearable
              type="text"
              label="İsim"
              variant="bordered"
            />

            <Input
              isClearable
              type="text"
              label="Soyisim"
              variant="bordered"
            />
          </div>
          <div className="flex space-x-4 mt-3">
            <Input
              isClearable
              type="text"
              label="E-Mail"
              variant="bordered"
            />

            <Input
              isClearable
              type="number"
              label="Telefon"
              variant="bordered"
            />
          </div>
          <div className="flex space-x-4 mt-3">
            <Input
              isClearable
              type="text"
              label="Vergi Numarası"
              variant="bordered"
            />

            <Input
              isClearable
              type="text"
              label="Vergi Dairesi"
              variant="bordered"
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <Button color="warning" className="w-full text-white">Güncelle</Button>
          </div>
        </form>


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
                  <TableColumn>Kopyala</TableColumn>
                </TableHeader>
                <TableBody>

                  {banks.map((item, key) => (

                    <TableRow key={key}>
                      <TableCell>	{item.title} </TableCell>
                      <TableCell>	BEYKENT TİCARİ </TableCell>
                      <TableCell>	1604 </TableCell>
                      <TableCell>	6299877 </TableCell>
                      <TableCell>TR30 0006 2001 6040 0006 2998 77</TableCell>
                      <TableCell>
                        <Tooltip title={visible[key] ? "Kopyalandı!" : ""} visible={visible[key]}>
                          <Copy className="cursor-pointer" onClick={() => handleCopy("TR30 0006 2001 6040 0006 2998 77", key, visible, setVisible)} />
                        </Tooltip>
                      </TableCell>
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
