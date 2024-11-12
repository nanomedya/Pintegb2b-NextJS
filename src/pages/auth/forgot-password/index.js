import React, { useState } from 'react'
import logo from '../../../images/logo.png'
import { Button, Card, CardBody, Input } from 'reactstrap'

const ForgotPasswordPage = () => {
    const [formData, setFormData] = useState({ mail: "" })

    return (
        <div className='forgot'>
            <div>
                <div className='text-center'><img src={logo} alt='' /></div>
                <Card className='shadow-sm mt-3'>
                    <CardBody>
                        <div className='text-center'><span>Şifremi Unuttum</span></div>
                        <div className='item mt-3'>
                            <small>E-Mail</small>
                            <Input type='text' placeholder='Kullanıcı adınızı girin' onChange={(e) => setFormData(prev => ({ ...prev, mail: e.target.value }))} />
                        </div>
                        <div className='mt-3'>
                            <div><Button className='btn btn-warning text-white rounded-xl'>Gönder</Button></div>
                            <div className='mt-3'><Button className='btn btn-white text-warning rounded-xl'>Ana Sayfa</Button></div>
                        </div>
                    </CardBody>
                </Card>
                <div className='mt-3 text-center'><span className='text-secondary'>© 2024 PintegB2B™ Tüm hakları saklıdır.</span></div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage
