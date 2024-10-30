"use client"
import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import BanksInfo from "@/components/Items/BanksInfo";
import Card from "./card";
import { images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";

export default function Contact() {
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

                <CurrentRate />

                <BanksInfo />
            </div>
        </GuestLayout>
    );
}
