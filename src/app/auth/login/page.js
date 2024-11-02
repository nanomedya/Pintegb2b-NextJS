"use client"
import React from "react";
import { Link, Input, Button } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import AuthCard from "@/components/Items/AuthCard";
import { Eye, EyeOff } from 'react-feather'
import AcmeLogo from "@/components/Items/AcmeLogo";
import { useDispatch } from "react-redux";
import { fetchLogin } from "@/redux/slices/loginSlice";

export default function Login() {
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const fetchData = async () => {
    var data = await dispatch(fetchLogin({ email: formData.email, password: formData.password }))
    console.log(data)
  }

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
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            onClear={() => console.log("input cleared")}
          />

          <Input
            label="Şifre"
            variant="bordered"
            placeholder="Şifrenizi girin"
            onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
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
            <Button color="warning" onClick={fetchData}>Giriş Yap</Button>
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