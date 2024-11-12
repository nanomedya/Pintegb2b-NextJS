import React, { useState } from 'react'
import { Copy } from 'react-feather'
import { Card, CardBody, Table } from 'reactstrap'
import { handleCopy } from './Copy'
import { Tooltip } from 'antd'
import { banks } from './Data'

const Banks = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='banks'>
            <div><h3>Banka Hesaplarımız</h3></div>
            <Card className='shadow-sm'>
                <CardBody>
                    <Table borderless={false} border={0} bordered={false}>
                        <thead className='border-0'>
                            <tr className='head border-0'>
                                <th className='border-0'>Banka</th>
                                <th className='border-0'>Şube</th>
                                <th className='border-0'>Şube Kodu</th>
                                <th className='border-0'>Hesap No</th>
                                <th className='border-0'>IBAN Numarası</th>
                                <th className='border-0 text-center'>Kopyala</th>
                            </tr>
                        </thead>
                        <tbody className='border-0'>
                            {
                                banks.map((item, key) => {
                                    return (
                                        <tr className='border-0' key={key}>
                                            <td className='border-0'>{item.title}</td>
                                            <td className='border-0'>BEYKENT TİCARİ</td>
                                            <td className='border-0'>1604</td>
                                            <td className='border-0'>6299877</td>
                                            <td className='border-0'>TR30 0006 2001 6040 0006 2998 77</td>
                                            <td className='border-0 text-center'>
                                                <Tooltip title={visible[key] ? "Kopyalandı!" : ""} visible={visible[key]}>
                                                    <Copy size={17} onClick={() => handleCopy("TR30 0006 2001 6040 0006 2998 77", key, visible, setVisible)} />
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    )
}

export default Banks
