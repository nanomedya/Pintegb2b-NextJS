import React from 'react'
import { Col, Row } from 'reactstrap'

const Cure = () => {
    return (
        <div className='cure'>
            <div className='my-3 d-flex justify-content-center'>
                <h3>Günlük Kur</h3>
            </div>
            <Row>
                <Col md={4} className='mb-4'>
                    <div className='item shadow-sm'>
                        <div className='content'>
                            <div className='top'>
                                <div className='code'><span>$</span></div>
                                <div><strong>34.15</strong></div>
                            </div>
                            <div className='mt-2'><small>Son güncellenme: 26.09.2024 17:14</small></div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className='mb-4'>
                    <div className='item shadow-sm'>
                        <div className='content'>
                            <div className='top'>
                                <div className='code'><span>€</span></div>
                                <div><strong>38.21</strong></div>
                            </div>
                            <div className='mt-2'><small>Son güncellenme: 26.09.2024 17:14</small></div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className='mb-4'>
                    <div className='item shadow-sm'>
                        <div className='content'>
                            <div className='top'>
                                <div className='code'><span>£</span></div>
                                <div><strong>45.77</strong></div>
                            </div>
                            <div className='mt-2'><small>Son güncellenme: 26.09.2024 17:14</small></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Cure
