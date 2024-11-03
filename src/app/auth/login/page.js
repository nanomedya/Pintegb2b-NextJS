"use client"

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { fetchLogin } from "@/redux/slices/loginSlice";
import { Link, Input, Button } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import AuthCard from "@/components/Items/AuthCard";
import { Eye, EyeOff } from 'react-feather';
import AcmeLogo from "@/components/Items/AcmeLogo";

export default function Login() {
  const dispatch = useDispatch();
  const { data, status, token } = useSelector((state) => state.login);

  const [isVisible, setIsVisible] = React.useState(false);
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(fetchLogin({ email: formData.email, password: formData.password }));
  };

  useEffect(() => {
    // Tarayıcıda olduğumuzu kontrol ediyoruz
    if (typeof window !== 'undefined') {

      if (status === 'succeeded' && token) {
        window.location.href = '/pages/home';
      }
    }
  }, [status, token]);

  return (
    <GuestLayout>
      <AuthCard logo={<AcmeLogo className="h-20" />}>
        <form onSubmit={handleLogin}>
          <Input
            isClearable
            type="text"
            label="Kullanıcı Adı"
            variant="bordered"
            placeholder="Kullanıcı adınızı girin"
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            onClear={() => console.log("input cleared")}
          />

          <Input
            label="Şifre"
            variant="bordered"
            placeholder="Şifrenizi girin"
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? <Eye /> : <EyeOff />}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="mt-3"
          />

          <div className="flex items-center justify-end mt-2">
            <Link href="/auth/forgot-password" className="underline text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400">
              Şifremi unuttum?
            </Link>
          </div>

          <div className="flex items-center justify-center mt-3">
            <Button color="warning" type="submit">Giriş Yap</Button>
          </div>

          <div className="flex items-center justify-center mt-2">
            <span className="text-slate-500 text-sm">ya da</span>
          </div>

          <div className="flex items-center justify-center mt-2">
            <Button className="bg-white border border-warning">
              <Link className="w-full text-warning" href="/auth/register">Kayıt Ol</Link>
            </Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  );
}
