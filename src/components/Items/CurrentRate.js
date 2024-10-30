import React from 'react'
import DailyRate from './DailyRate'

const CurrentRate = () => {
    return (
        <div className="w-full flex flex-wrap relative mt-10">
            <div className="mb-4 flex flex-wrap justify-center items-center w-full">
                <span className="text-2xl text-gray-800 font-bold inline-block">Günlük Kur</span>
            </div>

            <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
                <div className="w-full relative bg-white rounded-xl shadow">
                    <DailyRate data={34.15} type="$" key="dr1" />
                </div>
            </div>

            <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
                <div className="w-full relative bg-white rounded-xl shadow">
                    <DailyRate data={38.21} type="€" key="dr2" />
                </div>
            </div>

            <div className="flex flex-wrap w-full lg:w-1/3 relative p-3">
                <div className="w-full relative bg-white rounded-xl shadow">
                    <DailyRate data={45.77} type="£" key="dr3" />
                </div>
            </div>
        </div>
    )
}

export default CurrentRate
