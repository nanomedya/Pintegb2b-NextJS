import React from 'react'
import Pinteg from '../../components/Pinteg'
import News from '../home/News'
import Stories from '../../components/Stories'
import Cure from '../../components/Cure'

const NewsPage = () => {
    return (
        <Pinteg>
            <Stories />
            <div className='news-page'>
                <News isFull />
            </div>
            <Cure />
        </Pinteg>
    )
}

export default NewsPage
