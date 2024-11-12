import React from 'react'
import logo from '../images/logo.png'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'react-feather'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div><img src={logo} alt='' /></div>
                <div>
                    <div><span>PintegB2B</span></div>
                    <div className='mt-1'><span className='text-secondary'>pintegb2b.com</span></div>
                </div>
            </div>
            <div className='center'>
                <Row>
                    <Col md={3} className='mb-4'>
                        <div>
                            <div><strong>Hızlı Linkler</strong></div>
                            <div className='mt-2'><Link to="/">Anasayfa</Link></div>
                            <div className='mt-2'><Link to="/product">Ürünler</Link></div>
                            <div className='mt-2'><Link to="/order/my-orders">Siparişler</Link></div>
                            <div className='mt-2'><Link to="order/where-is-cargo">Kargo Nerede?</Link></div>
                            <div className='mt-2'><Link to="/pay">Ödeme Yap</Link></div>
                            <div className='mt-2'><Link to="/profile">Hesabım</Link></div>
                            <div className='mt-2'><Link to="/settings">Ayarlar</Link></div>
                        </div>
                    </Col>
                    <Col md={3} className='mb-4'>
                        <div>
                            <div><strong>Yasal</strong></div>
                            <div className='mt-2'><Link to="/about">Gizlilik Sözleşmesi</Link></div>
                            <div className='mt-2'><Link to="/about">Sevkiyat Politikası</Link></div>
                            <div className='mt-2'><Link to="/about">Kullanım Şartları</Link></div>
                            <div className='mt-2'><Link to="/about">Tüketici Yasası</Link></div>
                            <div className='mt-2'><Link to="/about">İade Koşulları</Link></div>
                        </div>
                    </Col>
                    <Col md={3} className='mb-4'>
                        <div>
                            <div><strong>Kurumsal</strong></div>
                            <div className='mt-2'><Link to="pinteg.com.tr">PintegB2B™</Link></div>
                            <div className='mt-2'><Link to="mailte:info@pintegb2b.com">info@pintegb2b.com</Link></div>
                            <div className='mt-2'><Link to="tel:0312 577 25 55">0312 577 25 55</Link></div>
                            <div className='mt-2'><Link to="https://www.bing.com/maps?q=mustafa kemal mahallesi, ankara dumlupınar bulvarı e-blok no: 59 çankaya / ankara">mustafa kemal mahallesi, mahall ankara dumlupınar bulvarı e-blok no: 59 çankaya / ankara</Link></div>
                        </div>
                    </Col>
                    <Col md={3} className='mb-4'>
                        <div>
                            <div><strong>Bizi Takip Edin</strong></div>
                            <div className='mt-2 d-flex justify-content-start'>
                                <div className='face'><Facebook /></div>
                                <div className='insta'><Instagram /></div>
                                <div className='twit'><Twitter /></div>
                                <div className='youtube'><Youtube /></div>
                                <div className='in'><Linkedin /></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <div><Link to="/about">Geliştiriciler için</Link></div>
                    <div><Link to="/about">Hakkında</Link></div>
                    <div><Link to="/about">Yardım & İletişim</Link></div>
                </div>
                <div className='right'>
                    <div><span className='text-secondary'>© 2024 PintegB2B™ Tüm hakları saklıdır.</span></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
