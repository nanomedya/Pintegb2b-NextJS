"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import BanksInfo from "@/components/Items/BanksInfo";
import { images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";

export default function Notification() {
  return (
    <GuestLayout>
      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>


        <div className="mb-4 mt-12 flex flex-wrap justify-center items-center w-full">
          <span className="text-2xl text-gray-800 font-bold inline-block">Bildirimler</span>
        </div>
        <div className="w-full max-w-md mx-auto lg:max-w-2xl lg:w-1/2 bg-white rounded-xl shadow p-3">
          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>

          <div className="mb-3 flex justify-start items-center">
            <div><img src="/items/c1.png" alt="" style={{ height: 50 }} /></div>
            <div className="ml-3">
              <div><strong>Lorem Ipsum</strong></div>
              <div className="mt-0"><span className="font-normal text-small">Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
            </div>
          </div>
        </div>


        <CurrentRate />

        <BanksInfo />
      </div>
    </GuestLayout>
  );
}
