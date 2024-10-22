"use client"
import React from "react";
import { Link, Input, Button } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import AuthCard from "@/components/Items/AuthCard";
import { Eye, EyeOff } from 'react-feather'
import AcmeLogo from "@/components/Items/AcmeLogo";

export default function Register() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <GuestLayout>
      <AuthCard logo={
        <AcmeLogo className="h-20" />
      }>
        <form>
          <Input
            isClearable
            type="text"
            label="Firma Adı"
            variant="bordered"
            placeholder="Firma adınızı girin"
            onClear={() => console.log("input cleared")}
          />

          <Input
            isClearable
            type="text"
            label="İsim"
            variant="bordered"
            placeholder="İsminizi girin"
            onClear={() => console.log("input cleared")}
            className="mt-3"
          />

          <Input
            isClearable
            type="text"
            label="Soyisim"
            variant="bordered"
            placeholder="Soyisminizi girin"
            onClear={() => console.log("input cleared")}
            className="mt-3"
          />

          <Input
            isClearable
            type="text"
            label="Kullanıcı Adı"
            variant="bordered"
            placeholder="Kullanıcı adınızı girin"
            onClear={() => console.log("input cleared")}
            className="mt-3"
          />

          <Input
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
          />

          <div className="flex items-center justify-center mt-4">
            <Button>Kayıt Ol</Button>
          </div>
          <div className="flex items-center justify-center mt-3">
            <span>ya da</span>
          </div>
          <div className="flex items-center justify-center mt-3">
            <Button className="text-white" color="warning"><Link href="/auth/login" className="w-full text-white">Giriş Yap</Link></Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}