"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Accordion, AccordionItem } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import { Tooltip } from "antd";
import { Copy } from "react-feather";
import { handleCopy } from "@/components/Elements/copy";

export default function HelpFeedback() {
  const [visible, setVisible] = React.useState(false);

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
          <span className="text-2xl text-gray-800 font-bold inline-block">Yardım & Geri Bildirim</span>
        </div>
        <div className="w-full p-5 mb-12 bg-white rounded-xl shadow">
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              subtitle={
                <span>
                  Press to expand <strong>key 2</strong>
                </span>
              }
              title="Accordion 2"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              subtitle={
                <span>
                  Press to expand <strong>key 4</strong>
                </span>
              }
              title="Accordion 4"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 5" subtitle="Press to expand" title="Accordion 5">
              {defaultContent}
            </AccordionItem>
          </Accordion>
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
