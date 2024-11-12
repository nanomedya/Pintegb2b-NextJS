import React from 'react'
import Pinteg from '../../components/Pinteg'
import Stories from '../../components/Stories'
import Searchs from '../../components/Search'
import HomeSlider from '../../components/HomeSlider'
import NoticeNews from './NoticeNews'
import Cure from '../../components/Cure'
import Banks from '../../components/Banks'

const HomePage = () => {
    return (
        <Pinteg>
            <Stories />
            <Searchs />
            <HomeSlider />
            <NoticeNews />
            <Cure />
            <Banks />
        </Pinteg>
    )
}

export default HomePage
