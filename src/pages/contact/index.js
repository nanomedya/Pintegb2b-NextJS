import React from 'react'
import Pinteg from '../../components/Pinteg'
import Stories from '../../components/Stories'
import Cure from '../../components/Cure'
import ContactCard from '../../components/ContactCard'
import { Card, CardBody } from 'reactstrap'

const ContactPage = () => {
    return (
        <Pinteg>
            <Stories />
            <div className='contact'>
                <div className='mb-3'><h3>Depolar</h3></div>
                <Card>
                    <CardBody>
                        <ContactCard title="Ankara" />
                        <ContactCard title="İstanbul" />
                        <ContactCard title="İzmir" />
                        <ContactCard title="Ted 1" />
                        <ContactCard title="Ted 2" />
                    </CardBody>
                </Card>
            </div>
            <Cure />
        </Pinteg>
    )
}

export default ContactPage
