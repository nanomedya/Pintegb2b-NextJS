"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import DailyRate from "@/components/Items/DailyRate";
import BanksInfo from "@/components/Items/BanksInfo";
import Card from "./card";
import { images } from "@/components/Elements/data";

export default function Contact() {
    const [visible, setVisible] = React.useState(false);

    return (
        <GuestLayout>
            <NavbarWrapper />
            <div className="mx-auto container">
                <div className="w-full relative mt-10">
                    <Stories images={images} />
                </div>

                <div className="mt-12 flex ml-3 flex-wrap justify-start items-center w-full">
                    <span className="text-2xl text-gray-800 font-bold inline-block">Depolar</span>
                </div>
                <div className="mt-4 bg-white rounded-xl shadow p-5">
                    <Card title="İzmir" />
                    <Card title="Ankara" />
                    <Card title="İstanbul" />
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

                <BanksInfo visible={visible} setVisible={setVisible} />
            </div>
        </GuestLayout>
    );
}
