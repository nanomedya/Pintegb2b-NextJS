import React, { useState } from 'react'
import logo from '../../../images/logo.png'
import { Button, Card, CardBody, Input } from 'reactstrap'
import { Eye, EyeOff } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '../../../redux/slices/loginSlice'

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [seePass, setSeePass] = useState(false)
    const [formData, setFormData] = useState({ username: "", password: "" })

    const getData = async () => {
        const data = await dispatch(fetchLogin({ email: formData.username, password: formData.password }))
        console.log(data)
        if (data.payload) {
            localStorage.setItem("auth", JSON.stringify(data.payload))
            navigate("/")
        }
    }

    return (
        <div className='login'>
            <div className='content'>
                <div className='text-center'><img src={logo} alt='' /></div>
                <Card className='shadow-sm mt-3'>
                    <CardBody>
                        <div className='item'>
                            <small>Kullanıcı Adı</small>
                            <Input type='text' placeholder='Kullanıcı adınızı girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                        </div>
                        <div className='item mt-2'>
                            <small>Şifre</small>
                            <Input type={seePass ? 'text' : 'password'} placeholder='Şifrenizi girin' onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} />
                            <div className='eye' onClick={() => setSeePass(!seePass)}>{seePass ? <Eye /> : <EyeOff />}</div>
                        </div>
                        <div className='mt-3 d-flex align-items-center justify-content-end'>
                            <div><Link to="/forgot-password" className='text-secondary'>Şifremi unuttum</Link></div>
                            <div className='ml-2'><Button onClick={getData} className='btn'>Giriş Yap</Button></div>
                        </div>
                    </CardBody>
                </Card>
                <div className='mt-3 text-center'><span className='text-secondary'>© 2024 PintegB2B™ Tüm hakları saklıdır.</span></div>
            </div>
        </div>
    )
}

export default LoginPage
