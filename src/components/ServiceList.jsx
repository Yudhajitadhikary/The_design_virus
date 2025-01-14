import React from 'react'
import { services } from '@/constant'
export default function ServiceList() {
  return (
    <div className="lg:col-span-3 h-211">
      <div className="sticky top-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Services</h2>
        <div className="flex flex-wrap">
        <ul className="w-2/3">
          {services.map((service, index) => (
            <li
              key={index}
              className="text-gray-500 hover:text-gray-900 transition-colors cursor-pointer text-xl"
            >
              {service.service}
            </li>
          ))}
        </ul>
        <div className='w-1/3 transform'>
          <h1 className="text-yellow-400 text-6xl lg:text-7xl font-bold tracking-wider rotate-90 ml-0px lg:ml-71px border-b-2 border-yellow-400">
            WORKFOLIO
          </h1>
        </div>
        </div>
      </div>
    </div>
  )
}
