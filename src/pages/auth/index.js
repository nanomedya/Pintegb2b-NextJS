import React from 'react'
import logo from '../../images/logo.png'
import { Button, Card, CardBody } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const AuthPage = () => {
    const navigate = useNavigate()

    return (
        <div className='auth'>
            <div>
                <div className='text-center'><img src={logo} alt='' /></div>
                <Card className='mt-3 shadow-sm'>
                    <CardBody>
                        <div className='text-center'><span>Hoşgeldiniz!</span></div>
                        <div className='w-100 mt-4 text-center'><Button onClick={() => navigate("/login")} className='rounded-xl btn btn-warning text-white'>Giriş Yap</Button></div>
                        <div className='w-100 mt-3 text-center'><Button onClick={() => navigate("/register")} className='rounded-xl bg-white border border-warning text-warning'>Kayıt Ol</Button></div>
                    </CardBody>
                </Card>
                <div className='mt-3 text-center'><span className='text-secondary'>© 2024 PintegB2B™ Tüm hakları saklıdır.</span></div>
            </div>
        </div>
    )
}

export default AuthPage
