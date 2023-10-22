import { FC, useState, ChangeEvent } from 'react'
import Input from '../Inputs/Input';
import { errorsProps, stateInfoProps } from './HomepageExtended';
import ClassicButton from '../Buttons/ClassicButton';

const HandleForm: FC<{
    stateInfo: stateInfoProps,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>, index?: number) => void,
}> = ({
    stateInfo,
    handleInputChange
}) => {
    const [errorsToShow, setErrorsToShow] = useState<errorsProps>({
        originError: '',
        destinationError: ''
    })
    const areInputsFilled = [stateInfo.destination, stateInfo.origin].every(Boolean);

    return (
        <div className='flex flex-col md:flex-row gap-5 justify-center  w-full md:w-auto'>
            <Input 
                type='text'
                name='origin'
                placeholder='Origin...'
                value={stateInfo.origin}
                onChange={handleInputChange}
                inputClass='border outline-none py-1.5 px-3 rounded-md'
                error={errorsToShow.originError}
            />
            <Input 
                type='text'
                name='destination'
                placeholder='Destination...'
                value={stateInfo.destination}
                onChange={handleInputChange}
                inputClass='border outline-none py-1.5 px-3 rounded-md'
                error={errorsToShow.destinationError}
            />
            <ClassicButton
            name="Submit"
            type="button"
            flexEnd={false}
            disabled={!areInputsFilled}
            />
        </div>
    )
}

export default HandleForm