import React from 'react'
import Pinteg from '../../components/Pinteg'
import Stories from '../../components/Stories'
import Cure from '../../components/Cure'
import Text from './Text'

const AboutPage = () => {
    return (
        <Pinteg>
            <Stories />

            <div className='about'>
                <div className='mb-3'><h4>Hakkımızda</h4></div>

                <Text />
            </div>

            <Cure />
        </Pinteg>
    )
}

export default AboutPage
