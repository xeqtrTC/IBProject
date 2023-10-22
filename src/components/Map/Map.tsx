import { FC,useEffect, useState } from 'react'
import { useLoadScript, GoogleMap } from '@react-google-maps/api'
import LoadingSpinner from '../Loaders/LoadingSpinner'

const Map: FC = () => {
    const [center, setCenter] = useState<{
        lat: number,
        lng: number
    }>({
        lng: 0,
        lat: 0
    })
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API,        
    })
    let content = null;

    const successLocation = (position: GeolocationPosition) => {
        const { 
            latitude,
            longitude
        } = position.coords
        setCenter({
            lat: latitude,
            lng: longitude
        })
    }
    const errorLocation = () => {
        setCenter({
            lat: 46.0000 ,
            lng:  12.0000
        })
    }
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successLocation, errorLocation)
        }
    }
    
    useEffect(() => {
        getUserLocation()
    }, [])

    if (!isLoaded) {
        content = <LoadingSpinner />
    }
    if (isLoaded) {    
        content = (
            <GoogleMap zoom={6} center={{ lat: center.lat, lng: center.lng}} mapContainerClassName='w-full h-full'>
            </GoogleMap>
        )
    }
    return content
}

export default Map