import React from 'react'

const Card = ({ title }) => {
    return (
        <div className="flex flex-wrap mb-5 items-center lg border rounded-xl border-gray-200 shadow p-5">
            <div className="w-full md:w-1/1 lg:w-1/2">
                <div className="font-bold text-2xl"><span>{title}</span></div>
                <div className="mt-4"><span className="font-bold text-md">Adres: </span><span>Ayyıldız Mahallesi, Mimar Sinan Sokak, 23/3 Pursaklar/ANKARA</span></div>
                <div className="mt-2"><span className="font-bold text-md">Telefon: </span><span>0555 555 55 55</span></div>
                <div className="mt-2"><span className="font-bold text-md">Fax: </span><span>0212 234 21 34</span></div>
            </div>
            <div className="w-full md:w-1/1 lg:w-1/2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24437.800071584606!2d32.881466482467005!3d40.036918676174146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4082086d29b99d0f%3A0xae9925dae6fd007a!2sPursaklar%2C%20Ankara!5e0!3m2!1sen!2str!4v1730206795463!5m2!1sen!2str"
                    className="w-full"
                    // width="600"
                    height={300}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Card
