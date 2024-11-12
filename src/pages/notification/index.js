import React from 'react'
import Pinteg from '../../components/Pinteg'
import Stories from '../../components/Stories'
import Cure from '../../components/Cure'
import img from '../../images/c1.png'
import { Card, CardBody } from 'reactstrap'

const NotificationPage = () => {
    return (
        <Pinteg>
            <Stories />
            <div className='notification'>
                <div className='mb-3'><h4>Bildirimler</h4></div>
                <Card className='shadow-sm rounded-xl'>
                    <CardBody>
                        <div className='d-flex justify-content-start mb-3'>
                            <div><img src={img} alt='' /></div>
                            <div className='ml-2'>
                                <div><strong>Lorem Ipsum</strong></div>
                                <div className='mt-1'><span>Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start mb-3'>
                            <div><img src={img} alt='' /></div>
                            <div className='ml-2'>
                                <div><strong>Lorem Ipsum</strong></div>
                                <div className='mt-1'><span>Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start mb-3'>
                            <div><img src={img} alt='' /></div>
                            <div className='ml-2'>
                                <div><strong>Lorem Ipsum</strong></div>
                                <div className='mt-1'><span>Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start mb-3'>
                            <div><img src={img} alt='' /></div>
                            <div className='ml-2'>
                                <div><strong>Lorem Ipsum</strong></div>
                                <div className='mt-1'><span>Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start mb-3'>
                            <div><img src={img} alt='' /></div>
                            <div className='ml-2'>
                                <div><strong>Lorem Ipsum</strong></div>
                                <div className='mt-1'><span>Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start mb-3'>
                            <div><img src={img} alt='' /></div>
                            <div className='ml-2'>
                                <div><strong>Lorem Ipsum</strong></div>
                                <div className='mt-1'><span>Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start mb-3'>
                            <div><img src={img} alt='' /></div>
                            <div className='ml-2'>
                                <div><strong>Lorem Ipsum</strong></div>
                                <div className='mt-1'><span>Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start mb-3'>
                            <div><img src={img} alt='' /></div>
                            <div className='ml-2'>
                                <div><strong>Lorem Ipsum</strong></div>
                                <div className='mt-1'><span>Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum.</span></div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <Cure />
        </Pinteg>
    )
}

export default NotificationPage
