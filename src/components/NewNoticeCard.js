import React from 'react'
import hero from '../images/hero.jpeg'
import { Link } from 'react-router-dom'

const NewNoticeCard = () => {
    return (
        <Link to="/" className='new-notice-card mb-3'>
            <div><img src={hero} alt='' /></div>
            <div>
                <div><small>26.09.2024</small></div>
                <div className='mt-2'><h6>Siz daha fazlasını istediniz, biz yaptık!</h6></div>
                <div className='mt-2'><p>Bize hem buradan hem de yeni B2B platformumuzdan ulaşabilirsiniz. Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p></div>
            </div>
        </Link>
    )
}

export default NewNoticeCard
