import { FC,useEffect, useState, Fragment } from 'react'
import { useLoadScript, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
import LoadingSpinner from '../Loaders/LoadingSpinner'
import { calculatedResponsesProps } from '../../pages/Homepage/Homepage'

const Map: FC<{
    calculatedResponses: calculatedResponsesProps,
    directionResponse: google.maps.DirectionsResult | undefined
}> = ({
    calculatedResponses,
    directionResponse
}) => {
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
        const {
            origin: {
                lat: originLat,
                lng: originLng
            },
            destination: {
                lat: destinationLat,
                lng: destinationLng
            },
            stops
         } = calculatedResponses
        
        let destinationOriginContent = null
        if (originLat && originLng && destinationLat && destinationLng) {
            destinationOriginContent = (
                <Fragment>
                    <Marker position={{ lat: originLat, lng: originLng}} />
                    <Marker position={{ lat: destinationLat, lng: destinationLng}} />
                </Fragment>
            )
        }
        let stopContent = null;
        if (stops) {
            stopContent = (
                stops?.map((item, index) => {
                    const {
                        lng,
                        lat
                    } = item;
                    return (
                        <Marker key={index} position={{ lat: lat!, lng: lng!}} />
                    )
                })
            )
        }
        
        let responseContent = null;
        if (directionResponse) {
            responseContent = (
                <DirectionsRenderer directions={directionResponse} />
            )
        }

        const combinedContents = (
            <>
            {destinationOriginContent}
            {stopContent}
            {responseContent}
            </>
        )
        content = (
            <GoogleMap zoom={6} center={{ lat: center.lat, lng: center.lng}} mapContainerClassName='w-full h-full'>
                {combinedContents}
            </GoogleMap>
        )
    }
    return content
}

export default Map