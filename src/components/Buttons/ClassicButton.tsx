import { FC } from 'react'
interface buttonProps {
    type: 'button' | 'submit'
    name: string,
    flexEnd: boolean
    functionToCall?: (arg: unknown) => void;
    disabled?: boolean
}
const ClassicButton: FC<buttonProps> = ({
    type,
    name,
    flexEnd,
    functionToCall,
    disabled
}) => {
    return (
        <div className={`${flexEnd ? 'flex justify-end' : ''}`}>
            <button
            type={type}
            disabled={disabled && disabled}
            onClick={functionToCall}
            className='bg-[#379eff] px-10 py-1.5 h-10 text-white font-medium rounded-md w-full md:w-auto disabled:cursor-not-allowed'
            >
                {name}
            </button>
        </div>
    )    
}

export default ClassicButton