import React from 'react'
import { Col, Row } from 'reactstrap'
import News from './News'
import Notice from './Notice'

const NoticeNews = () => {
    return (
        <div className='notice-news'>
            <Row>
                <Col md={6} className='mb-4'>
                    <News isFull={false} />
                </Col>
                <Col md={6} className='mb-4'>
                    <Notice isFull={false} />
                </Col>
            </Row>
        </div>
    )
}

export default NoticeNews
