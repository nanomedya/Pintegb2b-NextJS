import React, { useState } from 'react'
import { Card, CardBody, Input, Button, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ChevronDown, Search, XCircle } from 'react-feather';

const Searchs = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [tab, setTab] = useState(1)
    const [text, setText] = useState("")
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)

    const toggleValue = (e) => setText(e.target.value)
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
    const toggle3 = () => setDropdownOpen3((prevState) => !prevState);
    const handleCheck1 = () => setCheck1(!check1)
    const handleCheck2 = () => setCheck2(!check2)
    const clearText = () => setText("")

    return (
        <div className='search'>
            <Card className='shadow-sm'>
                <CardBody>
                    <div>
                        <div className='tabs'>
                            <div onClick={() => setTab(1)} className={`item${tab === 1 ? " active" : ""}`}><span>Tümünde Ara</span></div>
                            <div onClick={() => setTab(2)} className={`item${tab === 2 ? " active" : ""}`}><span>Araç Seçenek Ara</span></div>
                        </div>
                        <div className='mt-3 position-relative'>
                            <div className='sicon'><Search /></div>
                            <Input type='text' placeholder='Ara...' defaultValue={text} value={text} onChange={toggleValue} />
                            {text !== "" ? <div className='sx' onClick={clearText}><XCircle size={22} /></div> : null}
                        </div>
                        <div className='filter'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <div className='d-flex justify-content-start'>
                                        <div className='mr-3'>
                                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                                <DropdownToggle className='bg-white text-dark border-0 shadow-none'>
                                                    <div className='item'>
                                                        <span>Marka Seç</span>
                                                        <ChevronDown />
                                                    </div>
                                                </DropdownToggle>
                                                <DropdownMenu className='shadow rounded-xl border-0' style={{ borderRadius: 15 }}>
                                                    <DropdownItem>Siparişlerim</DropdownItem>
                                                    <DropdownItem>Bakiye Siparişlerim</DropdownItem>
                                                    <DropdownItem>Kargo Nerede?</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className='mr-3'>
                                            <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                                                <DropdownToggle className='bg-white text-dark border-0 shadow-none'>
                                                    <div className='item'>
                                                        <span>Araç Grubu Seç</span>
                                                        <ChevronDown />
                                                    </div>
                                                </DropdownToggle>
                                                <DropdownMenu className='shadow rounded-xl border-0' style={{ borderRadius: 15 }}>
                                                    <DropdownItem>Siparişlerim</DropdownItem>
                                                    <DropdownItem>Bakiye Siparişlerim</DropdownItem>
                                                    <DropdownItem>Kargo Nerede?</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className='mr-5'>
                                            <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                                                <DropdownToggle className='bg-white text-dark border-0 shadow-none'>
                                                    <div className='item'>
                                                        <span>Depo Seç</span>
                                                        <ChevronDown />
                                                    </div>
                                                </DropdownToggle>
                                                <DropdownMenu className='shadow rounded-xl border-0' style={{ borderRadius: 15 }}>
                                                    <DropdownItem>Siparişlerim</DropdownItem>
                                                    <DropdownItem>Bakiye Siparişlerim</DropdownItem>
                                                    <DropdownItem>Kargo Nerede?</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className='mr-5 d-flex align-items-center custom-checkbox-container'>
                                            <div className='check'>
                                                <Label check>
                                                    <Input type='checkbox' id='item1' checked={check1} onChange={handleCheck1} />
                                                    <span>Stoktakiler</span>
                                                </Label>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <div className='check'>
                                                <Label check>
                                                    <Input type='checkbox' checked={check2} onChange={handleCheck2} />
                                                    <span>Üreticide Ara</span>
                                                </Label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-end'>
                                        <Button className='sbutton'><Search /><span>Ara</span></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Searchs
