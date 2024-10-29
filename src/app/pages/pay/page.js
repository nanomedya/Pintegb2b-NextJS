"use client";
import React from "react";
import { Input, Button, Textarea, Radio, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup } from "@nextui-org/react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import NavbarWrapper from "@/components/Items/NavbarWrapper";
import Stories from "@/components/Items/Stories";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import DailyRate from "@/components/Items/DailyRate";
import { Tooltip } from "antd";
import { Copy } from "react-feather";
import { handleCopy } from "@/components/Elements/copy";

export default function Pay() {
  const banks = [
    { title: "Garanti" },
    { title: "Akbank" },
    { title: "Yapı Kredi" },
    { title: "Kuveyttürk" },
    { title: "Ziraat Bankası" },
    { title: "İş Bankası" },
  ];

  const banks2 = [
    {
      name: "İş Bankası",
      installments: ["Tek Çekim", "2 Taksit", "3 Taksit"],
    },
    {
      name: "Ziraat Bankası",
      installments: ["Tek Çekim", "2 Taksit", "3 Taksit"],
    },
    {
      name: "Garanti Bankası",
      installments: ["Tek Çekim", "2 Taksit", "3 Taksit"],
    },
  ];

  const [selectedValues, setSelectedValues] = React.useState({
    ziraat: 'Tek Çekim',
    garanti: 'Tek Çekim',
    halkbank: 'Tek Çekim',
    akbank: 'Tek Çekim',
    isbank: 'Tek Çekim',
    qnb: 'Tek Çekim',
  });

  const handleRadioChange = (bank, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [bank]: value,
    }));
  };


  const [visible, setVisible] = React.useState(Array(banks.length).fill(false));
  const [cardDetails, setCardDetails] = React.useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
  const [price, setPrice] = React.useState("");
  const [date, setDate] = React.useState('');

  const images = [
    { title: "Haberler", src: "/items/c1.png", link: "/pages/news" },
    { title: "Duyurular", src: "/items/c2.png", link: "/pages/notice" },
    { title: "Yeni Ürünler", src: "/items/c3.png", link: "/pages/new-product" },
    { title: "Bugünün Ürünleri", src: "/items/c4.png", link: "/pages/today-product" },
    { title: "Favori Ürünlerim", src: "/items/c5.png", link: "/pages/favorite-product" },
  ];

  const formatCardNumber = (input) => {
    const digits = input.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const handleCardInputChange = (evt) => {
    const { name, value } = evt.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardInputFocus = (evt) => {
    setCardDetails((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handlePriceChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9.]/g, "");
    setPrice(numericValue ? `${numericValue} ₺` : "");
  };

  const handleDateChange = (e) => {
    handleCardInputChange(e);
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setDate(value.slice(0, 5));
  };

  const handleChange = (e) => {
    handleCardInputChange(e);
    const inputValue = e.target.value;
    setCardDetails((prev) => ({ ...prev, number: formatCardNumber(inputValue) }));
  };

  return (
    <GuestLayout>
      <NavbarWrapper />
      <div className="mx-auto container">
        <div className="w-full relative mt-10">
          <Stories images={images} />
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center w-full">
          <span className="text-2xl text-gray-900 font-bold inline-block">Ödeme Yap</span>
        </div>
        <div className="mt-5 bg-white rounded-xl shadow p-5">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-3">
              <Cards
                number={cardDetails.number}
                expiry={cardDetails.expiry}
                cvc={cardDetails.cvc}
                name={cardDetails.name}
                focused={cardDetails.focus}
                placeholders={{ name: "İsim Soyisim" }}
                locale={{ valid: "Tarih" }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <form>
                <Input
                  isClearable
                  type="text"
                  label="Ödenecek Tutar"
                  value={price}
                  onChange={handlePriceChange}
                  variant="bordered"
                  placeholder="Ödenecek tutarı girin"
                />
                <div className="flex space-x-4">
                  <Input
                    isClearable
                    type="text"
                    label="Kart Üzerindeki İsim"
                    variant="bordered"
                    className="mt-3"
                    name="name"
                    onChange={handleCardInputChange}
                    onFocus={handleCardInputFocus}
                    placeholder="Kart üzerindeki ismi girin"
                  />
                  <Input
                    isClearable
                    type="text"
                    label="Kart Numarası"
                    variant="bordered"
                    className="mt-3"
                    onFocus={handleCardInputFocus}
                    value={cardDetails.number}
                    onChange={handleChange}
                    placeholder="Kart numaranızı girin"
                    maxLength={19}
                  />
                </div>
                <div className="flex space-x-4 mt-3">
                  <Input
                    isClearable
                    type="text"
                    label="Ay / Yıl"
                    variant="bordered"
                    name="expiry"
                    onFocus={handleCardInputFocus}
                    value={date}
                    onChange={handleDateChange}
                    maxLength={5}
                    placeholder="Ay ve yıl girin (MM/YY)"
                  />
                  <Input
                    isClearable
                    type="text"
                    label="CVV"
                    variant="bordered"
                    placeholder="CVV girin"
                    maxLength={4}
                    name="cvc"
                    onChange={handleCardInputChange}
                    onFocus={handleCardInputFocus}
                  />
                </div>
                <Input
                  isClearable
                  type="text"
                  label="Telefon"
                  variant="bordered"
                  className="mt-3"
                  placeholder="Telefonunuzu girin"
                  onFocus={handleCardInputFocus}
                />
                <Textarea
                  isClearable
                  label="Açıklama"
                  minRows={4}
                  maxRows={8}
                  variant="bordered"
                  className="mt-3"
                  placeholder="Açıklamanızı girin"
                  onFocus={handleCardInputFocus}
                />
              </form>
            </div>
          </div>
          <RadioGroup>
            <div className="mt-10 flex justify-center">
              <div className="">
                <div className="bg-gray-200 flex justify-center p-1"><img src="/items/ziraat.png" alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="ziraat Tek Çekim" />Tek Çekim</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="ziraat 2 Taksit" />2 Taksit</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="ziraat 3 Taksit" />3 Taksit</div>
              </div>
              <div className="">
                <div className="bg-gray-200 flex justify-center p-1"><img src="/items/halkbank.png" alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="halkbank Tek Çekim" />Tek Çekim</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="halkbank 2 Taksit" />2 Taksit</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="halkbank 3 Taksit" />3 Taksit</div>
              </div>
              <div className="">
                <div className="bg-gray-200 flex justify-center p-1"><img src="/items/akbank.png" alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="akbank Tek Çekim" />Tek Çekim</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="akbank 2 Taksit" />2 Taksit</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="akbank 3 Taksit" />3 Taksit</div>
              </div>
              <div className="">
                <div className="bg-gray-200 flex justify-center p-1"><img src="/items/garanti.png" alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="garanti Tek Çekim" />Tek Çekim</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="garanti 2 Taksit" />2 Taksit</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="garanti 3 Taksit" />3 Taksit</div>
              </div>
              <div className="">
                <div className="bg-gray-200 flex justify-center p-1"><img src="/items/qnb.png" alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="qnb Tek Çekim" />Tek Çekim</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="qnb 2 Taksit" />2 Taksit</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="qnb 3 Taksit" />3 Taksit</div>
              </div>
              <div className="">
                <div className="bg-gray-200 flex justify-center p-1"><img src="/items/isbank.png" alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="isbank Tek Çekim" />Tek Çekim</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="isbank 2 Taksit" />2 Taksit</div>
                <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="isbank 3 Taksit" />3 Taksit</div>
              </div>
            </div>
          </RadioGroup>
          <div className="flex items-center justify-center mt-10">
            <Button color="warning" className="text-white">Ödeme Yap</Button>
          </div>
        </div>

        <div className="w-full flex flex-wrap relative mt-10">
          <div className="mb-4 flex flex-wrap justify-center items-center w-full">
            <span className="text-2xl text-gray-800 font-bold inline-block">Günlük Kur</span>
          </div>
          {[{ rate: 34.15, type: "$" }, { rate: 38.21, type: "€" }, { rate: 45.77, type: "£" }].map((item, index) => (
            <div key={index} className="flex flex-wrap w-full lg:w-1/3 relative p-3">
              <div className="w-full relative bg-white rounded-xl shadow">
                <DailyRate data={item.rate} type={item.type} />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-wrap relative mt-10 p-3">
          <div className="mb-4 flex flex-wrap justify-start items-center w-full">
            <span className="text-2xl text-gray-800 font-bold inline-block">Banka Hesaplarımız</span>
          </div>
          <div className="flex flex-wrap w-full mt-3 relative">
            <div className="w-full relative bg-white rounded-xl shadow p-3 overflow-x-auto whitespace-nowrap">
              <Table aria-label="bank accounts list table" shadow="none" className="w-full">
                <TableHeader>
                  <TableColumn>Banka</TableColumn>
                  <TableColumn>Şube</TableColumn>
                  <TableColumn>Şube Kodu</TableColumn>
                  <TableColumn>Hesap No</TableColumn>
                  <TableColumn>IBAN Numarası</TableColumn>
                  <TableColumn>Kopyala</TableColumn>
                </TableHeader>
                <TableBody>

                  {banks.map((item, key) => (

                    <TableRow key={key}>
                      <TableCell>	{item.title} </TableCell>
                      <TableCell>	BEYKENT TİCARİ </TableCell>
                      <TableCell>	1604 </TableCell>
                      <TableCell>	6299877 </TableCell>
                      <TableCell>TR30 0006 2001 6040 0006 2998 77</TableCell>
                      <TableCell>
                        <Tooltip title={visible[key] ? "Kopyalandı!" : ""} visible={visible[key]}>
                          <Copy className="cursor-pointer" onClick={() => handleCopy("TR30 0006 2001 6040 0006 2998 77", key, visible, setVisible)} />
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
