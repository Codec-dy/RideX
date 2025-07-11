import DashboardLayout from '@/Layout/DashboardLayout'
import TabsCard from '@/components/TabsCard'
import React from 'react'
import foreground from '@/assets/foreground.jpg'
import Image from 'next/image';
const home = () => {
  return (
    <DashboardLayout>
        <div className='flex flex-col max-w-[500px] w-full justify-self-center gap-2'>
            <div className='max-h-[200px] overflow-hidden rounded-xl'>
                <Image src={foreground} alt='Foreground' className='w-full'/>
            </div>
            <p>Select mode of transport</p>
            <div className='flex flex-col gap-3'>
                <TabsCard image='' text='AIR'/>
                <TabsCard image='' text='ROAD'/>
                <TabsCard image='' text='RAIL'/>
                <a href='/dashboard/bus'><TabsCard image='' text='BUS'/></a>
            </div>
        </div>
    </DashboardLayout>
  )
}

export default home