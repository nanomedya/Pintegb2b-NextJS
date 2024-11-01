"use client"
import React from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import { images } from "@/components/Elements/data";
import { Cities } from "@/components/Elements/cities";

export default function MyProfile() {
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
        <form>
          <div className="mb-3">
            <strong className="text-xl">Bayi Olun</strong>
          </div>
          <Input
            isClearable
            type="text"
            label="Ticaret Ünvanı"
            variant="bordered"
            placeholder="Ticaret ünvanı girin"
            onClear={() => console.log("input cleared")}
          />

          <div className="flex space-x-4">
            <Input
              isClearable
              type="text"
              label="Vergi Dairesi"
              variant="bordered"
              placeholder="Vergi dairesi girin"
              className="mt-3"
              onClear={() => console.log("input cleared")}
            />

            <Input
              isClearable
              type="text"
              label="Vergi Numarası"
              variant="bordered"
              placeholder="Vergi numarası girin"
              className="mt-3"
              onClear={() => console.log("input cleared")}
            />
          </div>

          <Input
            isClearable
            type="text"
            label="Ticaret Sicil Numarası"
            variant="bordered"
            placeholder="Ticaret sicil numarası girin"
            onClear={() => console.log("input cleared")}
            className="mt-3"
          />

          <div className="flex space-x-4 items-center">
            <Select
              size="lg"
              label="Şehir Seçin"
              placeholder="Lütfen şehir seçiniz"
              className="border-2 p-0 border-gray-200 rounded-2xl bg-white w-full mt-3"
              style={{ height: 20 }}
            >
              {Cities.map((item) => (
                <SelectItem className="text-black bg-white" key={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </Select>

            <Input
              isClearable
              type="text"
              label="Adres"
              variant="bordered"
              placeholder="Adresinizi girin"
              onClear={() => console.log("input cleared")}
              className="mt-3"
            />
          </div>

          <div className="flex space-x-4 items-center">
            <Input
              isClearable
              type="text"
              label="Telefon"
              variant="bordered"
              placeholder="Telefon girin"
              onClear={() => console.log("input cleared")}
              className="mt-3"
            />

            <Input
              isClearable
              type="text"
              label="E-Posta"
              variant="bordered"
              placeholder="E-Posta girin"
              onClear={() => console.log("input cleared")}
              className="mt-3"
            />
          </div>

          <div className="mt-5 mb-3">
            <strong className="text-xl">Yetkili Bilgileri</strong>
          </div>

          <div className="flex space-x-4 items-center">
            <Input
              isClearable
              type="text"
              label="Adı Soyadı"
              variant="bordered"
              placeholder="Adı soyadı girin"
              onClear={() => console.log("input cleared")}
              className="mt-3"
            />

            <Input
              isClearable
              type="text"
              label="TC Kimlik No"
              variant="bordered"
              placeholder="TC kimlik no girin"
              onClear={() => console.log("input cleared")}
              className="mt-3"
            />
          </div>

          <div className="flex space-x-4 items-center">
            <Input
              isClearable
              type="text"
              label="E-Posta"
              variant="bordered"
              placeholder="E-Posta girin"
              onClear={() => console.log("input cleared")}
              className="mt-3"
            />

            <Input
              isClearable
              type="text"
              label="Cep Telefonu"
              variant="bordered"
              placeholder="Cep telefonu girin"
              onClear={() => console.log("input cleared")}
              className="mt-3"
            />
          </div>

          {/* <Input
            label="Şifre"
            variant="bordered"
            placeholder="Şifrenizi girin"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <Eye />
                ) : (
                  <EyeOff />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="mt-3"
          /> */}

          <div className="flex items-center justify-center mt-4">
            <Button>Kayıt Ol</Button>
          </div>
          <div className="flex items-center justify-center mt-3">
            <span>ya da</span>
          </div>
          <div className="flex items-center justify-center mt-3">
            <Button className="text-white" color="warning">Güncelle</Button>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
