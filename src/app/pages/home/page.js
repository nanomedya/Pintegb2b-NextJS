"use client"
import React from "react";
import { Input, Tabs, Tab, Select, SelectItem, Checkbox, Button, Link } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Slider from "@/components/Items/Slider";
import { Search } from "react-feather";
import Cardd from "@/components/Items/Card";
import { list, carsGroup, storeGroup } from "@/app/data/search_data";
import Stories from "@/components/Items/Stories";
import BanksInfo from "@/components/Items/BanksInfo";
import { images } from "@/components/Elements/data";
import CurrentRate from "@/components/Items/CurrentRate";
import { Chart, LinearScale, RadialLinearScale, CategoryScale, PointElement, LineElement, BarElement, ArcElement } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

Chart.register(CategoryScale, RadialLinearScale, LinearScale, PointElement, LineElement, BarElement, ArcElement);

export default function Home() {

  const data = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
    datasets: [
      {
        label: 'Veri Seti 1',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'Veri Seti 2',
        data: [28, 48, 40, 19, 86],
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
        tension: 0.1,
      },
    ],
  };

  const data2 = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
    datasets: [
      {
        label: 'Satışlar',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const data3 = {
    labels: ['Kırmızı', 'Mavi', 'Sarı'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const images2 = [
    {
      title: "slayt 1",
      src: "https://placehold.co/1536x480/orange/white",
    },
    {
      title: "slayt 1",
      src: "https://placehold.co/1536x480/orange/white",
    },
    {
      title: "slayt 1",
      src: "https://placehold.co/1536x480/orange/white",
    },
  ]

  const cardList = [
    { title: 'Siz daha fazlasını istediniz, biz yaptık!', description: 'Bize hem buradan hem de yeni B2B platformumuzdan ulaşabilirsiniz. Lorem ipsum dolor sit amet, consectetur adipiscing elit..', image: '/images/image1.jpg' },
    { title: 'PintegB2B Debriyaj Setlerinde 2000 TL İşçilik Garantisi!', description: 'İşçilik garantisi, 10000 km garantili PintegB2B debriyaj setleri. Pellentesque eget est auctor lacus imperdiet egestas accumsan..', image: '/images/image2.jpg' },
    { title: 'Kış Hazırlığını Şimdiden Yapın. Aracınız için En iyisi!', description: 'Good Year - Pro Defense ile hemen tıkla ve al. Ut ultricies consectetur diam, sed egestas libero feugiat et..', image: '/images/image3.jpg' },
    { title: 'Bu Fiyatlara Bakmadan Kızdırma Bujisi Almayın!', description: 'PintegB2B ile kızdırma bujilerinde yerli üretim. Curabitur et nibh varius, efficitur nibh sit amet, posuere metus..', image: '/images/image4.jpg' },
  ];

  return (
    <GuestLayout>
      <NavbarWrapper />

      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>

        <div className="w-full relative mt-10 bg-white p-3 rounded-xl shadow">
          <div className="relative">
            <div className="flex w-full flex-col">
              <Tabs aria-label="Options" size="lg" color="warning">
                <Tab key="tab1" title="Tümünde Ara"
                  classNames={{
                    tabContent: "font-semibold group-data-[selected=true]:text-white"
                  }}
                >
                  <Input
                    classNames={{
                      base: "max-w-full h-14",
                      mainWrapper: "h-full",
                      input: "text-lg",
                      inputWrapper: "h-full font-semibold text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    size="lg"
                    placeholder="Ara..."
                    isClearable
                    startContent={<Search className="text-3xl text-default-400 pointer-events-none flex-shrink-0" />}
                    type="text"
                  />

                  <div className="grid grid-flow-row lg:grid-flow-col gap-4 w-full  mt-5">
                    <Select
                      size="lg"
                      label="Marka Seç"
                      className="max-w-xs"
                    >
                      {list.map((item) => (
                        <SelectItem key={item.key}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      size="lg"
                      label="Araç Grubu Seç"
                      className="max-w-xs"
                    >
                      {carsGroup.map((item) => (
                        <SelectItem key={'x' + item.key}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      size="lg"
                      label="Depo Seç"
                      className="max-w-xs"
                    >
                      {storeGroup.map((item) => (
                        <SelectItem key={item.key}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <div className="checks flex justify-start items-center gap-6">
                      <Checkbox size="lg" color="warning">Stoktakiler</Checkbox>
                      <Checkbox size="lg" color="warning">Üreticide Ara</Checkbox>
                    </div>
                    <Button color="warning" variant="solid" size="lg" className="text-white self-end justify-self-center lg:justify-self-end" startContent={<Search color="white" />}>Ara</Button>
                  </div>


                </Tab>
                <Tab key="tab2" title="Araç Seçerek Ara"
                  classNames={{
                    tabContent: "font-semibold group-data-[selected=true]:text-white"
                  }}
                >


                  <div className="grid grid-flow-row lg:grid-flow-col gap-4 w-full  mt-5">
                    <Select
                      size="lg"
                      label="Marka"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Model"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Kasa"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Yıl"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Motor Hacmi"
                      className="max-w-xs"
                    ></Select>
                    <Select
                      size="lg"
                      label="Beygir Gücü"
                      className="max-w-xs"
                    ></Select>
                    <Button color="warning" variant="solid" size="lg" className="text-white self-end justify-self-center lg:justify-self-end" startContent={<Search color="white" />}>Ara</Button>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>


        <div className="w-full relative mt-10">
          <Slider images={images2} />
        </div>


        <div className="flex flex-wrap justify-center -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-3">
            <div className="bg-white rounded-xl p-3 justify-center items-center">
              <Line data={data} />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-3">
            <div className="bg-white rounded-xl p-3 justify-center items-center">
              <Bar data={data2} />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-3">
            <div className="bg-white rounded-xl p-3 justify-center items-center">
              <Doughnut data={data3} />
            </div>
          </div>
        </div>


        <div className="w-full flex flex-wrap relative mt-10">
          <div className="flex flex-wrap w-full lg:w-1/2 relative p-3">
            <div className="mb-4 flex flex-wrap justify-between items-center w-full">
              <span className="text-2xl text-gray-800 font-bold inline-block">Haberler</span>
              <Button
                href="#"
                as={Link}
                color="warning"
                className="font-semibold"
                variant="faded"
              >
                Tümünü gör
              </Button>
            </div>
            <div className="w-full relative bg-white rounded-xl shadow">
              <div className="flex flex-wrap">
                {
                  cardList.map((item, index) => {
                    return (
                      <div className="w-full" key={'c' + index}>
                        <Cardd item={item} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>


          <div className="flex flex-wrap w-full lg:w-1/2 relative p-3">
            <div className="mb-4 flex flex-wrap justify-between items-center w-full">
              <span className="text-2xl text-gray-800 font-bold inline-block">Duyurular</span>
              <Button
                href="#"
                as={Link}
                color="warning"
                className="font-semibold"
                variant="faded"
              >
                Tümünü gör
              </Button>
            </div>
            <div className="w-full relative bg-white rounded-xl shadow">
              <div className="flex flex-wrap">
                {
                  cardList.map((item, index) => {
                    return (
                      <div className="w-full" key={index}>
                        <Cardd item={item} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

        </div>

        <CurrentRate />

        <BanksInfo />
      </div>
    </GuestLayout>
  );
}
