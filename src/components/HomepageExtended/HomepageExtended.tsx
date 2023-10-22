import { FC, ChangeEvent, useState, Fragment } from 'react'
import HandleForm from './HandleForm'
import HandleStops from './HandleStops'

export interface errorsProps {
    originError: string,
    destinationError: string
}
export interface stateInfoProps {
    origin: string,
    destination: string,
    stops: string[]
    
}

const HandlepageExtended: FC = () => {
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
            />
            <HandleStops 
            stateInfo={stateInfo}
            setStateInfo={setStateInfo}
            handleInputChange={handleInputChange}
            />
        </Fragment>
         
    )
}

export default HandlepageExtended