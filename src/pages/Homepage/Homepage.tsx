import { FC } from 'react'
import Map from '../../components/Map/Map'
import HandlepageExtended from '../../components/HomepageExtended/HomepageExtended'


const Homepage: FC = () => {
        
    return (
        <div className='flex flex-col h-full'>
            <div className='h-[65%]'>
                <Map 
            
                />
            </div>
            <div className='flex-grow max-h-[40%]'>
                <div className='h-full p-2'>
                    <div className='bg-white border h-full shadow-md scrollbar-none overflow-hidden overflow-y-scroll p-10 rounded-md w-full md:w-auto space-y-2'>
                        <HandlepageExtended />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage