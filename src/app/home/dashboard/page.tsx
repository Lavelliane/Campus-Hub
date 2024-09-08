import Banner from '@/components/Banner'
import OrgCard from '@/components/OrgCard'
import State from '@/components/State'
import React, { useState } from 'react'

const organizations = [
    {
        title: "GDSC HNU",
        description: "GDSC Description"
    },
    {
        title: "HNU",
        description: "GDSC Description"
    },
    {
        title: "HNU",
        description: "GDSC Description"
    },
    {
        title: "HNU",
        description: "GDSC Description"
    },
    {
        title: "GDSC HNU",
        description: "GDSC Description"
    },
    {
        title: "GDSC HNU",
        description: "GDSC Description"
    },
    {
        title: "GDSC HNU",
        description: "GDSC Description"
    },
    {
        title: "GDSC HNU",
        description: "GDSC Description"
    },
    {
        title: "GDSC HNU",
        description: "GDSC Description"
    },
    {
        title: "GDSC HNU",
        description: "GDSC Description"
    },
]

function DashboardPage() {

  return (
    <div className='w-full h-screen'>
      <Banner bannerTitle='Explore organizations that interest you'/>
      <State />
      <div className='flex gap-3'>
      {
        organizations.map((organization, index) => <OrgCard key={index} title={organization.title} description={organization.description} />)
      }
      </div>
    </div>
  )
}

export default DashboardPage
