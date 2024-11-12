import React from 'react'
import Pinteg from '../../components/Pinteg'
import Stories from '../../components/Stories'
import Notice from '../home/Notice'
import Cure from '../../components/Cure'

const NoticePage = () => {
    return (
        <Pinteg>
            <Stories />
            <div className='news-page'>
                <Notice isFull />
            </div>
            <Cure />
        </Pinteg>
    )
}

export default NoticePage
