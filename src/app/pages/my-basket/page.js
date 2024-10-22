"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import { Button, Input } from "@nextui-org/react";
import { Eye, Minus, Plus, Trash2 } from "react-feather";

export default function MyBasket() {
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
        <div className="bg-white w-full mb-12 flex flex-wrap items-center shadow rounded-xl">
          <div className="w-full md:w-7/12 bg-white-500 p-6">
            <div className="w-full mb-4 border rounded-xl p-2 items-center flex justify-between">
              <div className="flex justify-start items-center">
                <div><img src="/items/c3.png" alt="" style={{ height: 70 }} /></div>
                <div className="ml-3">
                  <div><strong>Fren Balatası</strong></div>
                  <div className="mt-2 text-small">BMW</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center mr-10">
                  <Minus size={30} className="mr-2 bg-warning text-white p-1 rounded-xl" />
                  <Input
                    type="number"
                    defaultValue={0}
                    className="text-center"
                    style={{ width: 50 }}
                  />
                  <Plus size={30} className="ml-2 bg-warning text-white p-1 rounded-xl" />
                </div>
                <div>
                  <div><strong className="text-success">120.00 ₺</strong></div>
                  <div className="flex mt-3 justify-end items-center">
                    <div className="border border-warning mr-2 p-1 rounded-xl text-warning"><Eye /></div>
                    <div className="border border-danger p-1 rounded-xl text-danger"><Trash2 /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-4 border rounded-xl p-2 items-center flex justify-between">
              <div className="flex justify-start items-center">
                <div><img src="/items/c2.png" alt="" style={{ height: 70 }} /></div>
                <div className="ml-2">
                  <div><strong>Baskı Balata</strong></div>
                  <div className="mt-2 text-small">Audi</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center mr-10">
                  <Minus size={30} className="mr-2 bg-warning text-white p-1 rounded-xl" />
                  <Input
                    type="number"
                    defaultValue={0}
                    className=""
                    style={{ width: 50 }}
                  />
                  <Plus size={30} className="ml-2 bg-warning text-white p-1 rounded-xl" />
                </div>
                <div>
                  <div><strong className="text-success">230.00 ₺</strong></div>
                  <div className="flex mt-3 justify-end items-center">
                    <div className="border border-warning mr-2 p-1 rounded-xl text-warning"><Eye /></div>
                    <div className="border border-danger p-1 rounded-xl text-danger"><Trash2 /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-4 border rounded-xl p-2 items-center flex justify-between">
              <div className="flex justify-start items-center">
                <div><img src="/items/c1.png" alt="" style={{ height: 70 }} /></div>
                <div className="ml-2">
                  <div><strong>Silindir</strong></div>
                  <div className="mt-2 text-small">Tofaş</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center mr-10">
                  <Minus size={30} className="mr-2 bg-warning text-white p-1 rounded-xl" />
                  <Input
                    type="number"
                    defaultValue={0}
                    className=""
                    style={{ width: 50 }}
                  />
                  <Plus size={30} className="ml-2 bg-warning text-white p-1 rounded-xl" />
                </div>
                <div>
                  <div><strong className="text-success">420.00 ₺</strong></div>
                  <div className="flex mt-3 justify-end items-center">
                    <div className="border border-warning mr-2 p-1 rounded-xl text-warning"><Eye /></div>
                    <div className="border border-danger p-1 rounded-xl text-danger"><Trash2 /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 bg-white-500 p-4">
            <div className="border p-2 rounded-xl shadow">
              <div className="w-100 text-center mt-4"><strong className="text-4xl">Toplam</strong></div>
              <div className="text-center mt-3"><strong className="text-xl text-success">770.00 ₺</strong></div>
              <div className="my-4 text-center"><Button className="text-white" color="warning">Sepeti Onayla</Button></div>
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
    </GuestLayout>
  );
}
