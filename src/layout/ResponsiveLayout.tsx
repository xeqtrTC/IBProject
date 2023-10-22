import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const ResponsiveLayout: FC = () => {
    return (
        <div className='bg-[#1F283B] p-2 h-screen'>
            <div className=' xl:w-4/5 m-auto h-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default ResponsiveLayout