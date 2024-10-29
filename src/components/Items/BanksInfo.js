import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { Tooltip } from 'antd'
import React from 'react'
import { Copy } from 'react-feather'
import { handleCopy } from '../Elements/copy'
import { banks } from '../Elements/data'

const BanksInfo = ({ visible, setVisible }) => {
    return (
        <div className="w-full flex flex-wrap relative mt-10 p-3">
            <div className="mb-4 flex flex-wrap justify-start items-center w-full">
                <span className="text-2xl text-gray-800 font-bold inline-block">Banka Hesaplarımız</span>
            </div>

            <div className="flex flex-wrap w-full mt-3 relative">
                <div className="w-full relative bg-white rounded-xl shadow p-3 overflow-x-auto whitespace-nowrap">
                    <Table aria-label="bank accounts list table" shadow="none" className="w-full">
                        <TableHeader>
                            <TableColumn>Banka</TableColumn>
                            <TableColumn>Şube</TableColumn>
                            <TableColumn>Şube Kodu</TableColumn>
                            <TableColumn>Hesap No</TableColumn>
                            <TableColumn>IBAN Numarası</TableColumn>
                            <TableColumn>Kopyala</TableColumn>
                        </TableHeader>
                        <TableBody>

                            {banks.map((item, key) => (

                                <TableRow key={key}>
                                    <TableCell>	{item.title} </TableCell>
                                    <TableCell>	BEYKENT TİCARİ </TableCell>
                                    <TableCell>	1604 </TableCell>
                                    <TableCell>	6299877 </TableCell>
                                    <TableCell>TR30 0006 2001 6040 0006 2998 77</TableCell>
                                    <TableCell>
                                        <Tooltip title={visible[key] ? "Kopyalandı!" : ""} visible={visible[key]}>
                                            <Copy className="cursor-pointer" onClick={() => handleCopy("TR30 0006 2001 6040 0006 2998 77", key, visible, setVisible)} />
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default BanksInfo
