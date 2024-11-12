import React, { useState } from 'react'
import Pinteg from '../../components/Pinteg'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Stories from '../../components/Stories';
import Cure from '../../components/Cure';
import Banks from '../../components/Banks';
import { Button, Card, CardBody, Col, Input, Row } from 'reactstrap';
import akbank from '../../images/akbank.png'
import garanti from '../../images/garanti.png'
import halkbank from '../../images/halkbank.png'
import isbank from '../../images/isbank.png'
import qnb from '../../images/qnb.png'
import ziraat from '../../images/ziraat.png'
import { Radio } from 'antd';

const PayPage = () => {
    const [cardDetails, setCardDetails] = React.useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });
    const [price, setPrice] = React.useState("");
    const [date, setDate] = React.useState('');

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
        <Pinteg>
            <Stories />
            <div className='pay'>
                <div className='mb-3'><h4>Ödeme Yap</h4></div>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={6} className='d-flex align-items-center justify-content-center'>
                                <div>
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
                            </Col>
                            <Col md={6}>
                                <div>
                                    <Row>
                                        <Col md={12} className='mb-3'>
                                            <div className='item'>
                                                <small>Ödenecek Tutar</small>
                                                <Input type='text' placeholder='Ödenecek tutar girin' onChange={handlePriceChange} />
                                            </div>
                                        </Col>
                                        <Col md={6} className='mb-3'>
                                            <div className='item'>
                                                <small>Kart Üzerindeki İsim</small>
                                                <Input type='text' name="name" placeholder='Kart üzerindeki ismi girin' onChange={handleCardInputChange} onFocus={handleCardInputFocus} />
                                            </div>
                                        </Col>
                                        <Col md={6} className='mb-3'>
                                            <div className='item'>
                                                <small>Kart Numarası</small>
                                                <Input type='text' placeholder='Kart numarası girin' onFocus={handleCardInputFocus} value={cardDetails.number} onChange={handleChange} />
                                            </div>
                                        </Col>
                                        <Col md={6} className='mb-3'>
                                            <div className='item'>
                                                <small>Ay / Yıl</small>
                                                <Input type='text' placeholder='Ay ve yıl girin (MM/YY)' name="expiry" onFocus={handleCardInputFocus} value={date} onChange={handleDateChange} />
                                            </div>
                                        </Col>
                                        <Col md={6} className='mb-3'>
                                            <div className='item'>
                                                <small>CVV</small>
                                                <Input type='text' placeholder='CVV girin' name="cvc" maxLength={4} onChange={handleCardInputChange} onFocus={handleCardInputFocus} />
                                            </div>
                                        </Col>
                                        <Col md={12} className='mb-3'>
                                            <div className='item'>
                                                <small>Telefon</small>
                                                <Input type='text' placeholder='Telefonunuzu girin' onFocus={handleCardInputFocus} onChange={(e) => setCardDetails(prev => ({ ...prev, phone: e.target.value }))} />
                                            </div>
                                        </Col>
                                        <Col md={12} className='mb-3'>
                                            <div className='item'>
                                                <small>Açıklama</small>
                                                <Input type='textarea' placeholder='Açıklamanızı girin' onFocus={handleCardInputFocus} onChange={(e) => setCardDetails(prev => ({ ...prev, note: e.target.value }))} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={12} className='mb-3 d-flex justify-content-center'>
                                <Radio.Group>
                                    <div className="mt-5 d-flex justify-content-center">
                                        <div className="">
                                            <div className="bg-gray-200 d-flex justify-content-center p-1"><img src={ziraat} alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="ziraat Tek Çekim">Tek Çekim</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="ziraat 2 Taksit">2 Taksit</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="ziraat 3 Taksit">3 Taksit</Radio></div>
                                        </div>
                                        <div className="">
                                            <div className="bg-gray-200 d-flex justify-content-center p-1"><img src={halkbank} alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="halkbank Tek Çekim">Tek Çekim</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="halkbank 2 Taksit">2 Taksit</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="halkbank 3 Taksit">3 Taksit</Radio></div>
                                        </div>
                                        <div className="">
                                            <div className="bg-gray-200 d-flex justify-content-center p-1"><img src={akbank} alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="akbank Tek Çekim">Tek Çekim</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="akbank 2 Taksit">2 Taksit</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="akbank 3 Taksit">3 Taksit</Radio></div>
                                        </div>
                                        <div className="">
                                            <div className="bg-gray-200 d-flex justify-content-center p-1"><img src={garanti} alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="garanti Tek Çekim">Tek Çekim</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="garanti 2 Taksit">2 Taksit</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="garanti 3 Taksit">3 Taksit</Radio></div>
                                        </div>
                                        <div className="">
                                            <div className="bg-gray-200 d-flex justify-content-center p-1"><img src={qnb} alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="qnb Tek Çekim">Tek Çekim</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="qnb 2 Taksit">2 Taksit</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="qnb 3 Taksit">3 Taksit</Radio></div>
                                        </div>
                                        <div className="">
                                            <div className="bg-gray-200 d-flex justify-content-center p-1"><img src={isbank} alt="" style={{ height: 40, borderRadius: 10 }} /></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="isbank Tek Çekim">Tek Çekim</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="isbank 2 Taksit">2 Taksit</Radio></div>
                                            <div className="border border-gray-200 p-2 rounded mt-0 mb-0"><Radio value="isbank 3 Taksit">3 Taksit</Radio></div>
                                        </div>
                                    </div>
                                </Radio.Group>
                            </Col>
                            <Col md={12} className='mt-3 d-flex justify-content-center'>
                                <Button className='btn rounded-xl btn-warning text-white'>Ödeme Yap</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
            <Cure />
            <Banks />
        </Pinteg>
    )
}

export default PayPage
