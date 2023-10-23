import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const ResponsiveLayout: FC = () => {
    return (
        <div className='h-screen'>
            <div className=' h-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default ResponsiveLayout