"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import AuthCard from "@/components/Items/AuthCard";
import AcmeLogo from "@/components/Items/AcmeLogo";
import { Button, Link } from "@nextui-org/react";

export default function Auth() {
  return (
    <GuestLayout>
      <AuthCard logo={
        <AcmeLogo className="h-20" />
      }>
        <div className="flex items-center justify-center mt-4">
          <span>Hoşgeldiniz!</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Button color="warning"><Link href="/auth/login" className="text-white w-full">GİRİŞ YAP</Link></Button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Button className="border border-warning bg-white"><Link className="text-warning" href="/auth/register">Kayıt Ol</Link></Button>
        </div>
      </AuthCard>
    </GuestLayout>
  )
}