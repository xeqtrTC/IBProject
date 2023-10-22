import { FC } from 'react'
import { ImSpinner9 } from 'react-icons/im'

const LoadingSpinner: FC = () => {
    return (
        <div className='flex justify-center items-center bg-white w-full z-[100] h-full'>
            <ImSpinner9 className='animate-spin w-12 h-12 text-blue-500' />
        </div>
    )
}

export default LoadingSpinner