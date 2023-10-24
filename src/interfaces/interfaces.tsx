import { ChangeEvent, Dispatch, SetStateAction } from "react"

export interface uniqueCoordinatesProps {
    lat: number,
    lng: number
}

export interface calculatedResponsesProps {
    origin: {
        lat: number,
        lng: number
    },
    destination: {
        lat: number,
        lng: number
    }
    stops: {
        lat: number,
        lng: number
    }[]
}

export interface errorsProps {
    originError: string,
    destinationError: string
}
export interface stateInfoProps {
    origin: string,
    destination: string,
    stops: string[]
    
}

export interface handleStopsProps {
    setStateInfo: Dispatch<SetStateAction<stateInfoProps>>,
    stateInfo: stateInfoProps,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>, index?: number) => void,
    setCalculatedResponses: Dispatch<SetStateAction<calculatedResponsesProps>>,
    calculatedResponses: calculatedResponsesProps
}

export interface validStopsProps {
    destinationLat: number,
    destinationLng: number
}