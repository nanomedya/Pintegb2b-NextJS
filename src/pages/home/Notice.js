import React from 'react'
import { Card, CardBody } from 'reactstrap'
import NewNoticeCard from '../../components/NewNoticeCard'

const Notice = ({ isFull }) => {
    return (
        <div className='notice-list'>
            <div className='listheader'>
                <div><h4>Duyurular</h4></div>
                {!isFull ? <div className='btn'><span>Tümünü Gör</span></div> : null}
            </div>
            <Card className='shadow-sm'>
                <CardBody>
                    <NewNoticeCard />
                    <NewNoticeCard />
                    <NewNoticeCard />
                    <NewNoticeCard />
                </CardBody>
            </Card>
        </div>
    )
}

export default Notice
