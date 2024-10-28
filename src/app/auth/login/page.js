"use client"
import React from "react";
import { Link, Input, Button } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import AuthCard from "@/components/Items/AuthCard";
import { Eye, EyeOff } from 'react-feather'
import AcmeLogo from "@/components/Items/AcmeLogo";

export default function Login() {
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
            label="Kullanıcı Adı"
            variant="bordered"
            placeholder="Kullanıcı adınızı girin"
            onClear={() => console.log("input cleared")}
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
          <div className="flex items-center justify-end mt-2">
            <Link
              href="/auth/forgot-password"
              className="underline text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400">
              Şifremi unuttum?
            </Link>
          </div>

          <div className="flex items-center justify-center mt-3">
            <Button color="warning"><Link href="/pages/home" className="text-white">Giriş Yap</Link></Button>
          </div>
          <div className="flex items-center justify-center mt-2">
            <span className="text-slate-500 text-sm text-small">ya da</span>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Button className="bg-white border border-warning"><Link className="w-full text-warning" href="/auth/register">Kayıt Ol</Link></Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}