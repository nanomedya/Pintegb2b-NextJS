import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import person from '../images/150.jpeg'
import { ArrowDown, Bell, Box, CreditCard, FileText, Home, List, ShoppingCart } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { AnimatePresence, motion } from 'framer-motion'
import { mobilVariant } from './Animation'

const Header = () => {
    const navigate = useNavigate()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [path, setPath] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
    const toggle3 = () => setDropdownOpen3((prevState) => !prevState);

    const logout = () => {
        console.log("cık")
        localStorage.clear()
        setTimeout(() => {
            navigate("/auth")
        }, 400);
    }

    useEffect(() => {
        setPath(window.location.pathname)
    }, [])

    return (
        <div className='header'>
            <div className='web'>
                <div className='left'>
                    <div className='logo'><img src={logo} alt='' /></div>
                    <div className='menu'>
                        <div>
                            <Link to="/" className={path === "/" ? "active" : ""}>
                                <div><Home /></div>
                                <div><span>Anasayfa</span></div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/products" className={path === "/products" ? "active" : ""}>
                                <div><Box /></div>
                                <div><span>Ürünler</span></div>
                            </Link>
                        </div>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle className={`bg-white text-dark border-0 shadow-none ${path.includes("/order") ? "active" : ""}`}>
                                <div className='d-flex justify-content-center'>
                                    <List />
                                    <div className='d-flex align-items-center' style={{ marginLeft: -1 }}>
                                        <ArrowDown color='#f5a525' size={15} />
                                    </div>
                                </div>
                                <div><span>Siparişler</span></div>
                            </DropdownToggle>
                            <DropdownMenu className='shadow rounded-xl border-0' style={{ borderRadius: 15 }}>
                                <DropdownItem><Link className={path === "/order/my-orders" ? "active" : "w-100"} to="/order/my-orders">Siparişlerim</Link></DropdownItem>
                                <DropdownItem><Link className={path === "/order/my-back-orders" ? "active" : "w-100"} to="/order/my-back-orders">Bakiye Siparişlerim</Link></DropdownItem>
                                <DropdownItem><Link className={path === "/order/where-is-cargo" ? "active" : "w-100"} to="/order/where-is-cargo">Kargo Nerede?</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                            <DropdownToggle className={`bg-white text-dark border-0 shadow-none ${path.includes("/invoice") ? "active" : ""}`}>
                                <div className='d-flex justify-content-center'>
                                    <FileText />
                                    <div className='d-flex align-items-center' style={{ marginLeft: -1 }}>
                                        <ArrowDown color='#f5a525' size={15} />
                                    </div>
                                </div>
                                <div><span>Cari Hesap</span></div>
                            </DropdownToggle>
                            <DropdownMenu className='shadow rounded-xl border-0' style={{ borderRadius: 15 }}>
                                <DropdownItem><Link className={path === "/invoice/my-invoices" ? "active" : "w-100"} to="/invoice/my-invoices">Faturalar</Link></DropdownItem>
                                <DropdownItem><Link className={path === "/invoice/unclosed-invoices" ? "active" : "w-100"} to="/invoice/unclosed-invoices">Kapanmamış Faturalar</Link></DropdownItem>
                                <DropdownItem><Link className={path === "/invoice/debt-status" ? "active" : "w-100"} to="/invoice/debt-status">Borç Durumu</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className='right'>
                    <div className='menu'>
                        <Link to="/pay" className={path === "/pay" ? "active" : ""}>
                            <div><CreditCard /></div>
                            <div><span>Ödeme Yap</span></div>
                        </Link>
                        <Link to="/basket" className={path === "/basket" ? "active" : ""}>
                            <div><ShoppingCart /></div>
                            <div><span>Sepetim</span></div>
                        </Link>
                        <Link to="/notification" className={path === "/notification" ? "active" : ""}>
                            <div><Bell /></div>
                            <div><span>Bildirimler</span></div>
                        </Link>
                    </div>
                    <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                        <DropdownToggle className='bg-white text-dark border-0 shadow-none'>
                            <div className='profile'>
                                <div className='person'><img src={person} alt='' /></div>
                                <div>
                                    <div className='name'><strong>Ferhat Usta</strong></div>
                                    <div className='phone'><span>05308274758</span></div>
                                </div>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className='shadow rounded-xl border-0' style={{ borderRadius: 15 }}>
                            <DropdownItem><Link to="/profile" className='w-100'>Profilim</Link></DropdownItem>
                            <DropdownItem><Link to="/settings">Ayarlar</Link></DropdownItem>
                            <DropdownItem><Link to="/help">Yardım & Geri Bildirim</Link></DropdownItem>
                            <DropdownItem className='text-danger w-100 cursor-pointer' onClick={logout}><Link className='text-danger'>Çıkış Yap</Link></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className='mobile'>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar3"></div>
                </div>
                <div className='logo'>
                    <img src={logo} alt='' />
                </div>
                <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                    <DropdownToggle className='bg-white text-dark border-0 shadow-none'>
                        <div className='profile'>
                            <div className='person'><img src={person} alt='' /></div>
                            <div className='text-left'>
                                <div className='name'><strong>Ferhat Usta</strong></div>
                                <div className='phone'><span>05308274758</span></div>
                            </div>
                        </div>
                    </DropdownToggle>
                    <DropdownMenu className='shadow rounded-xl border-0' style={{ borderRadius: 15 }}>
                        <DropdownItem><Link to="/profile" className='w-100'>Profilim</Link></DropdownItem>
                        <DropdownItem><Link to="/setting">Ayarlar</Link></DropdownItem>
                        <DropdownItem><Link to="/help">Yardım & Geri Bildirim</Link></DropdownItem>
                        <DropdownItem className='text-danger w-100 cursor-pointer' onClick={logout}><Link>Çıkış Yap</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div variants={mobilVariant} initial="initial" animate="animate" exit="exit" className={isOpen ? 'mobile-menu' : 'd-none'}>
                        <div className={isOpen ? "d-block overflow-auto" : "d-none"}>
                            <div><Link to="/" className='text-dark'>Anasayfa</Link></div>
                            <div className='mt-2'><Link to="/product" className='text-dark'>Ürünler</Link></div>
                            <div className='mt-2'><Link to="/basket" className='text-warning'>Sepetim</Link></div>
                            <div className='mt-2'><Link to="/order" className='text-dark'>Siparişler</Link></div>
                            <div className='mt-2'><Link to="/" className='text-dark'>Cari Hesap</Link></div>
                            <div className='mt-2'><Link to="/pay" className='text-danger'>Ödeme Yap</Link></div>
                        </div>
                    </motion.div>)}
            </AnimatePresence>
        </div >
    )
}

export default Header
