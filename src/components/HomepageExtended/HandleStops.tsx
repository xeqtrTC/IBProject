import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react'
import ClassicButton from '../Buttons/ClassicButton'
import { GrClear, } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import { stateInfoProps } from './HomepageExtended'
import Input from '../Inputs/Input'
const HandleStops: FC<{
    stateInfo: stateInfoProps
    handleInputChange: (e: ChangeEvent<HTMLInputElement>, index?: number) => void,
    setStateInfo: Dispatch<SetStateAction<stateInfoProps>>
}> = ({
    stateInfo,
    handleInputChange,
    setStateInfo
}) => {

    
    const handleRemovingOneStop = (index: number) => {
        const filterStops = stateInfo.stops.filter((item, i) => i !== index)
        setStateInfo((prev) => ({...prev, stops: filterStops}))
    }

    const handleStopInputs = (type: string) => {
        if (type === 'remove') {
            setStateInfo((prev) => ({...prev, stops: []}))
        } else if (type === 'add') {
            setStateInfo((prev) => ({...prev, stops: [...prev.stops, '']}))
        }
    }
    return (
        <div className='space-y-3'>
            <div className="flex items-center justify-end space-x-2">
                <ClassicButton
                type='button'
                name='Add stops'
                functionToCall={() => handleStopInputs('add')}
                flexEnd={false}
                />
                <div className="border p-2 rounded-md">
                    <GrClear 
                    onClick={() => handleStopInputs('remove')}
                    className='w-5 h-5 cursor-pointer hover:scale-105 transitionOverlay' 
                    />
                </div>
            </div>
            <div className='space-y-3 overflow-hidden'>
                {
                    stateInfo.stops?.map((item, index) => {
                        return (
                            <div className="flex items-center space-x-5" key={index}>
                                <div className="flex-grow">
                                    <Input
                                    key={index}
                                    type='text'
                                    value={item}
                                    name='stops'
                                    onChange={(e) => handleInputChange(e, index)}
                                    placeholder='Address of your stop'
                                    inputClass='border outline-none py-1.5 px-3 rounded-md'
                                    />
                                </div>
                                <div className="border p-2 rounded-md">
                                    <AiOutlineClose 
                                    onClick={() => handleRemovingOneStop(index)}
                                    className='w-5 h-5 cursor-pointer hover:scale-105 transitionOverlay' 
                                />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HandleStops