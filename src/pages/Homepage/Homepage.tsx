import { FC, useState } from 'react'
import Map from '../../components/Map/Map'
import HandlepageExtended from '../../components/HomepageExtended/HomepageExtended'
import ClassicButton from '../../components/Buttons/ClassicButton'
import { calculatedResponsesProps } from '../../interfaces/interfaces'


const Homepage: FC = () => {
    const [calculatedResponses, setCalculatedResponses] = useState<calculatedResponsesProps>({
        origin: {
            lat: 0,
            lng: 0
        },
        destination: {
            lat: 0,
            lng: 0
        },
        stops: []
    })
    const [directionResponse, setDirectionResponse] = useState<google.maps.DirectionsResult>()

    const calculateRoute = () => {
        const directionsService = new window.google.maps.DirectionsService();
        const { origin, destination, stops } = calculatedResponses;
        const waypoints = stops.map((stop) => ({
          location: new window.google.maps.LatLng(stop.lat, stop.lng),
          stopover: true,
        }));

        const request = {
            origin: origin!,
            destination: destination!,
            waypoints: waypoints!,
            travelMode: window.google.maps.TravelMode.DRIVING, 
          };
          
          directionsService.route(request, (result, status) => {
            if (status === 'OK') {
                setDirectionResponse(result!)
            }
          })
        }

    let buttonContent = null;
    if (calculatedResponses.stops.length > 0) {
        buttonContent = (
            <div className=''>
                 <ClassicButton
                type='button'
                name='Show routes'
                flexEnd={true}
                functionToCall={calculateRoute}
                />
            </div>
        )
    }
    return (
        <div className='flex flex-col h-full'>
           <div className='relative flex flex-col h-[50%]'>
                <div className='bg-[#00253A] p-20 text-white flex flex-col font-medium '>
                    <span>Pick origin and destination</span>
                    <span>Pick stops between them </span>
                </div>
                <div className='absolute top-36 w-full min-h-1/2 ' >
                    <div className='p-2 w-[95%] xl:w-[60%] overflow-hidden m-auto  '>
                        <div className='bg-white shadow-md scrollbar-none border space-y-2 h-[17rem] xl:h-[20rem] overflow-hidden overflow-y-scroll  p-10 rounded-md w-full md:w-auto'>
                            <HandlepageExtended
                            calculatedResponses={calculatedResponses}
                            setCalculatedResponses={setCalculatedResponses}
                            />
                            {buttonContent} 
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex grow p-2'>
                <Map 
                calculatedResponses={calculatedResponses}
                directionResponse={directionResponse}
                />
            </div>
        </div>
    )
}

export default Homepage