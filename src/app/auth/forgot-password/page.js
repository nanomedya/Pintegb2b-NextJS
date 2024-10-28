"use client"
import React from "react";
import { Link, Input, Button } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import AuthCard from "@/components/Items/AuthCard";
import { Eye, EyeOff } from 'react-feather'
import AcmeLogo from "@/components/Items/AcmeLogo";

export default function ForgotPassword() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <GuestLayout>
      <AuthCard logo={
        <AcmeLogo className="h-20" />
      }>
        <div className="mb-4 text-slate-500"><h2>Şifremi Unuttum</h2></div>
        <form>
          <Input
            isClearable
            type="text"
            label="E-Mail"
            variant="bordered"
            placeholder="Mail adresiniz girin"
            onClear={() => console.log("input cleared")}
          />

          <div className="flex items-center justify-center mt-3">
            <Button color="warning" className="text-white">Gönder</Button>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Button className="bg-white border border-warning"><Link className="w-full text-warning" href="/">Ana Sayfa</Link></Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}