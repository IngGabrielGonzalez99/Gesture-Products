import React from 'react'
import { NavbarSeller } from '../../../Components/NavbarSeller/NavbarSeller'
import { CardDashboardAdmin } from '../../../Components/CardDashboardAdmin/CardDashboardAdmin'
import { SecondCardDashboard } from '../../../Components/CardDashboardAdmin/SecondCardDashboard'
import { Footer } from '../../../Components/Footer/Footer'

export const DashboardSeller = () => {
  return (
    <div className='bg-gray-50'>
        <NavbarSeller />
        <h3 className='px-3 text-2xl font-light'>Dashboard</h3>
        <div className=''>
          <div className="flex justify-center gap-4">
            <CardDashboardAdmin className="" />
            <CardDashboardAdmin className="" />
            <CardDashboardAdmin className="" />
          </div>
          <div className='flex'>
            <SecondCardDashboard />
          </div>
        </div>
        <Footer/>
    </div>
  )
}
