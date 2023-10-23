import { FC, ChangeEvent, useState, Fragment, Dispatch, SetStateAction } from 'react'
import HandleForm from './HandleForm'
import HandleStops from './HandleStops'
import { calculatedResponsesProps } from '../../pages/Homepage/Homepage'

export interface errorsProps {
    originError: string,
    destinationError: string
}
export interface stateInfoProps {
    origin: string,
    destination: string,
    stops: string[]
    
}

const HandlepageExtended: FC<{
    setCalculatedResponses: Dispatch<SetStateAction<calculatedResponsesProps>>,
    calculatedResponses: calculatedResponsesProps
}> = ({
    setCalculatedResponses,
    calculatedResponses
}) => {
    const [stateInfo, setStateInfo] = useState<stateInfoProps>({
        origin: '',
        destination: '',
        stops: []
    })
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index?: number) => {
        const { value, name } = e.currentTarget;
        setStateInfo((prev) => {
            if (name === 'stops') {
                const updatedStops = [...prev.stops]
                updatedStops[index!] = value
                return { ...prev, stops: updatedStops }
            } else {
                return { ...prev, [name]: value }
            }
        })
    }
    
    return (        
        <Fragment>
            <HandleForm 
            stateInfo={stateInfo}
            handleInputChange={handleInputChange}
            setCalculatedResponses={setCalculatedResponses}
            />
            <HandleStops 
            stateInfo={stateInfo}
            setStateInfo={setStateInfo}
            handleInputChange={handleInputChange}
            setCalculatedResponses={setCalculatedResponses}
            calculatedResponses={calculatedResponses}
            />
        </Fragment>
         
    )
}

export default HandlepageExtended