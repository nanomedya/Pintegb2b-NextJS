"use client"
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import AcmeLogo from "@/components/Items/AcmeLogo";
import { CircularProgress } from "@nextui-org/react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth');
  }, [router]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <div>
        <AcmeLogo className="h-20" />
        <div className="w-full flex justify-center">
          <CircularProgress color="warning" className="mt-4" />
        </div>
      </div>
    </div>
  );
}
