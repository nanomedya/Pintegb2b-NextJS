import React from 'react'
import Pinteg from '../../components/Pinteg'

const NotFoundPage = () => {
    return (
        <Pinteg>
            <div className='my-5 py-5 rounded-xl'>
                <div className='my-5 w-100 text-center'>
                    <div><h2>Aradığınız içeriğe ulaşılamıyor!</h2></div>
                </div>
                <div className='my-5 w-100 text-center'><h3 className='text-secondary'>Lütfen ilgili linkler üzerinden ilerleyiniz!</h3></div>
            </div>
        </Pinteg>
    )
}

export default NotFoundPage
